// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput) === true) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }
 }

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // get elements to update
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    // set list to be ready for launch
    list.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "green";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

    // fuel level submitted too low
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    }

    // cargo mass submitted too large
    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });

     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    // return one planet from list with randomly-selected index
    let i = Math.floor(Math.random() * planets.length);
    return planets[i];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;