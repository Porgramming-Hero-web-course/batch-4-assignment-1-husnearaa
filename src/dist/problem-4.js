"use strict";
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return parseFloat((Math.PI * Math.pow(shape.radius, 2)).toFixed(2));
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    throw new Error("Invalid shape type");
}
var circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
var rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});
console.log(rectangleArea);
