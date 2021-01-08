import { useCriminals} from "./CriminalProvider.js"


const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "closeDialog") {
      associatesDialog.close();
    }
})

export const AssociatesDialog = (alibi) => {

  const dialogContainer = document.querySelector("#dialogContainer") //inserts the html representation into the dom
  dialogContainer.innerHTML = `
        <dialog id = "associatesDialog">
            <div id = "associatesDialog__text"></div>
            <button id = "closeDialog">close</button>
        </dialog>
    `
}

eventHub.addEventListener("associatesBtnClicked", (event) => {
    const associatesDialog = document.querySelector("#associatesDialog")
    const dialogText = document.querySelector("#associatesDialog__text")
  
  
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

