
const stocks = {
    fruits: ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid: ["Water", "Ice"],
    holder: ["Cone", "Cup", "Stick"],
    toppings: ["Chocolate", "Peanuts"],

}

let isShopOpen = false;

const time = (ms) => {

    return new Promise( (resolve, reject) => {
        if(isShopOpen) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("shop is closed"));
        }
    })
}


const kitchen  = async () => {
    try {
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected`);
        console.log("Start the Production");
        await time(2000);
        console.log("Fruit was Chopped");
        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added`);
        await time(1000);
        console.log("Start the Machine");
        await time(2000);
        console.log(`Icecream placed on ${stocks.holder[0]}`);
        await time(3000);
        console.log(`${stocks.toppings[0]} were selected`);
        await time(2000);
        console.log("Icecream Served");
    } catch(err) {
        console.log("Customer Left");
    } finally {
        console.log("See You Tommorow :)");
    }   
}

kitchen();