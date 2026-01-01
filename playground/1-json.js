const fs = require('fs')

// const book = {
//     title: ' Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON=JSON.stringify(book)
// // console.log(book)

// // const parsingValues = JSON.parse(bookJSON)
// //  console.log(parsingValues.author)



// fs.writeFileSync('1-json.json', bookJSON)


// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)

// console.log(data.title)

const readData = fs.readFileSync('1-json.json')
const convertTostring = readData.toString()
const data = JSON.parse(convertTostring)


data.name = 'Shivaan'
data.age = 24
data.planet = 'Jupiter'

const dataJSON = JSON.stringify(data)

fs.writeFileSync('1-json.json' , dataJSON)


console.log(data.age + ' ' + ' ' + data.name)






