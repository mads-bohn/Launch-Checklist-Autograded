// Write your JavaScript code here!

window.addEventListener("load", function() {

    // let listedPlanets;
    // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;
    // listedPlanetsResponse.then(function (result) {
    //     listedPlanets = result;
    //     console.log(listedPlanets);
    // }).then(function () {
    //     console.log(listedPlanets);
    //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    // });
    
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
                event.preventDefault();
            }

            // run formSubmission with correct values passed as arguments
            formSubmission(document, 
                document.getElementById("faultyItems"), 
                document.querySelector("input[name=pilotName]"), 
                document.querySelector("input[name=copilotName]"), 
                document.querySelector("input[name=fuelLevel]"), 
                document.querySelector("input[name=cargoMass]"));
            
        });


    
 });