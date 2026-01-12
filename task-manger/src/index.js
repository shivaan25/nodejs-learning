const express = require('express')
 require('./db/mongoose')



const Tasks = require('./db/models/task')


const User = require('./db/models/user')

const app = express()
const port = process.env.PORT || 3000



app.use(express.json())
app.post('/task',(req,res) =>{
    const task = new Tasks(req.body)

    task.save().then(() =>{
        res.status(201).send(task)
    }).catch((e)=>{
        res.status(400).send(task)
    })
})

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() =>{
       
        res.send(user)
    }).catch((e) =>{
         res.status(400).send(e.message)
        
    })
 
})

app.listen(port, () => {
  console.log('Server is running on : ', port)
})
