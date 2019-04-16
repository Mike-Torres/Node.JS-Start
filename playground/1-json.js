const fs = require('fs')
// Read the file 
const dataBuffer = fs.readFileSync('1-json.json')
// converted file into a string in JS
const dataJSON = dataBuffer.toString()
// Parsed JSON data into object and accessed property in it
const data = JSON.parse(dataJSON)

console.log(data.title)


/*const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
*/


/*
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)
*/