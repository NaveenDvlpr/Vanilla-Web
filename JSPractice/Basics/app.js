const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000}, 
    {name: "Keyboard", price: 25}
];


const filterItems = items.filter((item) => {
    return item.price <= 100;
});

const itemNames = items.map((item) => {
    return item.name;
});

const foundItem = items.find((item) => {
    return item.name === "Computer";
}); // returns first item that matches the condition

items.forEach((item) => {
    console.log(item.name);
});

const inexpensiveItems = items.every((item) => {
    return item.price <= 1000;
}); // some


const totalPrice = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);

const numbers = [1, 2, 3, 4, 5];

const includes3 = numbers.includes(3);

console.log(includes3);

console.log(totalPrice);