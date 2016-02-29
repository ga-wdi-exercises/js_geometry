function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
  return this.length === this.width;
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
  return this.sideA === this.sideB && this.sideB === this.sideC;
};

Triangle.prototype.isIsosceles = function () {
  return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
};

Triangle.prototype.area = function () {
  // the semiperimeter of the triangle (a + b + c) / 2
  var s = (this.sideA + this.sideB + this.sideC) / 2;
  var aPart = s - this.sideA;
  var bPart = s - this.sideB;
  var cPart = s - this.sideC;
  return Math.sqrt(s * aPart * bPart * cPart);
};

Triangle.prototype.isObtuse = function () {
  var a, b, c, a2, b2, c2;
  a = this.sideA;
  b = this.sideB;
  c = this.sideC;
  a2 = Math.pow(a, 2);
  b2 = Math.pow(b, 2);
  c2 = Math.pow(c, 2);

  if ((c2 / 2) < (a2 + b2) && (a2 + b2) < c2) {
    return true;
  } else if ((b2 / 2) < (a2 + c2) && (a2 + c2) < b2) {
    return true;
  } else if ((a2 / 2) < (b2 + c2) && (b2 + c2) < a2){
    return true;
  } else {
    return false;
  }
};

//equilateral
var triangle1 = new Triangle(5, 5, 5);
//isosceles
var triangle2 = new Triangle(7, 33, 7);
var triangle3 = new Triangle(22, 22, 8);
//obtuse
var triangle4 = new Triangle(6, 12, 14);
var triangle5 = new Triangle(4, 6, 9);


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function () {
  var deltaX, deltaY;
  deltaX = this.x2 - this.x1;
  deltaY = this.y2 - this.y1;
  return Math.sqrt(Math.pow(deltaY, 2) + Math.pow(deltaX, 2));
};

var seg1 = new LineSegment(1, 1, 3, 4);
