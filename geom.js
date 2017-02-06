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
    area() {
      this.p = (this.sideA + this.sideB + this.sideC) / 2;
      return Math.sqrt(this.p * (this.p - this.sideA) * (this.p - this.sideB) * (this.p - this.sideC));

  }
    isObtuse() {
      if (Math.pow(this.sideA,2) + Math.pow(this.sideB,2) < Math.pow(this.sideC,2)) {
        return true
      } else {
        return false
      };
    }
}

// Area =
 // Perimeter = a + b + c
 // p = half Parameter
 // Area = √ (p(p-a)(p-b)(p-c))
// use Math.sqrt(x);

const triOne = new Triangle (6,6,6);
const triTwo = new Triangle (12,10,10);
const triThree = new Triangle (5,10,14);



// LINESEGMENT
class LineSegment {
    constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
    length() {
    this.Xpoint = this.x1 - this.x2;
    this.Ypoint = this.y1- this.y2;
    this.xy = Math.pow(this.Xpoint,2) + Math.pow(this.Ypoint,2);
    return Math.sqrt(this.xy);
  }
}

const coordOne = new LineSegment (5,4,3,2);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
