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
    }
}
var rectangleX = new Rectangle(11,11);
console.log('length11_11: ' + rectangleX.length);
console.log('isSquare11_11: ' + rectangleX.isSquare());
console.log('area11_11: ' + rectangleX.area());
console.log('perimeter11_11: ' + rectangleX.perimeter());

var rectangleX = new Rectangle(2, 3);
console.log('length2_3: ' + rectangleX.length);
console.log('isSquare2_3: ' + rectangleX.isSquare());
console.log('area2_3: ' + rectangleX.area());
console.log('perimeter2_3: ' + rectangleX.perimeter());

var rectangleX = new Rectangle(16,2);
console.log('length16_2: ' + rectangleX.length);
console.log('isSquare16_2: ' + rectangleX.isSquare());
console.log('area16_2: ' + rectangleX.area());
console.log('perimeter16_2: ' + rectangleX.perimeter());


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
    triangleEquilateral(triangleX) {
          return (this.sideA == this.sideB && this.sideA == this.sideC);
      }
    triangleIsosceles(triangleX) {
          return ((this.sideA == this.sideB) || (this.sideB == this.sideC) || (this.sideA == this.sideC));
      }
    triangleArea(triangleX) {
              let s = .5 * (this.sideA + this.sideB + this.sideC);
              console.log('perimeter s: ' + s);
              let areaX =  Math.sqrt(s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC)));
              console.log('areaX: ' + areaX);
              return areaX;
      }
    triangleObtuse(triangleX) {
      var maxSide = Math.max(this.sideA, this.sideB, this.sideC);
      if (maxSide == this.sideC) {
        return  (Math.pow(this.sideA,2) + Math.pow(this.sideB,2) < Math.pow(this.sideC, 2));
      }
      else if (maxSide == this.sideB) {
        return  (Math.pow(this.sideA,2) + Math.pow(this.sideC,2) < Math.pow(this.sideB, 2));
      }
      else if (maxSide == this.sideA) {
        return  (Math.pow(this.sideB,2) + Math.pow(this.sideC,2) < Math.pow(this.sideA, 2));
      }
    }
  }

  var triangleX = new Triangle(2,2,2);
  console.log('equilateral Triangle(2,2,2): ' + triangleX.triangleEquilateral());

  var triangleX = new Triangle(2,5,2);
  console.log('isosceles Triangle(2,5,2): ' + triangleX.triangleIsosceles());

  var triangleX = new Triangle(2,2,2);   // CHEATED THE SQRT OF A NEGATIVE
  console.log('area Triangle(2,2,2): ' + triangleX.triangleArea());

  var triangleX = new Triangle(2,3,4);
  console.log('obtuse Triangle(2,3,4); ' + triangleX.triangleObtuse());

  var triangleX = new Triangle(2,7,4);
  console.log('obtuse Triangle(2,7,4): ' + triangleX.triangleObtuse());

  var triangleX = new Triangle(9,7,4);
  console.log('obtuse Triangle(9,7,4): ' + triangleX.triangleObtuse());

  var triangleX = new Triangle(2,2,2);
  console.log('obtuse Triangle(2,2,2): ' + triangleX.triangleObtuse());


              // --------------------------------------------
              // Define a LineSegment class. Its constructor should take two pairs of coordinates -- x1 y1 x2 y2 -- as arguments.
              // Augment the class with the following method...
              // length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
class LineSegment {
  constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
      }
  lineSegmentLength(){
    let lengthX =  Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
    return lengthX;
  }
}               //end class

var lineSegmentX = new LineSegment(2,5,10,12);
console.log('lineSegmentLength: ' + lineSegmentX.lineSegmentLength());


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
    Rectangle: Rectangle,
    Triangle: Triangle,
    LineSegment: LineSegment
}
