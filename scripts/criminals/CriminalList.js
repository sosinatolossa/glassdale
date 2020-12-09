import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {getOfficers, useOfficers} from "../officers/OfficerProvider.js"
import {Criminal} from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"


const criminalElement = document.querySelector(".criminalsContainer")
const officerElement = document.querySelector(".officersContainer")
const eventHub = document.querySelector(".container")

const officersRender = (officers) => {
    let appStateOfficers = []
    for (const anOfficer of officers) {
        appStateOfficers.push(Criminal(anOfficer))
    }
}

const render = (criminals) => {

    let appStateCriminals = []
    //can also use .map instead of for loop
    for (const perp of criminals) { // for each object of our criminals array...
        appStateCriminals.push(Criminal(perp)) //Push that object in appSateCriminals array presented in HTML. Criminal is the function that we represent out JS code in HTML
    }

    criminalElement.innerHTML = appStateCriminals.join("") //not necessary but this removes the commas after each object and joins them with no space
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const crimes = useConvictions()
        //Out of all the crimes, we want to find the one crime whose ID is the same as the ID that was sent to us through our customEvent  
        const crime = crimes.find( crime => crime.id === parseInt(event.detail.crimeThatWasChosen) )
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */

        const criminals = useCriminals()
        //we're trying to return if the criminal conviction is same us the crimes name
        //if they match, put them in the new array matchingCriminals
        const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)

        render(matchingCriminals) //this invokes the render function and pass the matchingCriminals
    }
})


eventHub.addEventListener("officerSelected", event => {
    // Use the property you added to the event detail.
    if (event.detail.officer !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */

        const officers = useConvictions()
        //Out of all the crimes, we want to find the one crime whose ID is the same as the ID that was sent to us through our customEvent  
        const anOfficer = officers.find( officer => officer.id === parseInt(event.detail.officer) )
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */

        const criminals = useOfficers()
        //we're trying to return if the criminal conviction is same us the crimes name
        //if they match, put them in the new array matchingCriminals
        const matchingOfficers = criminals.filter( (officer) => officer.arrestingOfficer === officer.name)

        render(matchingOfficers) //this invokes the render function and pass the matchingCriminals
    }
})


// eventHub.addEventListener("officerSelected", event => {
//     // How can you access the officer name that was selected by the user?
//     const officerName = event.detail.officer

//     // How can you get the criminals that were arrested by that officer?
//     const criminals = useOfficers()
//     criminals.find( //(officer) => officer.id === parseInt(event.detail.officer) )
//         criminalObject => {
//             if (criminalObject.detail.officer === officerName) {
//                 return true
//             }
//         }
//     )
    
// })

export const OfficerList = () => {
    getOfficers().then( () => {
        let officers = useOfficers()
        render(officers)
    })
}


export const CriminalList = () => {
    getCriminals().then( () => {
        
        let perps = useCriminals()
        render(perps)
    })
}

