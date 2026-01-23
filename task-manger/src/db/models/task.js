const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  Body: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Date,
    default: null,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});
taskSchema.pre("save", async function () {
  const task = this;
  if (task.isModified("completed") && task.completed === true) {
    task.completedAt = new Date();
  }
  if (task.isModified("completed") && task.completed === false) {
    task.completedAt = null;
  }
});
const Tasks = mongoose.model("Tasks", taskSchema);

module.exports = Tasks;
