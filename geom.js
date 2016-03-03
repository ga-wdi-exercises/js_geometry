function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
  isSquare: function(){
    return this.length == this.width;
  },
  area: function(){
    return this.length * this.width;
  },
  perimeter: function(){
    return(this.length + this.width)*2;
  }
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
  isIsosceles: function {
    return this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA;
  },
  area: function{
    var semiperimeter = (this.sideA + this.sideB + this.sideC) / 2;
    var area = Math.sqrt(s *(s-this.sideA) * (s - sideB) * (s - sideC));
    return area;
  },
  isObtuse: function{
    // isObtuse - returns true if the triangle is obtuse.
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
    var a = this.x1 + this.x2;
    var b = thix.y1 + this.y2;
    return Math.sqrt(a * a)+(b * b)
  }
};
