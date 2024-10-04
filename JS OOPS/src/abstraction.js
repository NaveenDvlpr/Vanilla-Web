function Circle(radius) {

    this.radius = radius;

    let defaultLocation = {x: 0, y: 0};

    let computeOptimumLocation = function() {
        console.log('location');
    }

    this.draw = function() {
        computeOptimumLocation();
        console.log('draw');
    }
}

const circle = new Circle(10);
