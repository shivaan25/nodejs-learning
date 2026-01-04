const { argv } = require('node:process');



const geocode = require('../weather-app/utils/geocode')
const weatherData = require('../weather-app/utils/weatherData')


const input = process.argv[2]

geocode(input ,(error , data) => {
       if(error){
        return console.log(error)
       }
       console.log('Location : ' + data.location)

 weatherData(data.latitude ,data.longitude ,(error,forecastData) =>{
    if(error){
        console.log('Error',error)
    }
   
    console.log(forecastData)
})
})


