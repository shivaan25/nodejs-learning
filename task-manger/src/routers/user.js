const express = require("express");
const router = new express.Router();
const User = require("../db/models/user");
const bcrypt = require("bcrypt");
const auth = require("../middleware/auth");

//user endpoints
router.get("/user/me", auth, async (req, res) => {
  res.send(req.user);
});

router.post("/user/login", async (req, res) => {
  try {
    const user = await User.loginCredentials(req.body.email, req.body.password);
    const token = await user.genrateToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/user/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });

    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/logout/All", auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    return res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});
router.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.genrateToken();
    return res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/user/me", auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name", "email", "password"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update),
  );
  if (!isValidUpdate) {
    return res.send("invalid update!!");
  }

  try {
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });
    await req.user.save();

    res.send(req.user);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/user/me", auth, async (req, res) => {
  try {
    await req.user.deleteOne();
    res.send(req.user);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
