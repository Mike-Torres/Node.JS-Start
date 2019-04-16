// Challenge: Work with JSON and the file system
//
// 1. Load and Parse the JSON Data
    const fs = require('fs')
// 2. Change the name and age property using your info
    const person = {
        name: "Anthony",
        planet: "Earth",
        age: 33
    }
// 3. Stringify the changed object and overwrite the original data
    const change = JSON.stringify(person)
    fs.writeFileSync('1-json.json', change)
    const information = fs.readFileSync('1-json.json')
    const fileName = information.toString()
    const data = JSON.parse(fileName)
// 4. Test your work by viewing data in the JSON file
     console.log(data.age)
//
//

/*
const fs = require('fs')
// Read the file 
const dataBuffer = fs.readFileSync('1-json.json')
// converted file into a string in JS
const dataJSON = dataBuffer.toString()
// Parsed JSON data into object and accessed property in it
const data = JSON.parse(dataJSON)

console.log(data.title)
*/

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