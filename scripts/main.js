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



