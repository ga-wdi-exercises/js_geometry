class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
      return true;
    }
    return false;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

let recA = new Rectangle(1, 1);
let recB = new Rectangle(2, 5);
let recC = new Rectangle(4, 7);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true;
    }
    return false;
  }
  isIsosceles() {
    if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
      return true;
    }
    return false;
  }
  area() {
    let s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC));
  }
}

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    return sqrt(Math.abs(x2 - x1) + Math.abs(y2 - y1));
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
