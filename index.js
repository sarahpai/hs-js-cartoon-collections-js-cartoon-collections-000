function dwarfRollCall(dwarves) {
  var newDwarves = "";
  for(var i = 0; i < dwarves.length; i++) {
    newDwarves = newDwarves + (i+1) + `. ` + dwarves[i] + ' '; 
  }
  return (`${newDwarves}`);
  }



function summonCaptainPlanet(planeteerCalls){
 for( var i = 0; i < planeteerCalls.length; i++){
  planeteerCalls[i] = planeteerCalls[i].toUpperCase()+ '!';
 }
return planeteerCalls;
}


function longPlaneteerCalls(calls) {
  for(var i = 0; i < calls.length; i++) {
    if(calls[i].length > 4) {
      return true
     }
  }
  return false
}

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++){
    if(foods[i] === "cheddar"){
    return foods[i]
    }
    if(foods[i] === "gouda"){
      return foods[i]
    }
    if(foods[i] === "camembert") { 
      return foods[i]
    }
  }
    return "no cheese!"
}