import { useOfficers, getOfficers } from "./OfficerProvider.js"

const contentTarget = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


export const OfficerSelect = () => {
    getOfficers() 
    .then( () => {
        // Get all convictions from application state
        const officers = useOfficers()
        render(officers)
    })
}

const render = officersCollection => { //creating a function that...
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = ` 
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officersCollection.map( officer => `<option value = "${officer.id}">${officer.name}</option>`)}
        </select>
    `
}