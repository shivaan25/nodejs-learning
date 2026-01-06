const path=require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const weatherData = require('./utils/weatherData')

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
    if(!req.query.address){
        return res.send({
            error:'PLease Provide the Address'
        })
    }
    geocode(req.query.address,(error , data) => {
       if(error){
        return res.send({error})
       }
       

    weatherData(data.latitude ,data.longitude ,(error,forecastData) =>{
    if(error){
        return res.send({error})
    }


res.render('index',{
    coordinates:{
        latitude:data.latitude,
        longitude:data.longitude
    } ,
    location:data.location,
    forecast:forecastData,
    address:req.query.address
})
 })

})
})

app.get('/products' , (req,res) =>{
    if(!req.query.search){
         res.send({
            error:'You must Provide the query search'
        })
    }
    
    res.send({
        product:[]
    })
})


app.use('/help',(req,res)=>{
    res.render('error',{
        title: 'Help Page not Found',
        name:'Shivam Singla',
        errorHandler:'Help Page Not Found'
    })
})
app.use((req, res) => {
    res.status(404).render('error',{
        title:'My 404 page',
        name:'Shivam Singla',
        errorHandler:'404 Page Not Found '
    });
});


app.listen(3000,() =>{
    console.log('Server is up on port 3000')
})