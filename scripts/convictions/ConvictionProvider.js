

let convictions = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
    */
   return fetch("https://criminals.glassdale.us/crimes") //we're requesting data from this web and returning that data
        .then(response => response.json()) //then convert the json string response to a javascript data structure
        .then(
            parsedConvictions => { //create a function that handles the data we get from the API and...
                console.table(parsedConvictions) //puts the data in column
                convictions = parsedConvictions //let our empty string equal to the data
            }
        )
}