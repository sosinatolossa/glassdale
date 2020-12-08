
let officers = []

export const useOfficers = () => {
    return officers.slice()
}

export const getOfficers = () => {
    return fetch("https://criminals.glassdale.us/officers") //we're requesting data from this web and returning that data
        .then(response => response.json()) //then convert the json string response to a javascript data structure
        .then( //then
            parsedOfficers => { //create a function that handles the data we get from the API and...
                console.table(parsedOfficers) //puts the data in column
                officers = parsedOfficers //let our empty string equal to the data
            }
        )
}