window.addEventListener("load",function(){
   this.fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById('missionTarget');
         let data = json[0];
         div.innerHTML =`
         <h2>Mission Destination</h2>
         <ol>
            <li>name:${data.name} </li>
            <li>diameter:${data.diameter} </li>
            <li>star:${data.star} </li>
            <li>distance:${data.distance} </li>
            <li>moons:${data.moons}
         </ol>
         <img src =${data.image}>`;    
      })
   });
let form = document.querySelector('form')
form.addEventListener("submit", function(event){
   event.preventDefault();
   let pilotName = document.querySelector('input[name = pilotName]');
   let pilotTest = Number(pilotName.value)
   let copilotName = document.querySelector('input[name = copilotName]');
   let copilotTest = Number(copilotName.value)
   let fuelLevelInput = document.querySelector('input[name = fuelLevel]');
   let fuelLevel = Number(fuelLevelInput.value)
   let cargoMassInput = document.querySelector('input[name = cargoMass]')
   let cargoMass = Number(cargoMassInput.value)
   let launchStatus=document.getElementById('launchStatus')
   if ((pilotName.value === '') || (copilotName.value === "") || (fuelLevel === '') || (cargoMass=== '')) {
      alert("All fields are required!");
   }  else if (isNaN(pilotTest) === false || isNaN(copilotTest) === false || isNaN(fuelLevel) === true || isNaN(cargoMass) === true) {
      alert("Enter a valid information for each field");
   } else {
      document.getElementById('pilotStatus').innerHTML = `${pilotName.value} is Ready`;
      document.getElementById('copilotStatus').innerHTML = `${copilotName.value} is Ready`;
      if (fuelLevel < 10000 && cargoMass > 10000) {
         document.getElementById('faultyItems').style.visibility = 'visible';
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = 'red';
         document.getElementById('fuelStatus').innerHTML = 'Fuel level too low';
         document.getElementById('cargoStatus').innerHTML = 'Cargo Mass too high';
      } else if (fuelLevel < 10000 && cargoMass <= 10000) { 
         document.getElementById('faultyItems').style.visibility = 'visible';
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = 'red';
         document.getElementById('fuelStatus').innerHTML = 'Fuel level too low';
         document.getElementById('cargoStatus').innerHTML = 'Cargo mass low enough for launch';
      } else if (fuelLevel >= 10000 && cargoMass > 10000) {
         document.getElementById('faultyItems').style.visibility = 'visible';
         launchStatus.innerHTML = "Shuttle not ready for launch";
         launchStatus.style.color = 'red';
         document.getElementById('fuelStatus').innerHTML = 'Fuel level high enough for launch';
         document.getElementById('cargoStatus').innerHTML = 'Cargo Mass too high';
      } else {
         launchStatus.innerHTML = 'Ready for Launch';
         launchStatus.style.color = 'green'
         document.getElementById('faultyItems').style.visibility = 'hidden';
      }
      }
   });
});   
