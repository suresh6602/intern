// Write a program to print the area of two rectangles having sides (4,5) and (5,8)
// respectively by creating a class named 'Rectangle' with a method named 'Area' which
// returns the area and length and breadth passed as parameters to its constructor.

class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth= breadth;
    }
     area(){
        return this.length * this.breadth;
    }
} 
const rectangles1 = new Rectangle(4,5);
const rectangles2 = new Rectangle(5,8);
console.log(rectangles1.area());
console.log(rectangles2.area());