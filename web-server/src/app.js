const path=require('path')

const express = require('express')

const publicDirectory = path.join(__dirname,'../public')

const app = express()

app.use(express.static(publicDirectory))



app.get('/weather' ,(req,res) => {
    res.send({
        location:'Panipat',
        forecast:19
    })
})



app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})