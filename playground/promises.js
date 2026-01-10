const doWorkPromises = new Promise((resolve,reject) => 
{
    setTimeout(() => {
       
       reject('Failure')
      // resolve([1,2,3,4])
    },2000)
})

doWorkPromises.then((result) => {
    console.log('Success!' ,result)
}).catch((error) => {
    console.log('Error' ,error)
})

