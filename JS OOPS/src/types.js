// Every Object in Javascript has a property named constructor

let x = {value: 10};
let y = x;

x.value = 20;

let object = {value: 10};

function increase(object) {
    object.value++;
}

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(8);

circle.location = {x : 1};
circle['location2'] = {y : 2};

for(let key in circle) {
    if(typeof circle[key] !== 'function') console.log(circle[key]);
}


const keys = Object.keys(circle);

if('radius' in circle) console.log('Circle has radius');













// Primitives in values are copied so they are independent
// When we use an object the address are copied so they are dependant