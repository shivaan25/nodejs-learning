const express = require("express");
const router = new express.Router();
const User = require("../db/models/user");

//user endpoints
router.get("/user", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/user/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById(_id).then((user) => {
      if (!user) {
        return res.status(404).send();
      }

      res.send(user);
    });
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    return res.send(user);
  } catch (e) {
    res.status(400).send();
  }
});


router.patch("/user/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update),
  );
  if (!isValidUpdate) {
    return res.send("invalid update!!");
  }

  try {
    const user = await User.findById(req.params.id);
    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });

    res.send(user);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
      return res.send("User not Found");
    }
    res.send(deleteUser);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
