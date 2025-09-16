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

let anotherCircle = {...circle}; // shallow cloning
anotherCircle.pen = {...circle.pen};
anotherCircle.pen.color = "blue";
console.log(circle.pen.color);
console.log(anotherCircle.pen.color);
console.log(circle)
console.log(anotherCircle)
