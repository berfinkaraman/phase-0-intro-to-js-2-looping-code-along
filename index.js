// Code your solutions in this file
const stringNames = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";

function writeCards(stringNames, eventName) {
  let cards = [];

  
  for (let i = 0; i < stringNames.length; i++) {
    cards.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
  }

  return cards;
}




function countDown(integer) {
    while (integer > 0) {
        console.log(integer);
        integer--;
    }
    console.log(integer);
}
