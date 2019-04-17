const fs = require('fs')

const getNotes = function () {
    return 'Your Notes .... '
}

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
    console.log('New note added')
} else {
    console.log('note title taken')
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

const removeNote = function(title) {
    console.log(title)
}








module.exports = getNote = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
    }
