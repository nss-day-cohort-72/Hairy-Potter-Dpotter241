// Import the makePottery function from PotteryWheel.js
import { makePottery } from './PotteryWheel.js';

// Import the firePottery function from Kiln.js
import { firePottery } from './Kiln.js';

// Import the toSellOrNotToSell and usePottery functions from PotteryCatalog.js
import { toSellOrNotToSell } from './PotteryCatalog.js';

// Import the PotteryList from PotteryList.js
import { PotteryList } from './PotteryList.js';

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

// Determine if the pottery should be sold and add price if applicable
const potteryForSale1 = toSellOrNotToSell(firedPottery1);
const potteryForSale2 = toSellOrNotToSell(firedPottery2);
const potteryForSale3 = toSellOrNotToSell(firedPottery3);
const potteryForSale4 = toSellOrNotToSell(firedPottery4);
const potteryForSale5 = toSellOrNotToSell(firedPottery5);

// Get the HTML for the pottery list
const potteryHTML = PotteryList();

// Display the pottery list on the DOM
document.querySelector('.potteryList').innerHTML = potteryHTML;