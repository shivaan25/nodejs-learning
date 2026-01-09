const { MongoClient } = require('mongodb')





const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

async function run() {
    console.log('Program Started!!')


    try {
        const client = new MongoClient(url,{
            serverSelectionTimeoutMS: 3000,
        })


        await client.connect()
        console.log('Connected to MongoDB')

        const database = client.db(databaseName)
        const doc = [
            {name:'Shivaan' ,age:26},
            {name:'Rahul' ,age:17},
            {name:'Rohit' ,age:20}
        ]

        const insertManyEntries = await database.collection('users').insertMany(doc)
        let ids = insertManyEntries.insertedIds
        console.log(`${insertManyEntries.insertedCount} documents were inserted`)
        for(let id of Object.values(ids)){
            console.log('Inserted a Document with id: ' + id)
        }


        const findEntries = await database.collection('users').find({}).toArray()
        console.log(findEntries)
    } catch (e) {
        console.error(e.message)
        
    }
}
run()

