/// RECTANGLE

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
    isSquare() {
    if (this.length === this.width) {
      return true;
    }
  }
    area() {
      return this.length * this.width;

    }
    perimeter() {
      return 2 * (this.width + this.length);
    }
}

const boxOne = new Rectangle (5,5);
const boxTwo = new Rectangle (12,12);
const recOne = new Rectangle (12,5);
const recTwo = new Rectangle (10,16);

// TRIANGLE

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
    isEquilateral() {
      if (this.sideA === this.sideB  && this.sideB === this.sideC) {
        return true;
      } else {
        return false
      }
  }
    isIsosceles() {
      if ((this.sideA === this.sideB && this.sideB !== this.sideC) || (this.sideA === this.sideC && this.sideC !== this.sideB) || (this.sideB === this.sideC && this.sideC !== this.sideA)) {
        return true;
      } else {
        return false
      }
}
}


const triOne = new Triangle (2,2,2);
const triTwo = new Triangle (12,5,5);
const triThree = new Triangle (20,20,3);














//
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
