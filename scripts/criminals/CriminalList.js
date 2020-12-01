import {getCriminals, useCriminals} from "./CriminalProvider.js"
import {Criminal} from "./Criminal.js"


export const CriminalList = () => {
    getCriminals().then(() => {
        const copyOfCriminals = useCriminals()
        let contentElement = document.querySelector(".criminalsContainer")

       for (const criminalObject of copyOfCriminals) {
           const criminalHTML = Criminal(criminalObject)
           contentElement.innerHTML += criminalHTML
       }
    }
        /*
            Now that you have the data, what
            component should be rendered?
        */
 
    )
}