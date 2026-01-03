
const geocode = require('../weather-app/utils/geocode')
const weatherData = require('../weather-app/utils/weatherData')

geocode('Panipat Haryana' ,(error , data) => {
        console.log('Error' ,error)
        console.log('Data' ,data)
})
weatherData('Panipat Haryana' ,(error,data) =>{
    console.log('Error',error)
    console.log(data)
})