var rec1 = new Rectangle(5, 3);
var rec2 = new Rectangle(2, 2);
var rec3 = new Rectangle(5, 7);

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  return this.length === this.width}
Rectangle.prototype.area = function(){return this.length * this.width}
Rectangle.prototype.perimeter = function(){return this.length*2 + this.width*2}


var tri1 = new Triangle(3,3,3)
var tri2 = new Triangle(2,5,6)
var tri3 = new Triangle(2,5,2)

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  return (this.sideA === this.sideB === this.sideC)}
Triangle.prototype.isIsosceles = function(){
  return (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC)}
Triangle.prototype.area = function(){
  return (this.sideA*this.sideB*this.sideC)/2 }


var line1 = new LineSegment(1,2,3,40)
var line2 = new LineSegment(2,2,2,2)

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  return Math.sqrt((this.x2 - this.x1)^2 + (this.y2 - this.y1)^2)
}
