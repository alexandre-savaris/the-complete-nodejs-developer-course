const fs = require('fs')
const chalk = require('chalk')

// Retrieve notes from storage.
// const loadNotes = function() {

//     try {
//         const bufferData = fs.readFileSync('notes.json')
//         const JSONString = bufferData.toString()
//         const notes = JSON.parse(JSONString)
//         return notes
//     } catch (e) {
//         return []
//     }
// }
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
// const saveNotes = function(notes) {

//     const JSONString = JSON.stringify(notes)
//     fs.writeFileSync('notes.json', JSONString)
// }
const saveNotes = (notes) => {

    const JSONString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', JSONString)
}

// Add a note.
// const addNote = function(title, body) {

//     // Retrieve notes from the storage.
//     notes = loadNotes()

//     // Verify if there's already a note with the same title.
//     notesWithSameTitle = notes.filter( function (note) {
//         return note.title === title
//     })
//     if (notesWithSameTitle.length > 0) {
//         console.log(chalk.red.inverse('A note with the same title already exists'))
//     } else {
//         // Insert the new note into the array.
//         notes.push({
//             title: title,
//             body: body
//         })
//     }

//     // Save notes into storage.
//     saveNotes(notes)
// }
const addNote = (title, body) => {

    // Retrieve notes from the storage.
    notes = loadNotes()

    // Verify if there's already a note with the same title.
    notesWithSameTitle = notes.filter( (note) => note.title === title )
    if (notesWithSameTitle.length > 0) {
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
// const removeNote = function (title) {

//     // Retrieve notes from storage.
//     const notes = loadNotes()

//     // Remove note.
//     const notesToKeep = notes.filter( function(note) {
//         return note.title !== title
//     })
//     if (notesToKeep.length === notes.length) {
//         console.log(chalk.red.inverse('There is no note with this title to remove!'))
//     } else {
//         saveNotes(notesToKeep)
//         console.log(chalk.green.inverse('Note removed!'))
//     }
// }
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

module.exports = {
    addNote: addNote,
    removeNote: removeNote
}
