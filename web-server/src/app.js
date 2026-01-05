const path=require('path')

const express = require('express')

const publicDirectory = path.join(__dirname,'../public')

const app = express()
app.set('view engine' , 'hbs')

app.use(express.static(publicDirectory))


app.get('' ,(req,res) =>{
    res.render('index',{
        title:'Weather App',
        name:'Shivam Singla'
    })
})


app.get('/about',(req,res) =>{
    res.render('about',{
       title:'About',
       name:'Ronnie Sleeping' 
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        title:'Help Page',
        contact:'Shivam Singla',
        address:'House no:242,NHBC,Panipat,Haryana'
    })
})


app.get('/weather' ,(req,res) => {
    res.send({
        location:'Panipat',
        forecast:19
    })
})



app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})