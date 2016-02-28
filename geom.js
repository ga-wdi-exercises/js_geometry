function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
//Rectangle protoype methods
Rectangle.prototype.isSquare = function() {
  return this.length === this.width ? true : false;
}
Rectangle.prototype.area = function() {
  return this.width * this.length;
}
Rectangle.prototype.perimeter = function() {
  return ((this.width + this.length) * 2);
}
//new Rectangle Objects
var rOne = new Rectangle(2, 2);
var rTwo = new Rectangle(2, 3);
var rThree = new Rectangle(66, 66);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
//Triangle prototype methods
Triangle.prototype.isEquilateral = function() {
  return (this.sideA === this.sideB &&
          this.sideA === this.sideC &&
          this.sideB === this.sideC) ? true : false;
};
Triangle.prototype.isIsosceles = function() {
  return (this.sideA === this.sideB ||
          this.sideA === this.sideC ||
          this.sideB === this.sideC) ? true : false;
};
Triangle.prototype.area = function() {
  return 0.5 * (this.sideA * this.sideB);
};
Triangle.prototype.isObtuse = function() {
  return (this.sideA != this.sideB &&
          this.sideA != this.sideC &&
          this.sideB != this.sideC) ? true : false;
};

var tOne = new Triangle(2, 2, 2);
var tTwo = new Triangle(2, 4, 2);
var tThree = new Triangle(1000, 1000, 1000);

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype.length = function() {
  //sqrt of dx^2 + dy^2 where dx is distance between x's and dy is distance between y's
  var dx = this.x1 - this.x2;
  var dy = this.y1 - this.y2;
  return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
}
lOne = new LineSegment(15, 20, 35, 5);
lTwo = new LineSegment(2, 2, 4, 8);
lThree = new LineSegment(2, 3, 10, 20);
