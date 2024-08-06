// scripts/PotteryWheel.js

// Define a variable to hold the primary key for each piece of pottery
let potteryId = 1;

// Define the makePottery function
export function makePottery(shape, weight, height) {
    // Create a pottery object with the specified properties
    return {
        shape,
        weight,
        height,
        id: potteryId++
    };

    // Increment the potteryId for the next piece of pottery
    potteryId++;

    // Return the pottery object
    return pottery;
}