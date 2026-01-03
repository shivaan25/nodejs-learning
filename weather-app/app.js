const request = require('request')

const url ='https://api.weatherstack.com/current?access_key=09a3e384cd5aff612f6efd839382b7c3&query=New%20York'

request({ url: url , json: true} , (error , response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})