import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"


const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    const criminalsCollection = useCriminals()

    contentTarget.innerHTML = `
        <section>
            <input type="text" id="author" placeholder="authorName"></input>
            <textarea type="text" id="notes" placeholder="notes"></textarea>
            <select class="dropdown" id="suspect">
                <option value="0">Please select a suspect...</option>
                ${
                    criminalsCollection.map(
                    (criminal) => `
                        <option value=${criminal.id}>
                        ${criminal.name}
                        </option>
                    `)
                }
            </select>
            <button id="saveNote">Save Note</button>
        </section>
        
    `
}

export const NoteForm = () => {
    getCriminals()
    .then( () => render())
}

// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        //this takes what has been placed in DOM and places it in notes.json file in the API
        const author = document.querySelector("#author").value
        const criminalId = parseInt(document.querySelector("#suspect").value)
        const text = document.querySelector("#notes").value
        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            author: author,
            criminalId: criminalId,
            note: text,
            date: Date.now()
        }

        // Change API state and application state
        saveNote(newNote)
    }
})
