// Write your JavaScript code here!


window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    // console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
    }).then(function () {
        // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let myPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, 
            myPlanet.name, 
            myPlanet.diameter, 
            myPlanet.star, 
            myPlanet.distance, 
            myPlanet.moons, 
            myPlanet.image);
    });
    
    let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            
            // get reference to inputs
            let pilotInput = document.querySelector("input[name=pilotName]");
            let copilotInput = document.querySelector("input[name=copilotName]");
            let fuelInput = document.querySelector("input[name=fuelLevel]");
            let massInput = document.querySelector("input[name=cargoMass]");

            // alert empty input values when submitted
            if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || massInput.value === "") {
                alert("All fields required!");
                return;
            }

            // alert if pilot names are numbers
            if (validateInput(pilotInput.value) === "Is a Number" || validateInput(pilotInput.value) === "Is a Number") {
                alert("Pilot names cannot be numbers");
                return;
            }

            // alert if fuel or mass are strings
            if (validateInput(fuelInput.value) === "Not a Number" || validateInput(massInput.value) === "Not a Number") {
                alert("Fuel level and cargo mass must be numbers");
                return;
            }

            // run formSubmission with correct values passed as arguments
            formSubmission(document, 
                document.getElementById("faultyItems"), 
                pilotInput.value, 
                copilotInput.value, 
                fuelInput.value, 
                massInput.value);

            event.preventDefault();
            
        });


    
 });