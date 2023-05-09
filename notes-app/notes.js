const fs = require('fs')
const chalk = require('chalk')

// Retrieve notes from storage.
const loadNotes = () => {

    try {
        const bufferData = fs.readFileSync('notes.json')
        const JSONString = bufferData.toString()
        const notes = JSON.parse(JSONString)
        return notes
    } catch (e) {
        return []
    }
}

// Save notes into storage.
const saveNotes = (notes) => {

    const JSONString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', JSONString)
}

// Add a note.
const addNote = (title, body) => {

    // Retrieve notes from the storage.
    notes = loadNotes()

    // Verify if there's already a note with the same title.
    noteWithSameTitle = notes.find( (note) => note.title === title )
    if (noteWithSameTitle) {
        console.log(chalk.red.inverse('A note with the same title already exists'))
    } else {
        // Insert the new note into the array.
        notes.push({
            title: title,
            body: body
        })
    }

    // Save notes into storage.
    saveNotes(notes)
}

// Remove a note.
const removeNote = (title) => {

    // Retrieve notes from storage.
    const notes = loadNotes()

    // Remove note.
    const notesToKeep = notes.filter( (note) => note.title !== title )
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('There is no note with this title to remove!'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed!'))
    }
}

// List notes.
const listNotes = () => {

    // Retrieve notes from storage.
    const notes = loadNotes()

    if (notes.length === 0) {
        console.log(chalk.red.inverse('There are no notes to list!'))
    } else {
        console.log(chalk.green.inverse('Your notes'))
        // Loop over notes.
        notes.forEach( (note) => {
            console.log(chalk.blue.inverse(note.title))
        })
    }
}

// Read a note by title.
const readNote = (title) => {

    // Retrieve notes from storage.
    const notes = loadNotes()

    // Find a note by title.
    const noteFound = notes.find( (note) => note.title === title )
    if (!noteFound) {
        console.log(chalk.red.inverse('No note found!'))
    } else {
        console.log(chalk.blue.inverse(noteFound.title))
        console.log(noteFound.body)
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
