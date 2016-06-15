function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

//Augment its prototype with the following methods:
//  isSquare - returns true if the rectangle is a square.
//  area - calculates the area of the rectangle.
//  perimeter - calculates the perimeter of the rectangle.


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

//Augment its prototype with the following methods:
// isEquilateral - returns true if the triangle is equilateral.
// isIsosceles - return true if the triangle is isosceles.
// area - calculates the area of the Triangle.
//  isObtuse - returns true if the triangle is obtuse.

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

//Augment its prototype with the following method:
//  length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
