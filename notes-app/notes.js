require('validator')



/*
const add = require('./utils.js')

const sum = add(1, 3);

console.log(add(1, 3));
console.log('-------------------------------------------------')
console.log(sum)
*/

// 
//  Challenge: Define and use a function in a new file
//
//  1. Create a new files called hello.js
//  2. Create a getSmile function that returns "you're smiling!"
//  3. Export getSmile Function 
//  4. From notes.js, load in and call the function printing message to console
//
//
const getSmile = require('./hello.js')

const smile = getSmile()

console.log(smile)



/*
//fs.writeFileSync('notes-txt', 'My name is Mike')

// 
// Challenge: Append a message to notes.text
//
// 1. Use AppendFileSync to append to the file
// 2. Run the Script
// 3. Check your work by opening the file and viewing the appended text.

const fs = require('fs')
//fs.writeFileSync('notes.txt','Hey Mike' )

fs.appendFileSync('notes.txt', ' How you doing!')
*/

