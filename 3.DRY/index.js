function calculateRectangleArea(length, width) {
  return length * width;
}

function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}

function calculateSquareArea(side) {
  return side * side;
}

// Repeated logic for area calculation
console.log("Rectangle Area: " + calculateRectangleArea(5, 10));
console.log("Circle Area: " + calculateCircleArea(7));
console.log("Square Area: " + calculateSquareArea(4));

// Improved version using a generalized function

function calculateArea(shape, ...dimensions) {
  switch (shape) {
    case "rectangle":
      return dimensions[0] * dimensions[1];
    case "circle":
      return Math.PI * dimensions[0] * dimensions[0];
    case "square":
      return dimensions[0] * dimensions[0];
    default:
      throw new Error("Unknown shape");
  }
}

// Using the generalized function to avoid code repetition
console.log("Rectangle Area: " + calculateArea("rectangle", 5, 10));
console.log("Circle Area: " + calculateArea("circle", 7));
console.log("Square Area: " + calculateArea("square", 4));
