// slice method returns a shallow copy of a portion of an array

const numbers = [1, 2, 3, 4, 5];

const numbers2 = numbers.slice(1); 
// i --> start indes to j-1 to end index

// console.log(numbers2);

const participants = ['Florin', 'Ivan', 'Naveen', 'Liam', 'John'];

const winners = participants.slice(2, 4);

// console.log(winners);

// splice modifies the array and returns an array

const numbers3 = [5, 1, 3, 15, 2, 4];

const numbers4 = numbers3.splice(2, 0, 6, 7, 8, 9);

participants.sort();

numbers3.sort(compare);

function compare(a, b) {
    return a - b;
}

const items = [
    {name: "Bike", price: 100},
    {name: "TV", price: 200},
    {name: "Album", price: 10},
    {name: "Book", price: 5},
    {name: "Phone", price: 500},
    {name: "Computer", price: 1000}, 
    {name: "Keyboard", price: 25}
];

items.sort((a,b) => b.price-a.price);

const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9];

const c = a.concat(1, 2, d);
// concat doesn't change the array's it operating on it
// acts as push method

// array fill method changes all the elements with the provided value

const nums = [1, 2, 3, 4, 5];

const nums2 = nums.fill(0, 1, 4);

function fillInNumbers(n) {
    return Array(n).fill(0).map((_, idx) => idx+1);
}

const arr2 = fillInNumbers(10);

const res = participants.includes('Naveen');

// The array join method creates a new string from an array 

const countries = ["India", "Russia", "USA"];

const res2 = countries.join(',');

const revCountries = countries.concat().reverse();

const str2 = "Can we meet tommorow?";

const res3 = str2
            .split(' ')
            .reverse()
            .join(' ');

console.log(res3);