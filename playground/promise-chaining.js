require("../task-manger/src/db/mongoose");

const Task = require("../task-manger/src/db/models/task");

// Task.deleteOne({ _id: "696294e38920d1918a0f4eef" })
//   .then((task) => {
//     console.log("Tasks is Deleted");
//     return Task.find({ completed: false });
//   })
//   .then((tasks) => {
//     console.log(tasks);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((tasks) => {
//     console.log('Total Number of Tasks Pending : ' ,tasks)
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const deleteAndUpdate = async (id , completed) => {
    const deleteById = await Task.deleteOne({_id:id})
    console.log('Deleted')
    const taskUpdateCount = await Task.countDocuments({completed})
    console.log('Count: ',taskUpdateCount)
}

deleteAndUpdate("69648a66ba1ff0f633fcd705",true).then((resolve)=>{
    return resolve
}).catch((e) =>{
    console.log(e)
})