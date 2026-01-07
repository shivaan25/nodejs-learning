console.log('Client Side javascript is loaded')

 



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')

// messageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit' ,(e) =>{
    e.preventDefault()

    const location = search.value

    messageOne.textContent='loading.....'
    messageTwo.textContent= ''
    fetch('/weather?address='+ location)
.then((res) =>{
    res.json()
    .then((data) =>{
        if(data.error){
            
            messageOne.textContent = data.error
            
        }else{
            messageThree.textContent= data.location
             messageOne.textContent = `(${data.coordinates.latitude}, ${data.coordinates.longitude})`


                messageTwo.textContent= data.forecast
            
        }
    })
})


})