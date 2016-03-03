function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
  isSquare: function(){
    return this.width === this.length;
  },
  area: function(){
    return (this.width * this.length);
  },
  perimeter: function(){
    return (this.width + this.length) * 2;
  }
};


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Rectangle.prototype = {
  isEquilateral: function(){
    return (this.sideA === this.sideB) && (this.sideB === this.sideC);
  },
  isIsosceles: function (){
    return (this.sideA === this.sideB) || (this.sideA === this.sideC) || (this.sideB === this.sideC);
  },
  area: function(){
    var s = (this.sideA + this.sideB + this.sideC) / 2;
    var area = Math.sqrt(s * (s - this.sideA) * (s * this.sideB) * (s * this.sideC));
    return area;
  }

};


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype = {
  length: function(){
    var x = (this.x2 - this.x1);
    var y = (this.y2 - this.y2);
    //why isn't x^2 recognized as being x squared?)
    return Math.sqrt((x * x) + (y * y));
  }
};
