function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Recatangle.prototype{
  //  isSquare - returns true if the rectangle is a square.
  isSquare: function(){
    return this.length === this.width;
  }
  //  area - calculates the area of the rectangle.
  area: function(){
    return this.length * this.width;
  }
  //  perimeter - calculates the perimeter of the rectangle.
  perimeter: function(){
    return this.length + this.width + this.length + this.width;
  }
}

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype{
  // isEquilateral - returns true if the triangle is equilateral.
  isEquilateral: function(){
    return this.SideA === this.sideB === this.sideC;
  }
  // isIsosceles - return true if the triangle is isosceles.
  isIsosceles: function(){
    return this.sideA === this.sideB
  }
  // area - calculates the area of the Triangle.
  area: function(){

  }
  //  isObtuse - returns true if the triangle is obtuse.
  isObtuse: function(){

  }
}


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

//Augment its prototype with the following method:
//  length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
