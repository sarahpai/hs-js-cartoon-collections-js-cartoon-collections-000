//dwarves to output as numbered dwarves

function dwarfRollCall(dwarves) {
  var newDwarves = "";
  for(var i = dwarves.length/2 ; i < dwarves.length; i++) {
    newDwarves = newDwarves + (i+1) + `. ` + dwarves[i] + ' '; 
  }
  return newDwarves;
  }


//planeteerCalls in all UpperCase

function summonCaptainPlanet(planeteerCalls){
 for( var i = 0; i < planeteerCalls.length; i++){
  planeteerCalls[i] = planeteerCalls[i].toUpperCase()+ '!';
 }
return planeteerCalls;
}

//words greater than 4 return true all else false

function longPlaneteerCalls(calls) {
  for(var i = 0; i < calls.length; i++) {
    if(calls[i].length > 4) {
      return true
     }
  }
  return false
}




// find the following cheese

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++){
    var cheeses = ["cheddar" , "gouda", "camembert"]
    if(cheeses.includes(foods[i])){
    return foods[i]
    }
  }
    return "no cheese!"
}


function wordsWithb(words){
  var newWord = [];
  for(var i = 0; i < words.length; i++){
    if(words[i][0] === "b") {
      newWord.push(words[i])
  }
  }   return newWord
} 