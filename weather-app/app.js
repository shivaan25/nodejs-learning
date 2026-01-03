const request = require('request')
const chalk = require('chalk')


const url ='https://api.weatherstack.com/current?access_key=09a3e384cd5aff612f6efd839382b7c3&query=New%20York&units=f'

request({ url: url , json: true} , (error , response) => {
    console.log(response.body.current.weather_descriptions[0] + " .Current Temperature in " + response.body.request.query + " is " + response.body.current.temperature + " and chances of getting rain is " + response.body.current.precip + "%")
})


//Geocoding 

const geocoding_url = "https://api.radar.io/v1/geocode/forward" 

request({
    url: geocoding_url,
    qs:{
        query: 'Sector-12 Panipat ,Haryana ,India'
    },
    headers:{
        Authorization: "prj_live_pk_59b1cd06d4c5fd23513116e756ad337fcfbc60ed"
    },
    json: true
} , (error,response) => {
        if(error){
            return console.log(chalk.red.inverse('Error Getting Data'))
        }
         if(response.body.meta.code !== 200){
            return console.log('Radar Error ' + request.body.meta)
        }
        const addresses = response.body.addresses
        if(!addresses || addresses.length === 0 ){
            console.log(chalk.red.inverse('Address not Found'))
        }   
        const place = response.body.addresses[0]

        console.log(place.formattedAddress)
         console.log(place.latitude)
         console.log(place.longitude)

})