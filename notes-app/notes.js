const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your Notes .... '
}
// -------------------- ADD NOTE ------------------------------------------ 
const addNote = function(title, body){
    const notes = loadNotes()
    const dupilicateNotes = notes.filter(function(note){
        return note.title === title 
    })

    if (dupilicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse.bold('New note added'))
} else {
    console.log(chalk.red.inverse.bold('Note Title Taken'))
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
// -------------------- REMOVE NOTE ------------------------------------------ 
const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title // also false
    }) 
    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse.bold('Note Removed'))
    } else {
        console.log(chalk.red.inverse.bold('No Note Found'))
    } 
}



module.exports = getNote = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
    }
