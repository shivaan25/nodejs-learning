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
