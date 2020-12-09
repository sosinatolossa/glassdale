

import { getNotes, useNotes } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";

let visible = false
// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList") //individual notes
// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")


eventHub.addEventListener("showNotesClicked", customEvent => {
    //NoteList()
    if (visible === false) {
        NoteList()
        visible = true
    }
    else {
        contentTarget.innerHTML = ""
        visible = false
    }
})

eventHub.addEventListener("noteStateChanged", customEvent => {
    //NoteList()
    if (visible === true) {
        NoteList()
    }
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map( (note) => {
        return NoteHTMLConverter(note)
    }
        // convert the notes objects to HTML with NoteHTMLConverter

    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}