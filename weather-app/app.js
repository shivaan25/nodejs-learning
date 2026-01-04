
const geocode = require('../weather-app/utils/geocode')
const weatherData = require('../weather-app/utils/weatherData')

geocode('Delhi , India' ,(error , data) => {
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
