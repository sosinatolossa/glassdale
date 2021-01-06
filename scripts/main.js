import {CriminalList} from "./criminals/CriminalList.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { NoteForm, render } from "./notes/NoteForm.js"
import { ShowNoteButton } from "./notes/ShowNotesButton.js"
import "./notes/NoteList.js"

OfficerSelect()
CriminalList()
render()
ShowNoteButton()
ConvictionSelect()


// TODO: to filter out criminals based on the crime they've commited
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



// 01/05/2021
// TODO: Change suspect text input to dropdown select of API criminals 
// Make a select element and populate it with all of the criminals
     // Fetch call to get all the criminals(maybe)
// Change the HTML representation of our form
// Event listener to listen for dropdown change/select (maybe)
// Change how the note is saved, to capture the criminalID
// Change how note objects are represented when we fetch notes data

// Modules that refactor:
// NoteForm
// Note
// NoteList
// notes.json