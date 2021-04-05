// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
windows.addEventListener("load",function(){
   this.fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.jason().then(function(jason) {
         const div = document.getElementById(missionTarget);
         div.innerHTML =`
         <h2>Mission Destination</h2>
         <ol>
            <li>name:${jason[missionDestination].name} </li>
            <li>diameter:${jason[missionDestination].diameter} </li>
            <li>star:${jason[missionDestination].star} </li>
            <li>distance:${jason[missionDestination].distance} </li>
            <li>moons:${jason[missionDestination].moons}
         </ol>
         <img src =${jason[missionDestination].image}>
         `;    
      })
   });
let submit = document.querySelector('submit')
submit.addEventListener("submit", function(event){
   let pilotName = document.querySelector();
   let copilottName = document.querySelector();
   let fuelLevel = document.querySelector();
   let cargoMass = document.querySelector

   if ((pilotName === '') || (copilottName === "") || (fuelLevel === '') || (cargoMass === '')) {
      alert("All fields are required!");
      event.preventDefalt()
   }  else if (isNaN(pilotInput.value) === false || isNaN(copilotInput.value) === false) {
      alert("Enter a valid name for Pilot AND Co-Pilot");
      event.preventDefault();
   } else if (isNaN(fuelLevelInput.value) === true || isNaN(cargoMassInput.value) === true) {
      alert("Enter a valid value for Fuel Level AND Cargo Mass");
      event.preventDefault();
   } else {
      document.getElementById('pioletStatus').innerHTML = `${pilotName.value} is Ready`;
      document.getElementById('copioletStatus').innerHTML = `${copilotName.value} is Ready`;
      if (fuelLevel.value <= 10000) {
         document.getElementById('faultyItems').style.visibility = 'visible';
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById('lauchStatus').style.color = 'red';
         document.getElementById('fuelStatus').style.visibility = 'Fuel Level too low';
      } else {
         document.getElementById('fuelStatus').innerHTML = 'Fuel Level Ready For Launch';
      }
      if (cargoMass.value >= 10000) {
         document.getElementById('faultyItems').style.visibility = 'visible';
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById('lauchStatus').style.color = 'red';
         document.getElementById('fuelStatus').style.visibility = 'Cargo weighs too much';
      } else {
         document.getElementById('fuelStatus').innerHTML = 'Cargo Ready For Launch';
      }
      if (cargoMass.vaulue <= 10000 && fuelLevel.value >= 10000) {
         document.getElementById('lauchStatus').innerHTML = 'Ready for Launch';
         document.getElementById('launchStatus').style.color = 'green'
         document.getElementById('faultyItems').style.visibility = 'hidden';
      }
      event.preventDefault();
      }
   });
});   
