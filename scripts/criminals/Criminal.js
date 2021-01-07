
import { useCriminals, getCriminals } from "./CriminalProvider.js"

// export const Criminal = (criminal) => {

//     return `
//         <section class = "criminal">
//             <div class = "criminal__name"><h1>${criminal.name}</h1></div>
//             <div class = "criminal__age">Age: ${criminal.age}</div>
//             <div class = "criminal__conviction">Crime: ${criminal.conviction}</div>
//             <div class = "criminal__datesOfIncarcerationStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
//             <div class = "criminal__datesOfIncarcerationEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
//             <button class = "associateAlibisButton" id="associates--${criminal.id}">Associate Alibis</button>
//         </section>    
//     `
// }

export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
    </div>
    `
}

const contentTarget = document.querySelector(".filter")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id.includes("associates--")) {
        const customEvent = new CustomEvent("associatesBtnClicked", {
            detail: {
                clickedCriminalID: event.target.id.split("--")[1]
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const AlibiSelect = () => {
    getCriminals() 
    .then( () => {
        // Get all criminals from application state
        const criminals = useCriminals()
        render(criminals)
    })
}