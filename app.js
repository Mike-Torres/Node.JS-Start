// yargs.command usage. Node.js 


yargs.command({
    command: 'list',
    describe: 'Adding to a list',
    handler: function(){
        console.log('adding to a list ')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read all objects',
    handler: function(){
        console.log('reading a list')
    }
})