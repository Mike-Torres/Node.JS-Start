// yargs.command usage. Node.js 


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
        console.log('adding to a list ')
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
        console.log('reading a list')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove property',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler: function(){
        console.log('remove from list')
    }
})

yargs.command({
    command: 'add',
    describe: 'add objects',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true
        }
    },
    handler: function(){
        console.log('add to list')
    }
})