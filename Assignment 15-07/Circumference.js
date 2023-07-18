// const radius = 10;
// const pi = Math.PI;
// const areaOfCircle = (radius, pi) => {
//    return pi * radius * radius;
// };
// console.log("The area of the circle is: " + areaOfCircle(radius, pi));

// Circle calculations
const calculateCircleArea = (radius) => {
    return Math.PI * Math.pow(radius, 2);
  };
  
  const calculateCircleCircumference = (radius) => {
    return 2 * Math.PI * radius;
  };
  
  // Triangle calculations
  const calculateTriangleArea = (base, height) => {
    return (base * height) / 2;
  };
  
  // Rectangle calculations
  const calculateRectangleArea = (length, width) => {
    return length * width;
  };
  
  // Circle example
  const circleRadius = 5;
  const circleArea = calculateCircleArea(circleRadius);
  const circleCircumference = calculateCircleCircumference(circleRadius);
  
  console.log(`Circle Area: ${circleArea}`);
  console.log(`Circle Circumference: ${circleCircumference}`);
  
  // Triangle example
  const triangleBase = 10;
  const triangleHeight = 8;
  const triangleArea = calculateTriangleArea(triangleBase, triangleHeight);
  
  console.log(`Triangle Area: ${triangleArea}`);
  
  // Rectangle example
  const rectangleLength = 6;
  const rectangleWidth = 4;
  const rectangleArea = calculateRectangleArea(rectangleLength, rectangleWidth);
  
  console.log(`Rectangle Area: ${rectangleArea}`);
  