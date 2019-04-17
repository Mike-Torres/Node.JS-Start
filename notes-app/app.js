const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//
// Challenge: Setup Commany Option and Function
//
// 1: Setup the remove command to take a required "--title" option
// 2: Create and export a removeNote function from notes.js
// 3: Call removeNote in remove command handler
// 4: Have removeNote log the title of the note to be removed
// 5: Test your work using node app.js remove --title"="some title"
//
//
// Challenge 2: Wire Up removeNote
//
// 1: Load existing Notes
// 2: Use Array Filter method to remove the matching note (if any)
//
//
//
//


// Customized yargs version

yargs.version('1.1.0')

// add, remove, read, list

// Create Add Command 

yargs.command({
    command: 'add',
    describe: 'Add missle vectors',
    builder: {
        title: {
            describe: 'add note',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
}),

// Create Remove Command 
 
yargs.command({
    command: 'remove',
    describe: 'remove all',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
}),

// Create List Command 

yargs.command({
    command: 'read',
    describe: 'Read vectors',
    handler: function(){
        console.log('reading vectors')
    }
}),


// Create Read Command 
 
yargs.command({
    command: 'list',
    describe: 'list all missle vector options',
    handler: function(){
    }
}),


yargs.parse()
//console.log(yargs.argv)




/*const command = process.argv[2]

console.log(process.argv)

if(command === 'add') {
    console.log('adding note')
} else if(command === 'remove') {
    console.log('removing note')
}
*/
/*
const words = "SUCCESS!"
const msg = chalk.green.bold.inverse(words)
console.log(msg)
console.log(process.argv[2])
*/

//
// Challenge: Use the Chalk library in your project
//
// 1. Install Chalk Version 2.4.2 - Done
// 2. Load Chalk into app.js - Done
// 3. Use it to print the string "Success!" to the console in green - done
// 4. Test your work - done
//
// Bonus: use the docs to mess around with other styles. Make the text bold and inversed - done

/*const getSmile = require('./hello.js')
const smile = getSmile()

console.log(smile)
*/

//const validator = require('validator')

//console.log(validator.isEmail('michael@yahoo.com'))
//console.log(validator.isURL('https/mead.io'))
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

/*

const smile = getSmile()

console.log(smile)
*/


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