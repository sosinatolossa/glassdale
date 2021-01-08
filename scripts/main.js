import {CriminalList} from "./criminals/CriminalList.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"
import { AssociatesDialog } from "./criminals/AssociateDisplay.js"

OfficerSelect()
CriminalList()
NoteForm()
ShowNoteButton()
ConvictionSelect()
AssociatesDialog()


// TODO: to filter out criminals based on the crime they've committed
// What feature are we implementing?
// Filter our criminals by the crimes committed


// What tasks do we need to complete to implement the feature?
// filter the criminal data by matching the crime that has been selected

// listen for the selection of a crime and capture the chosen value
// Use the selected value to filter the criminal data
// Update the DOM with the filtered criminal data


// Which modules are involved?
// CriminalList
// ConvictionSelect


// Alibis (ch. 8)
//1)
// Add a button to Criminal (HTML converter) component
// Add new component to display known associates: AssociateDisplay
    //job: create HTML rep. of associates and alibis

//2)
//You use the CriminalsProvider to grab data from in the API

//3)
//Criminal.js

//4)
//Dispatch custom event from Criminal.js to alert other modules that the associate button (for known associates) has been clicked

//5)
//AssociateDisplay will be listening for that click event
//You send the criminals' id data
//AssociatesDisplay component needs to find() the criminals with the matching id
//Loop over the found criminals(known_associates) array and display them

//6)
//it's recommended to have new DOM element



// TODO: Chapter 9- Show witness statements in place of criminals list
//Which components do you need for this feature?
//provider -- get witnesses and add them to app state. Make app state available with a useWitnesses function
//HTML converter -- represent a JS object as HTML
// Button with a "click" event listener on it, with a callback that generates a custom event
// List component for creating 'cards' using the witness data. Listens fot the custom event that signals the show witnesses button was clicked

//Where is the data coming from in the API? Do you need a new provider?
// The Button component

//WHich component would listen and react to that custom event?
// List component

//Does data need to be sent along with the message?
//

//Which DOM element would contain the list of witness statement? Do you need a new one, or can they go in as existing one? 
//Just put it in the same container as the criminal list
//Or put the witnesses in their own container and just hide the criminals