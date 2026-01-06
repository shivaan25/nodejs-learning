console.log('Client Side javascript is loaded')

 
fetch('http://localhost:3000/weather?address=!')
.then((res) =>{
    res.json()
    .then((data) =>{
        if(data.error){
            console.log('Error:' + data.error)
        }else{
            console.log('Weather Forecate Data: ' + data.forecast)
        }
    })
})
