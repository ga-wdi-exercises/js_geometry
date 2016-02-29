function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

//`isSquare` - returns true if the rectangle is a square.
Rectangle.prototype.isSquare = function(){
  if(this.length == this.width){
    return true;
  }
  else{
    return false;
  }
}

//`area` - calculates the area of the rectangle.
Rectangle.prototype.area = function(){
  return this.width * this.length;
}

//`perimeter` - calculates the perimeter of the rectangle.
Rectangle.prototype.perimeter = function(){
  return 2*(this.length + this.width);
}

var square = new Rectangle(2, 2);
var notASquare = new Rectangle(3, 4);

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
