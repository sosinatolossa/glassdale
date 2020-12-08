

let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
   return fetch("https://criminals.glassdale.us/criminals") //we're requesting data from this web and returning that data
   .then(response => response.json()) //then convert the json string response to a javascript data structure
   .then(
       parsedCriminals => { //create a function that handles the data we get from the API and...
           console.table(parsedCriminals) //puts the data in column
           criminals = parsedCriminals //let our empty string equal to the data
       }
   )
}