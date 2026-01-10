const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Connection error:', err))


const Tasks = mongoose.model('Tasks' ,{
    Body:{
        type:String
    },
    completed:{
        type:Boolean
    }
})
console.log('Model Created!!!')


const task = new Tasks({
    Body:'I am compeleting 8 Videos today',
    completed:true
})

 task.save().then((task) =>{
    return console.log(task)
 }).catch((error) =>{
    console.log('Error ',error)
 })


// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true
//   },
//   title: String,
//   completed: {
//     type: Boolean,
//     default: false
//   }
// })

// const me = new User({
//   name: 'Parv',
//   title: 'I am a teacher'
// })

// me.save()
//   .then(user => {
//     console.log('Saved:', user)
//   })
//   .catch(error => {
//     console.log('ERROR:', error)
//   })
