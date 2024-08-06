import { firePottery } from './Kiln.js';

// Define a variable to store pottery that will be sold
const potteryForSale = [];

// Define and export the toSellOrNotToSell function
export function toSellOrNotToSell(pottery) {
    // Check if the pottery is not cracked
    if (!pottery.cracked) {
        // Add price based on the weight of the pottery
        if (pottery.weight >= 6) {
            pottery.price = 40;
        } else {
            pottery.price = 20;
        }

        // Add the pottery to the array of items to be sold
        potteryForSale.push(pottery);
    }

    // Return the augmented pottery object
    return pottery;
}

// Define and export the usePottery function
export function usePottery() {
    // Return a copy of the array of items to be sold
    return potteryForSale.slice();
}
