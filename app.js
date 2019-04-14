// yargs.command usage. Node.js 

yargs.version('1.1.0')

yargs.command({
    command: 'list',
    describe: 'Adding to a list',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler: function(){
        console.log('adding to a list', argv)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read all objects',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler: function(){
        console.log('reading a list', argv)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove property',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(){
        console.log('remove from list', argv)
    }
})

yargs.command({
    command: 'add',
    describe: 'add objects',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(){
        console.log('title', argv.title)
        console.log('body', argv.body)
    }
})

yargs.parse();

// Challenge: add an option to Yargs 

// 1. setup a body option for the add command
// 2. Configure a description, Make it required, and for it to be a string
// 3. Log the body value in the handler function 
// 4. Test your work! 