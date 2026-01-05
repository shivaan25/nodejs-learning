const path=require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()


//Define Paths for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handlebars engine and views location
app.set('view engine' , 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


//Setup static directories to serve
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
        name:'Shivam Singla',
        contact:'Shivam Singla',
        address:'House no:242,NHBC,Panipat,Haryana'
    })
})


app.get('/weather' ,(req,res) => {
    res.send({
        location:'Panipat',
        forecast:19,
        name:'Shivam Singla'
    })
})



app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})