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

const jwt = require("jsonwebtoken");

const myfunction = async () => {
  const token = jwt.sign({ _id: "abc123" }, "shivamsingla!eijei",
    {
      expiresIn:'7 days'
    }
  );

  console.log(token);
  const ismatch = jwt.verify(token, "shivamsingla!eijei");
  console.log(ismatch);
};

myfunction();
