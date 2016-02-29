

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.IsSquare = function(){
  if (this.length === this.width){
    return "I'm a square!"
  }else{return "Not a square, just a rectangle"}
}

Rectangle.prototype.area = function(){
  return "My area is "+ (this.length * this.width);
}
Rectangle.prototype.perimeter = function(){
  return "My perimeter is "+(2*(this.length+this.width))
}
var square = new Rectangle(4,4);
var notSquare = new Rectangle(4,6);


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
