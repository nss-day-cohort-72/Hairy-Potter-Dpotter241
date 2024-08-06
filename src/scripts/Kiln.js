// scripts/Kiln.js

// Define the firePottery function
function firePottery(pottery, temperature) {
    // Add the fired property with the value of true
    pottery.fired = true;

    // Add the cracked property based on the firing temperature
    if (temperature > 2200) {
        pottery.cracked = true;
    } else {
        pottery.cracked = false;
    }

    // Return the augmented pottery object
    return pottery;
}

// Export the firePottery function
module.exports = { firePottery };