class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare () {
    square = this.length === this.width;
  }
  area () {
    area = this.width * this.length;
  }
  perimeter () {
    perimeter = (2)(this.length * this.width);
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral () {
    this.sideA === this.sideB === this.sideC;
  }
  isIsoceles () {
    this.sideA === this.sideB || this.sideC === this.sideA

  }
  area () {

  }
  isObtuse () {

  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length () {
    
  }
}

const square = new Rectangle (4, 4)
const area = new Rectangle (5, 9)
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
