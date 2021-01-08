import { getCriminals, useCriminals } from "./CriminalProvider.js"
import { useOfficers } from "../officers/OfficerProvider.js"
import { Criminal } from "./Criminal.js"
import { useConvictions } from "../convictions/ConvictionProvider.js"
import { useFacilities, getFacilities } from "../facility/FacilityProvider.js"
import { useCriminalFacilities, getCriminalFacilities } from "../facility/CriminalFacilityProvider.js"


const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


let criminals = []
let facilities = []
let criminalFacilities = []


const render = (criminalsToRender) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = criminalFacilities.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const matchingFacilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = facilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, matchingFacilities)
        }
    ).join("")
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

        const criminalsToFilter = criminals.slice()
        //we're trying to return if the criminal conviction is same us the crimes name
        //if they match, put them in the new array matchingCriminals
        const matchingCriminals = criminalsToFilter.filter( (criminal) => criminal.conviction === crime.name)

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

        const criminalsToFilter = criminals.slice()
        //filter the criminals by the officer that was selected and that arrested them
        const matchingCriminals = criminalsToFilter.filter( (criminal) => criminal.arrestingOfficer === anOfficer.name)
        //update the DOM with those matching criminals
        render(matchingCriminals) //this invokes the render function and pass the matchingCriminals
    }
})


export const CriminalList = () => { 

    getCriminals()
    .then(getFacilities)
    
    .then(getCriminalFacilities)
    .then(
        () => {
            // Pull in the data now that it has been fetched
            facilities = useFacilities()
            criminalFacilities= useCriminalFacilities()
            criminals = useCriminals()

            // Pass all three collections of data to render()
            render(criminals, facilities, criminalFacilities)
        }
    )
}

