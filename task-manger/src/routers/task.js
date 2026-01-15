const express = require("express");
const router = new express.Router();
const Tasks = require("../db/models/task");

//task endpoints
router.get("/task", async (req, res) => {
  try {
    const tasks = await Tasks.find({});

    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/task/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Tasks.findById({ _id });
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

router.post("/task", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send();
  }
});

router.patch("/task/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["completed"];
  const isValidUpdate = updates.every((update) =>
    allowedUpdates.includes(update),
  );
  if (!isValidUpdate) {
    return res.send("invalid update!!");
  }

  try {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(500).send();
    }
    return res.send(task);
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
