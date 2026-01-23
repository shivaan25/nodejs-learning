const express = require("express");
const router = new express.Router();
const Tasks = require("../db/models/task");
const auth = require("../middleware/auth")

//task endpoints
router.get("/task", auth,async (req, res) => {
  try {
   // const tasks = await Tasks.find({'owner':req.user._id});
    await req.user.populate('tasks')
    res.send(req.user.tasks);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/task/:id",auth, async (req, res) => {
  const _id = req.params.id
  try {
    const task = await Tasks.findOne({ _id ,'owner':req.user._id});
    if(!task){
     return res.send('There are no tasks')
    }
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/task",auth, async (req, res) => {
  const task = new Tasks({
    ...req.body,
    owner: req.user._id
  })
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send();
  }
});

router.patch("/task/:id",auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["completed"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update),
  );
  if (!isValidUpdate) {
    return res.send("invalid update!!");
  }

  try {
    const task = await Tasks.findOne({ _id: req.params.id , owner:req.user._id})
    if (!task) {
      return res.status(500).send();
    }
    updates.forEach((update) => {
      task[update] = req.body[update];
    });

    await task.save();

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/task/:id", async (req, res) => {
  try {
    const deleteTask = await Tasks.findByIdAndDelete(req.params.id);
    if (!deleteTask) {
      return res.send("Task Not Found");
    }
    return res.send(deleteTask);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
