const request = require('request')


const geocode = (address,callback) => {
    const geocoding_url = "https://api.radar.io/v1/geocode/forward"
    request({
    url: geocoding_url,
    qs:{
        query: encodeURIComponent(address)
    },
    headers:{
        Authorization: "prj_live_pk_59b1cd06d4c5fd23513116e756ad337fcfbc60ed"
    },
    json: true
} , (error,response) => {
        if(error){
            callback('Unable to connect to Services!',undefined)
        }else if(response.body.addresses.length === 0) {
            callback('Address not Found',undefined)
        }else{
            callback(undefined,{
                latitude: response.body.addresses[0].latitude,
                longitude: response.body.addresses[0].longitude,
                location: response.body.addresses[0].formattedAddress,
                
            })
        }
    })


}

module.exports = 
    geocode
