function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if (this.length == this.width){
    return true;
  }
  else;
}

Rectangle.prototype.area = function(){
  area = this.length * this.width;
  return area;
}

Rectangle.prototype.perimeter = function(){
  perimeter = (this.width * 2) + (this.length * 2);
  return perimeter;
}

var square = new Rectangle(4, 4)
var newRec = new Rectangle(5, 2)


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
