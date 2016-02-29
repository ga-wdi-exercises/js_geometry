function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function () {
  return (this.length === this.width);
}

Rectangle.prototype.area = function () {
  return (this.length * this.width);
}

Rectangle.prototype.perimeter = function () {
  return ((2 * this.length) + (2 * this.width));
}

// Test rectangles here
var rectangle = new Rectangle(2,4);

var square = new Rectangle(4,4);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  return ((this.sideA === this.sideB) && (this.sideB === this.sideC));
}

Triangle.prototype.isIsosceles = function() {
  return ((this.sideA === this.sideB) || (this.sideB === this.sideC) || (this.sideA === this.sideC));
}

Triangle.prototype.area = function() {
  var s = ((this.sideA + this.sideB + this.sideC) / 2);
  return (Math.sqrt(
    s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC))
  ));
}

Triangle.prototype.isObtuse = function() {
  var triangleSides = [this.sideA , this.sideB , this.sideC];
  triangleSides.sort(function compare(a,b) {
    return (a - b);
  });
  return Math.pow((triangleSides[2]), 2) > ((Math.pow(triangleSides[0] , 2)) + (Math.pow(triangleSides[1] , 2)));
}

// Test triangles here
var triangleA = new Triangle(7,3,5);

var triangleB = new Triangle(3,5,4);

var triangleC = new Triangle(4,2,4);

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function () {
  return Math.sqrt(Math.pow((this.x2 - this.x1) , 2) + Math.pow((this.y2 - this.y1) , 2));
}

// Test line segment here
var line = new LineSegment(-1, -1, 3, 2);
