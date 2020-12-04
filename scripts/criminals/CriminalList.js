import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"


const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const render = (criminals) => {
    // criminalElement.innerHTML = criminalCollection.map( (person) => Criminal(person))

    let appStateCriminals = []

    for (const perp of criminals) {
        appStateCriminals.push(Criminal(perp))
    }

    criminalElement.innerHTML = appStateCriminals.join("")
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const crimes = useConvictions()
        const crime = crimes.find( crime => crime.id === parseInt(event.detail.crimeThatWasChosen) )
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */

        const criminals = useCriminals()
        const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)

        render(matchingCriminals)
    }
})


export const CriminalList = () => {
    getCriminals().then( () => {
        
        let perps = useCriminals()
        render(perps)
    })
}

