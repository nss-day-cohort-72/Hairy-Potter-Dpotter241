// Import the makePottery function from PotteryWheel.js
const { makePottery } = require('./PotteryWheel.js');

// Import the firePottery function from Kiln.js
const { firePottery } = require('./Kiln.js');

// Create 5 pieces of pottery
const pottery1 = makePottery('Mug', 1, 3);
const pottery2 = makePottery('Platter', 5, 7);
const pottery3 = makePottery('Bowl', 2, 4);
const pottery4 = makePottery('Vase', 3, 6);
const pottery5 = makePottery('Cup', 1, 2);

// Fire each piece of pottery in the kiln
const firedPottery1 = firePottery(pottery1, 2300); // Too high
const firedPottery2 = firePottery(pottery2, 2200); // Just right
const firedPottery3 = firePottery(pottery3, 2000); // Just right
const firedPottery4 = firePottery(pottery4, 2100); // Just right
const firedPottery5 = firePottery(pottery5, 2400); // Too high

// Log each fired pottery object to the console
console.log(firedPottery1);
console.log(firedPottery2);
console.log(firedPottery3);
console.log(firedPottery4);
console.log(firedPottery5);

// Determine which ones should be sold, and their price
