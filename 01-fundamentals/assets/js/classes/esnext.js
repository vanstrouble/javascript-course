class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

// ESNext - Private fields
class Circle {
    #radius;

    constructor(radius) {
        this.#radius = radius;
    }

    area() {
        return Math.PI * this.#radius ** 2;
    }

    perimeter() {
        return 2 * Math.PI * this.#radius;
    }
}


const rect = new Rectangle(10, 5);
console.log(`Area Rectabgle: ${rect.area()}`); // Area: 50
console.log(`Perimeter Rectangle: ${rect.perimeter()}`); // Perimeter: 30

const circle = new Circle(9);
console.log(`Area Circle: ${circle.area()}`); // Area: 153.938...
console.log(`Perimeter Circle: ${circle.perimeter()}`); // Perimeter: 43.982...
