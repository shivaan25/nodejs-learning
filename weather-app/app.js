const request = require('request')


const url ='https://api.weatherstack.com/current?access_key=09a3e384cd5aff612f6efd839382b7c3&query=New%20York&units=f'

request({ url: url , json: true} , (error , response) => {
    console.log(response.body.current.weather_descriptions[0] + " .Current Temperature in " + response.body.request.query + " is " + response.body.current.temperature + " and chances of getting rain is " + response.body.current.precip + "%")
})