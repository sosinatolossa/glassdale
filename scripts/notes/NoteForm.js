import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

export const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="author" placeholder="authorName"></input>
        <textarea type="text" id="notes" placeholder="notes"></textarea>
        <input type="text" id="suspect" placeholder="SuspectName"></input>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        //this takes what has been placed in DOM and places it in notes.json file in the API
        const author = document.querySelector("#author").value
        const suspect = document.querySelector("#suspect").value
        const text = document.querySelector("#notes").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            suspect: suspect,
            note: text,
            date: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
