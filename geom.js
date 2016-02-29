function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
  if (this.length === this.width) {
    return true;
  } else {
    return false;
  }
};

Rectangle.prototype.area = function() {
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function() {
  return (2 * this.length) + (2 * this.width);
};

var rectangle = new Rectangle(5, 8);
var rectangle2 = new Rectangle(10, 10);
var rectangle3 = new Rectangle(6, 55);


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  if (this.sideA === this.sideB && this.sideB === this.sideC) {
    return true;
  } else {
    return false;
  }
};

var triangle1 = new Triangle(5, 5, 5);
var triangle2 = new Triangle(3, 4, 5);
var triangle3 = new Triangle(7, 33, 20);


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
