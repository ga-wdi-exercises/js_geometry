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
return (this.length + this.width)*2
}

var Rectangle1 = new Rectangle(4, 5)
var Rectangle2 = new Rectangle(12, 9)
var Rectangle3 = new Rectangle(6, 10)



function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function (){
  if (this.sideA == this.sideB) && (this.sideB == this.sideC){
    return true
  }
  else {
    return false
  }
}



function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
