function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  return this.length === this.width;
}

Rectangle.prototype.area = function(){
  return this.length * this.width;
}

Rectangle.prototype.perimeter = function(){
  return this.length * 2 + this.width * 2;
}

var recy = new Rectangle(2,4);
var wrecktangle = new Rectangle (3, 2);
var recyotangle = new Rectangle (2,6);


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  return this.sideA === this.sideB && this.sideB === this.sideC;
}

Triangle.prototype.isIsosceles = function(){
  return this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA;
}

Triangle.prototype.area = function(){
  var s = (this.sideA + this.sideB + this.sideC) / 2
  var area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  return area;
}

Triangle.prototype.isObtuse = function(){
  var sideArray = [this.sideA, this.sideB, this.sideC];
  sideArray.sort();
  return Math.pow(sideArray[0], 2) + Math.pow(sideArray[0], 2) < Math.pow(sideArray[2], 2);
}

var tri = new Triangle (3, 3, 3);
var tritty = new Triangle (2, 2, 4);
var tricky = new Triangle (3, 4, 5);
var liny = new LineSegment (2, 4, 6, 8);

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  var sideA = this.x2 - this.x1;
  var sideB = this.y2 - this.y1;
  return Math.sqrt(sideA * sideA + sideB * sideB);
}
