const express = require('express')

const app = express()

app.get('' ,(req,res) =>{
    res.send('<h1>Weather</h1>')

})


app.get('/help' ,(req,res) => {
    res.send([{
        name:'Shivam',
        age: 26
    },{
        name:'Parv',
        age:21
    }])
})

app.get('/about' ,(req,res) => {
    res.send('About Page')
})

app.get('/weather' ,(req,res) => {
    res.send('Weather Page')
})



app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})