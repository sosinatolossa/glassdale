
/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

//l
import { useConvictions, getConvictions} from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => { //when someone selects a crime

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") { 
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", { //creating event for a new event that let it known that the user chosen the crime
            detail: {
                crimeThatWasChosen: event.target.value //value is the selected crime. e.g: If the person selected, murder, the browser would see "2", but the user sees murder
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const ConvictionSelect = () => {
    getConvictions() 
    .then( () => {
        // Get all convictions from application state
        const convictions = useConvictions()
        render(convictions)
    })
}

const render = convictionsCollection => { //creating a function that...
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = ` 
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((crime) => `<option value = ${crime.id}>${crime.name}</option>`
        )
            }
        </select>
    `
}