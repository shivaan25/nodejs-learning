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

        const db = client.db(databaseName)

        const result = await db.collection('users').insertOne({
            name:'Parv',
            age: 21
        })
        console.log('Insertion Completed!!')
    } catch (e) {
        console.error(e.message)
        
    }
}
run()

