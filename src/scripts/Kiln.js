// scripts/Kiln.js

// Define the firePottery function
export function firePottery(pottery, temperature) {
    // Add `fired` property
    pottery.fired = true;

    // Determine if the pottery is cracked
    pottery.cracked = temperature > 2200;

    debugger;

    // Return the augmented object
    return pottery;
}
