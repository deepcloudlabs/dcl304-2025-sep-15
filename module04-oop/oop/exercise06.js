class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }
}

class ColorfulCircle extends Circle {
    constructor(x, y, radius,color) {
        super(x,y,radius);
        this.color = color;
    }
}

let circle1 = new Circle(1,2,3);
let blueCircle = new ColorfulCircle(1,2,3,"blue");
console.log(circle1.area());
console.log(blueCircle.area());
console.log(circle1.color);
console.log(blueCircle.color);

