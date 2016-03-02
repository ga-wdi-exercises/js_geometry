function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(length, width){
  if (this.length == this.width) {
    return true
  }
  else {
    return false
  }
}
Rectangle.prototype.area = function(length, width){
return (this.length*this.width)
}

Rectangle.prototype.perimeter = function(length, width){
return (this.length + this.width)
}

var triangle1 = new Rectangle(4, 5)
var triangle2 = new Rectangle(12, 9)
var triangle3 = new Rectangle(6, 10)



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
