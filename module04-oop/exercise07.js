let circle = {
    x: 0,
    y: 1,
    radius: 100,
    pen: {
        color: "red",
        thickness: 5,
        style: "solid"
    },
    draw: function() {
        console.log("drawing circle...");
    }
};

let anotherCircle = JSON.parse(JSON.stringify(circle)); // deep cloning
console.log(circle)
console.log(anotherCircle)

anotherCircle.pen.color = "blue";
console.log(circle.pen.color);
console.log(anotherCircle.pen.color);
