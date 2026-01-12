const mongoose = require("mongoose");
const validator = require("validator");
mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager-api")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

// const Tasks = mongoose.model('Tasks' ,{
//     Body:{
//         type:String,
//         required: true
//     },
//     completed:{
//         type:Boolean
//     }
// })
// console.log('Model Created!!!')

// const task = new Tasks({
//     Body:'I am compeleting 8 Videos today',
//     completed:true
// })

//  task.save().then((task) =>{
//     return console.log(task)
//  }).catch((error) =>{
//     console.log('Error ',error)
//  })

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim:true
  },
  email: {
    type: String,
    required: true,
    trim:true,
    lowercase:true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is not valid");
      }
    },
  },
  password:{
    type:String,
    required:true,
    minLength:6,
    trim:true,
    validate(value){
        if(value === "password"){
            throw new Error ('Pssword Should not contain string "password"')
        }
    }
  },
  title: {
    type: String,
    validate(value) {
      if (value.length < 5) {
        throw new Error("Title Should be less then 5 characters");
      }
    },
  },
});

const me = new User({
  name: "Shivaan 2     ",
  email: "SHIVAMSINGLA222@GMAIL.COM",
  password:"password@123"
});

me.save()
  .then((user) => {
    console.log("Saved:", user);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
