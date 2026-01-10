const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const databaseName = "task_manager";

const id = new ObjectId();

async function run() {
  console.log("Program Started!!");

  try {
    const client = new MongoClient(url, {
      serverSelectionTimeoutMS: 3000,
    });

    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db(databaseName);

    // const task = await database.collection('tasks').findOne({_id: new ObjectId("696131659db0ad3a70e04e2f")})
    // console.log(task)

    // const tasksNotCompleted = await database.collection('tasks')
    // .find({ completed:false }).toArray()

    const updataTask =
      // await database.collection('users')
      // .updateOne({name:'Rohan'},{
      //   $inc:{
      //       age:1
      //   }
      // })
      await database
        .collection("tasks")
        .updateOne(
          { _id: new ObjectId("69612fcbfc0d518de1bd6bf3") },
          { $set: { completed: true } },
        );

    console.log("upadate completed!!!");
  } catch (e) {
    console.error(e.message);
  }
}
run();
