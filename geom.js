function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
isSquare: function(){
  return this.length == this.width;
},
//returns true if the rectangle is a square.
area: function(){
  return this.length * this.width;
},
// calculates the area of the rectangle.
perimeter: function(){
  return(this.length + this.width)*2;
}
// calculates the perimeter of the rectangle.
};
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype = {
  isEquilateral: function{
    return this.sideA === this.sideB && this.sideB === this.sideC;
  },
// isEquilateral - returns true if the triangle is equilateral.
isIsosceles: function {
  return this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA;
},
// isIsosceles - return true if the triangle is isosceles.
area: function{
  var semiperimeter = (this.sideA + this.sideB + this.sideC) / 2;
  var area = Math.sqrt(s *(s-this.sideA) * (s - sideB) * (s - sideC));
  return area;
},
// area - calculates the area of the Triangle.
isObtuse: function{

}

// isObtuse - returns true if the triangle is obtuse.

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = ""
// length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
