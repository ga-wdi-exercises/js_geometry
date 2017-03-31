class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  Rectangle.shape = {
    isSquare: function() {
      return this.length === this.width;
    },

    area function(){
      return this.length*this.width;
    },

  perimeter: function() {
    return this.length + this.width + this.length + this.width;
  }
},
  function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.shape = {
  isEquilateral: function() {
    return this.sideA === this.sideB === this.sideC;
  },
  isIsosceles: function() ???????

  area: function() {
    var p = (this.sideA + this.sideB + this.sideC) / 2;
    var area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    return area;
  },
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
