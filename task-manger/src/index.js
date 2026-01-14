const express = require("express");
require("./db/mongoose");

const taskRouters = require("./routers/task");
const userRouters = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(userRouters);
app.use(taskRouters);

app.listen(port, () => {
  console.log("Server is running on : ", port);
});
