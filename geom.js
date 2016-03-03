function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = "";
//returns true if the rectangle is a square.
Rectangle.prototype.area = "":
// calculates the area of the rectangle.
Rectangle.prototype.perimeter = "";
// calculates the perimeter of the rectangle.

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype.isEquilateral = ""
// isEquilateral - returns true if the triangle is equilateral.
Triangle.prototype.isIsosceles = ""
// isIsosceles - return true if the triangle is isosceles.
Triangle.prototype.area = ""
// area - calculates the area of the Triangle.
Triangle.prototype.isObtuse = ""
// isObtuse - returns true if the triangle is obtuse.

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = ""
// length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
