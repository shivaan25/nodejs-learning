const { MongoClient } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const databaseName = 'task_manager'

async function run() {
    try{
    const client = new MongoClient(url )

    await client.connect()
    console.log('Connection Done!!!')
    const database = client.db(databaseName)

    const tasks = [
        {des:'Fisrt note',
            completed:true
        },
        {des:'Second note',
            completed:true
        },
        {des:'Third Task',
            completed:false
        }
    ]

    const insertManyEntries = await database.collection('tasks').insertMany(tasks)

    console.log('Insertion Completed !!')
}
catch(e){
    console.log('Error: ', e.message )
}
}