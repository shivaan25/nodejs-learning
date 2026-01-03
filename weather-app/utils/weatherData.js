const request = require('request')
const chalk = require('chalk')

const weatherData = (address ,callback) =>{
    const weather_url ='https://api.weatherstack.com/current'
    request({
    url: weather_url,
    qs:{
        access_key:'09a3e384cd5aff612f6efd839382b7c3',
        query:encodeURIComponent(address),
        units:''
    },
    json:true 

    },(error,response) =>{
        if(error){
            callback('Unable to connect With Weather API')
        }else if(response.body.success === 'false'){
            callback('Address not Found',undefined)
        }else{
            callback(undefined,
                response.body.current.weather_descriptions[0] +
             " .Current Temperature in " + response.body.request.query + 
             " is " + response.body.current.temperature + " and chances of getting rain is "
             + response.body.current.precip + "%"
            )
        }

})
}

module.exports = weatherData
