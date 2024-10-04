// Factory Fucntion

function createCircle(radius) {
    return  {
        radius,
        draw: function() {
            console.log(`Drawing Circle with Radius: ${radius}`);
        }
    };
}

const circle = createCircle(5);

// Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

// new creates an empty object and binds the object

// const circle2 = new Circle(1);

// Object()

// Function() inbuilt constructor


Circle.call({}, 1);
Circle.apply({}, [1]);