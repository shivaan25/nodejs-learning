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

    const tasksNotCompleted = await database.collection('tasks')
    .find({ completed:false }).toArray()

    console.log(tasksNotCompleted)
  } catch (e) {
    console.error(e.message);
  }
}
run();
