function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

// if rectangle is a square
Rectangle.prototype.isSquare = function(){
  if (this.length === this.width){
    return true;
  }
  else {
    return false;
  }
}

// area of rectangle
Rectangle.prototype.area = function(){
  return this.length * this.width;
}

// perimeter of rectangle
Rectangle.prototype.perimeter = function(){
  return (this.length + this.width) * 2;
}

// created two new objects
var rectangle1 = new Rectangle (4,4);
var rectangle2 = new Rectangle (6,4)


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  if (this.sideA === this.sideB && this.sideB === this.sideC){
    return true;
  }
  else {
    return false;
  }
}

Triangle.prototype.isIsosceles = function(){
  if (this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideA){
    return true;
  }
  else {
    return false;
  }
}


//
// function LineSegment(x1, y1, x2, y2) {
//   this.x1 = x1;
//   this.y1 = y1;
//   this.x2 = x2;
//   this.y2 = y2;
// }
