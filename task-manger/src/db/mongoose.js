const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager-api")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

const Tasks = mongoose.model("Tasks", {
  Body: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
console.log("Model Created!!!");

const task = new Tasks({
  Body: "I am compeleting 8 Videos today",
});
