function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
  isSquare: function() {
    if (this.length === this.width){
      return true;
    }
  },

  area: function() {
    if (this.length * this.width){
      return true;
    }
  },

  perimeter: function() {
  if ((this.length + this.width) * 2){
    return true;
  }
}
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  isEquilateral: function() {
    if (this.sideA === this.sideB && this.sideB === this.sideC){
      return true;
    }
  },

  isIsosceles: function() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
      return true;
    }
}
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
