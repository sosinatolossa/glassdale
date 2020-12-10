
import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"

const contentTarget = document.querySelector(".dialogContainer")
const eventHub = document.querySelector(".container")

export const AssociateDisplay = (alibi) => {
    return `
        <section class = "known_assoicates">
            <div class = "known_associates_name"><h1>${alibi.name}</h1></div>
            <div class = "known_associates_alibi"><h1>${alibi.alibi}</h1></div>
        </section>
    `
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("alibiChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.clickedCriminalID !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const crimes = useConvictions()
        //Out of all the crimes, we want to find the one crime whose ID is the same as the ID that was sent to us through our customEvent  
        const crime = crimes.find( crime => crime.id === parseInt(event.detail.clickedCriminalID) )
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */

        const criminals = useCriminals()
        
        const matchingAlibis = criminals.filter( (criminal) => criminal.known_associates === crime.name)

        render(matchingAlibis) //this invokes the render function and pass the matchingAlibis
    }
})