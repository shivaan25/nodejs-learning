const express = require("express");
require("./db/mongoose");

const taskRouters = require("./routers/task");
const userRouters = require("./routers/user");

const app = express();
const port = process.env.PORT || 3000;

// app.use( (req,res,next) =>{
//   if(req.method == 'GET'){
//     res.send('GET request disable')
//   }else{
//     next()
//   }
// })

// app.use( (req,res,next) => {
//   const methods = ['GET','POST','PATCH','DELETE','PUT']
//   if(methods.includes(req.method)){
//     res.status(503).send('Server is under Mantainence')
//   }else{
//     next()
//   }
// })

app.use(express.json());

app.use(userRouters);
app.use(taskRouters);

app.listen(port, () => {
  console.log("Server is running on : ", port);
});

const Tasks = require("./db/models/task")
const User = require("./db/models/user")

const main = async () =>{
  // const task = await Tasks.findById('6971ffd2f1cb4d97ce72fac9')
  // await task.populate('owner')
  // console.log(task.owner)

//6971ffbd72497eebd359d9c5
// const user = await User.findById("6971ffbd72497eebd359d9c5")
// await user.populate('tasks')
// console.log(user.tasks)


}
main()