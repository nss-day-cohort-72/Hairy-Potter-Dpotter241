import { usePottery } from './PotteryCatalog.js';

// Define and export the PotteryList function
export function PotteryList() {
    // Get the array of pottery items to be sold
    const potteryToSell = usePottery();

    // Convert each pottery item to an HTML representation string
    const potteryHTML = potteryToSell.map(pottery => `
        <section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
            </div>
            <div class="pottery__price">Price is $${pottery.price}</div>
        </section>
    `).join('');

    // Return a single string containing all pottery HTML representations
    return potteryHTML;
}
