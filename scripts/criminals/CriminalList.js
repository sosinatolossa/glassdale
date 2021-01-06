import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { AssociatesDialog } from "./AssociateDisplay.js"


const criminalElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


const render = (criminals) => { //criminals is our array that hold the criminals

    let appStateCriminals = []
    //can also use .map instead of for loop
    for (const perp of criminals) { // for each object of our criminals array...
        appStateCriminals.push(Criminal(perp)) //Push that object in appSateCriminals array presented in HTML. Criminal is the function that we represent out JS code in HTML
    }

    criminalElement.innerHTML = `${appStateCriminals.join("")} ${AssociatesDialog()}` //not necessary but this removes the commas after each object and joins them with no space
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

        const officers = useOfficers()
        //Out of all the crimes, we want to find the one crime whose ID is the same as the ID that was sent to us through our customEvent  
        const anOfficer = officers.find( officer => officer.id === parseInt(event.detail.officer) )
        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */

        const criminals = useCriminals() //assign the useCriminals function to criminals varaible
        //filter the criminals by the officer that was selected and that arrested them
        const matchingCriminals = criminals.filter( (criminal) => criminal.arrestingOfficer === anOfficer.name)
        //update the DOM with those matching criminals
        render(matchingCriminals) //this invokes the render function and pass the matchingCriminals
    }
})


export const CriminalList = () => { //
    getCriminals().then( () => { //get the function getCriminals that gets data of the criminals from API, change it to JS structure, puts them in table form and add them into criminals array
        
        let perps = useCriminals() //let perps equal to copy of criminals array
        render(perps) //update the DOM with the copy of array
    })
}

