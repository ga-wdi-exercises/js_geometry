function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype = {
  isSquare: function(){
    return this.length === this.width;
  },
}
Rectangle.prototype = {
  area: function(){
    return this.length * this.width;
  },
}
Rectangle.prototype = {
  perimeter: function(){
    return (this.length * 2) + (this.width * 2);
  },
}



function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype = {
  isEquilateral: function(){
    return (this.sideA + this.sideB) === (this.sideB + this.sideC);
  }
}
Triangle.prototype = {
  isIsosceles: function(){
    return (this.sideA == this.sideB) && (this.sideA != this.sideC);
  }
}
Triangle.prototype = {
  area: function(){
    return (this.sideA * this.sideB * this.sideC);
  }
}
Triangle.prototype = {
  isObtuse: function(){
    return (this.sideA != this.sideB, this.sideB != this.sideC, this.sideC != this.sideA);
  }
}
function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype = {
  length: function(){
    return (this.x1 + this.y1) === (this.x2 + this.y2);
  }

}
