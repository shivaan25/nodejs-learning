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
const bcrypt = require('bcrypt')

const myFunction = async()=>{
  const password = 'Shivam@2222'
  const hashedPassword = await bcrypt.hash(password,8)

  console.log(password)
  console.log(hashedPassword)

  const isMatch = await bcrypt.compare('shivam@2222' ,hashedPassword)
  console.log(isMatch)
}

myFunction()