function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

//all sides the same length
Rectangle.prototype.isSquare: {
    return this.length === this.width;
}

//length * width
Rectangle.prototype.area: {
    return this.length * this.width;
}

//addlength of all sides
Rectangle.prototype.perimeter: {
   return (this.width * 2) + (this.length * 2);
}

//

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}


Triangle.prototype.isEquilateral: {
  this.sideA == this.sideB == this.sideC;
}

Triangle.prototype.isIsosceles:{
  sideC <(sideA == sideB);
}
//base times height
Triangle.prototype.area:{
  this.sideA =
}

//one angle over 90
Triangle.prototype.isObtuse:{
  if this.sideA = 95; && this.sideB = 40 && this.sideC = 85;
}




function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
