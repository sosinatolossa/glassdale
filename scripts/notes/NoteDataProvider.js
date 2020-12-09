

const eventHub = document.querySelector(".container")

let notes = []

export const useNotes = () => {
    return notes.slice()
}

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

export const saveNote = note => {
    let stringifiedObj = JSON.stringify(note)
    debugger
    return fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes) //fetch the notes collection containing the newly added note
    .then(dispatchStateChangeEvent) //tell any component listening that the notes state has been updated
}