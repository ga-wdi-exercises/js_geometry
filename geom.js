// 201702061434L   EL LUNES   GIRO
// Augment the class with the following methods...
// isSquare - returns true if the rectangle is a square.
// area - calculates the area of the rectangle.
// perimeter - calculates the perimeter of the rectangle.
// Create a few rectangles with different lengths and widths.
// Bonus: Test your outcomes using Jasmine!

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    isSquare(rectangleX) {
      // square = this.width == this.length
      // return square
        return this.width == this.length //THIS EVALS, RETURNS AS 'TRUE' OR 'FALSE'
    }
    area(rectangleX) {
        return this.width * this.length
    }
    perimeter(rectangleX) {
        return (this.width + this.length) * 2
        // return perimeter
    }
}
var rectangleX = new Rectangle(2, 3);
console.log('length: ' + rectangleX.length);
console.log('isSquare: ' + rectangleX.isSquare());
console.log('area: ' + rectangleX.area());
console.log('perimeter: ' + rectangleX.perimeter());
// rectangleX.isSquare(rectangleX);
// for (i in)



          // --------------------------------------------
          // Augment the class with the following methods...
          // isEquilateral - returns true if the triangle is equilateral.
          // isIsosceles - return true if the triangle is isosceles.
          // area - calculates the area of the Triangle.
          // isObtuse - returns true if the triangle is obtuse.
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    isEquilateral(triangleX) {
        return this.sideA == this.sideB == this.sideC
    }
  }
  var triangleEquilateral = new Triangle(2,2,2);
  var triangleIsosceles = new Triangle(1,2,2);
  var triangleObtuse = new Triangle(2,2,2);
    console.log('length: ' + rectangleX.length);



              // --------------------------------------------
              // Define a LineSegment class. Its constructor should take two pairs of coordinates -- x1 y1 x2 y2 -- as arguments.
              //
              // Augment the class with the following method...
              //
              // length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
              // class LineSegment {
              // constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
    Rectangle: Rectangle,
    Triangle: Triangle,
    LineSegment: LineSegment
}
