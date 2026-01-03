const request = require('request')
const chalk = require('chalk')
const geocode = require('../weather-app/utils/geocode')


// const weather_url ='https://api.weatherstack.com/current'


// request({
//     url: weather_url,
//     qs:{
//         access_key:'09a3e384cd5aff612f6efd839382b7c3',
//         query:'Haryana',
//         units:''
//     },
//     json:true 

//     },(error,response) =>{
//         if(error){
//             console.log('Unable to connect With Weather API')
//         }
//         if(response.body.success === 'false'){
//             console.log('Error Code:' + response.body.error.code )
//             console.log('Impotant Note ' + chalk.red(response.body.error.info))
//         }
//         console.log(response.body.current.weather_descriptions[0] +
//              " .Current Temperature in " + response.body.request.query + 
//              " is " + response.body.current.temperature + " and chances of getting rain is "
//              + response.body.current.precip + "%")
//     }
// )







//Geocoding 

// const geocoding_url = "https://api.radar.io/v1/geocode/forward" 

//   request({
//     url: geocoding_url,
//     qs:{
//         query: 'Sector-12 Panipat ,Haryana ,India'
//     },
//     headers:{
//         Authorization: "prj_live_pk_59b1cd06d4c5fd23513116e756ad337fcfbc60ed"
//     },
//     json: true
// } , (error,response) => {
//         if(error){
//             return console.log(chalk.red.inverse('Error Getting Data'))
//         }
//          if(response.body.meta.code !== 200){
//             return console.log('Radar Error ' + request.body.meta)
//         }
//         const addresses = response.body.addresses
//         if(!addresses || addresses.length === 0 ){
//             console.log(chalk.red.inverse('Address not Found'))
//         }   
//         const place = response.body.addresses[0]

//         console.log(place.formattedAddress)
//          console.log(place.latitude,place.longitude)
         

// })





geocode('Panipat Haryana' ,(error , data) => {
        console.log('Error' ,error)
        console.log('Data' ,data)
})
