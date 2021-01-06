import { useCriminals} from "./CriminalProvider.js"
// import { useConvictions } from "../convictions/ConvictionProvider.js"

// const contentTarget = document.querySelector(".dialogContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "closeDialog") {
      associatesDialog.close();
    }
})

export const AssociatesDialog = (alibi) => {
    return `
        <dialog id = "associatesDialog">
            <div id = "associatesDialog__text"></div>
            <button id = "closeDialog">close</button>
        </dialog>
    `
}

eventHub.addEventListener("associatesBtnClicked", (event) => {
    const associatesDialog = document.querySelector("#associatesDialog")
    const dialogText = document.querySelector("#associatesDialog__text")
  
    console.log('event al id', event.detail.clickedCriminalId);
  
    const clickedCriminal = useCriminals().find(
        (criminal) => criminal.id === parseInt(event.detail.clickedCriminalID)
        )

    dialogText.innerHTML =`
      <h3>Associates of ${clickedCriminal.name}</h3>
      ${clickedCriminal.known_associates.map( (associate) => `
        <h4>${associate.name}</h4>
        <div>${associate.alibi}</div>`
        ).join("")}`
  
    associatesDialog.showModal()
  
  })

// // Listen for the custom event you dispatched in ConvictionSelect
// eventHub.addEventListener("alibiChosen", event => {
//     // Use the property you added to the event detail.
//     if (event.detail.clickedCriminalID !== "0"){
//         /*
//             Filter the criminals application state down to the people that committed the crime
//         */

//         const crimes = useConvictions()
//         //Out of all the crimes, we want to find the one crime whose ID is the same as the ID that was sent to us through our customEvent  
//         const crime = crimes.find( crime => crime.id === parseInt(event.detail.clickedCriminalID) )
//         /*
//             Then invoke render() and pass the filtered collection as
//             an argument
//         */

//         const criminals = useCriminals()
        
//         const matchingAlibis = criminals.filter( (criminal) => criminal.known_associates === crime.name)

//         render(matchingAlibis) //this invokes the render function and pass the matchingAlibis
//     }
// })