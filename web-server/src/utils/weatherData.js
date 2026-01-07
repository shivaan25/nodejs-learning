const request = require('request')
const chalk = require('chalk')

const weatherData = (latitude,longitude,callback) =>{
    const weather_url ='https://api.weatherstack.com/current'
    request({
    url: weather_url,
    qs:{
        access_key:'5768fa86c78b9402a4f5ff14f1a2cf9a',
        query:`${latitude},${longitude}`,
        units:''
    },
    json:true 

    },(error,response) =>{
        if(error){
            callback('Unable to connect With Weather API',undefined)
        }else if(response.body.success === 'false'){
            callback('Address not Found',undefined)
        }else{
            callback(undefined,
                response.body.current.weather_descriptions[0] +
             " .Current Temperature is "
              + response.body.current.temperature + " and chances of getting rain is "
             + response.body.current.precip + "%"
            )
        }

})
}

module.exports = weatherData
