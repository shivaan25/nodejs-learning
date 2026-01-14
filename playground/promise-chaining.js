require('../task-manger/src/db/mongoose')
 
const Task = require('../task-manger/src/db/models/task')

Task.deleteOne({_id:'696294e38920d1918a0f4eef'})
.then((task) =>{
    console.log('Tasks is Deleted')
    return Task.find({completed:false})
}).then((tasks) =>{
    console.log(tasks)
}).catch((e) =>{
    console.log(e)
})