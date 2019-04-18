const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//
// Challenge: Setup Commany Option and Function - Complete
//
// 1: Setup the remove command to take a required "--title" option
// 2: Create and export a removeNote function from notes.js
// 3: Call removeNote in remove command handler
// 4: Have removeNote log the title of the note to be removed
// 5: Test your work using node app.js remove --title"="some title"
//
//
// Challenge 2: Wire Up removeNote - Complete
//
// 1: Load existing Notes
// 2: Use Array Filter method to remove the matching note (if any)
// 3: Save the newly created array
// 4: Test your work with a title that exists and a title that doesn't exist
//
// Challenge 3: Use Chalk to provide a useful logs for remove
//
// 1: If a note is removed, print "Note Removed!" with a green background
// 2: if no note is removed, print "No note found!" with a red background
//
// Challenge 4: Wire Up List Command
//
// Create and export your listNotes from notes.js
// - "Your Notes" using Chalk
// - print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work!
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
    handler(argv) {
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
    handler(argv) { 
        notes.removeNote(argv.title)
    }
}),

// Create Read Command 

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'String'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    },

}),


// Create List Command 
 
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        notes.listNotes()
    },

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

/*
const payOut = [] 
const names = ["JP","DK", "Eli", "Horne"]
const sideOne = 25
const sideTwo = 25
const winAll =  sideOne + sideTwo + 25
const maxOut = 20
const reset = 0


var createScoreData = (names, ) => {
    if(names === winAll ){
        payOut.push(names) 
    }
    else if(names === sideOne){
        payOut.push(names)
    }       
    else if(names === sideTwo){
        payOut.push(names)
    }  
    else if(sideOne === sideTwo){
        reset.push(names)
    }  
    else {
        maxOut.push(names)
    }
} 
*/