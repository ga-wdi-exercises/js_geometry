function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
// augment its prototype with the following methods:
//
// * `isSquare` - returns true if the rectangle is a square.
// * `area` - calculates the area of the rectangle.
// * `perimeter` - calculates the perimeter of the rectangle.
// Create a few rectangles with different lengths and widths.
Rectangle.prototype.isSquare = function(){
  if(this.length == this.width)
  return "This is a square";
};
Rectangle.prototype.area= function(){
  return this.length * this.width;
};
Rectangle.prototype.perimeter= function(){
  return this.length * 2 + this.width * 2;
};


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
