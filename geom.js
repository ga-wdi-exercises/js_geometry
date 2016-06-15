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
  return (this.length * 2) + (this.width * 2);
}
var rect1 = new Rectangle(3,2);
var rect2 = new Rectangle(2,2);



function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype.isEquilateral = function(){
  return (this.sideA === this.sideB === this.sideC);
}
Triangle.prototype.isIsosceles = function(){
  return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
}
Triangle.prototype.area = function(){
  var p = (this.sideA + this.sideB + this.sideC);
  var area = Math.sqrt(p*(p-this.sideA)(p-this.sideB)(p-this.sideC));
  return area;
}
//no idea how to do if triangle is obtuse

var triangle1 = new Triangle(5,3,3);



function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype.length = function(){
  var x = this.x2 - this.x1;
  var y = this.y2 - this.y1;
  var length = Math.sqrt(Math.pow(x)+Math.pow(y));
}
