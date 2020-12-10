
import { useCriminals, getCriminals } from "./CriminalProvider.js"

export const Criminal = (criminal) => {

    return `
        <section class = "criminal">
            <div class = "criminal__name"><h1>${criminal.name}</h1></div>
            <div class = "criminal__age">Age: ${criminal.age}</div>
            <div class = "criminal__conviction">Crime: ${criminal.conviction}</div>
            <div class = "criminal__datesOfIncarcerationStart">Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class = "criminal__datesOfIncarcerationEnd">Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            <button class = "associateAlibisButton" id="associates--${criminal.id}">Associate Alibis</button>
        </section>    
    `
}

const contentTarget = document.querySelector(".filter")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id === "associates--") {
        const customEvent = new CustomEvent("alibiChosen", {
            detail: {
                clickedCriminalID: event.target.value
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