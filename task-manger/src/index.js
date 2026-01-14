const express = require("express");
require("./db/mongoose");

const Tasks = require("./db/models/task");

const User = require("./db/models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//user endpoints
app.get("/user", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/user/:id", async (req, res) => {
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

app.post("/user", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
});

app.patch("/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(400).send();
    }
    return res.send(user);
  } catch (e) {
    res.send(e);
  }
});

//task endpoints
app.get("/task", async (req, res) => {
  try {
    const tasks = await Tasks.find({});

    res.send(tasks);
  } catch (e) {
    res.status(500).send();
  }
});

app.get("/task/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const task = await Tasks.findById({ _id });
    res.send(task);
  } catch (e) {
    res.status(500).send();
  }
});

app.post("/task", async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.send(task);
  } catch (e) {
    res.status(400).send();
  }
});

app.patch("/task/:id", async (req, res) => {
  try {
    const task = await Tasks.findByIdAndUpdate(req.params.id, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(500).send();
    }
    return res.send(task);
  } catch (e) {
    res.status(400).send();
  }
});

app.listen(port, () => {
  console.log("Server is running on : ", port);
});
