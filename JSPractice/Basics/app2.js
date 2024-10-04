const numbers = [1, 2, 3, 4, 5, 2, 3, 5, 8, 9, 1];

function consoleItem(item, index, arr) {
    console.log('a['+index+']='+item);
}

numbers.forEach((item, index, arr) => {
    //console.log('a['+index+']='+item);
});

let sum = 0;

numbers.forEach(item => {
    sum += item
});

//console.log(sum);

let count = {};

numbers.forEach(item => {
    if(count[item]) count[item]++;
    else count[item] = 1;
})

const numbersDouble = numbers.map(double);

// console.log(numbersDouble);

function double(value, index, arr) {
    return value*2;
}

function multiplyByIndex(value, index, arr) {
    return value*index;
}

const multipliedNumbers = numbers.map(multiplyByIndex);

// console.log(multipliedNumbers);

const items = [
    {
        name: 'laptop',
        price: 1000,
        count: 5
    }, {
        name: 'desktop',
        price: 1500,
        count: 4
    }, {
        name: 'phone',
        price: 500,
        count: 10
    }
];

const totalProductsValue = items.map(item => ({
    name: item.name,
    totalValue: item.price*item.count
}));

// console.log(totalProductsValue);

const stringNumbers = ['12', '3', '56', '54', '2'];

const actualNumbers = stringNumbers.map(number => Number(number));

// console.log(actualNumbers);

const evenNumbers = numbers.filter(number => !(number&1));

const expensiveItems = items.filter(item => item.price > 1000);

// console.log(expensiveItems);

const uniqueNums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

//console.log(uniqueNums);


const str = ['a', 'b', 'b', 'c', 'd', 'e', 'a', 'c' , 'e'];

const freqs = str.reduce((freq, char) => {
    freq[char] ? freq[char]++ : freq[char] = 1;
    return freq;
}, {});

 // console.log(freqs);

 const total = numbers.reduce(callback, -Infinity);

 function callback(accumulator, value, index, arr) {
    return accumulator > value ? accumulator : value;
 }

 const totalItemsValue = items.reduce((currValue, item) => {
    return currValue + item.price*item.count;
 }, 0);

 console.log(totalItemsValue);