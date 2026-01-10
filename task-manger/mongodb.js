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
    const deleteTask= await database.collection('users').deleteMany({name:'Rohan'})
    console.log('DEleted Items: ' , deleteTask.deletedCount)
  } catch (e) {
    console.error(e.message);
  }
}
run();
