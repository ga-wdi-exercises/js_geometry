class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if(this.length === this.width) {
      return true;
    } else return false;
  }
  area() {
    return this.length * this.width;
    }
  perimeter() {
    return 2 * (this.length + this.width);
    }
  }

let rectangles =  new Rectangle (4, 4);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return (this.sideA === this.sideB && this.sideB === this.sideC);
    }
  isIsosceles() {
    return (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC);
  }
  area() {
    let per = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(per * ((per - this.sideA) * (per - this.sideB) * (per - this.sideC)));
  }
  isObtuse() {
    let x = Math.max(this.sideA, this.sideB, this.sideC);
    let y = Math.min(this.sideA, this.sideB, this.sideC);
    let z = (this.sideA + this.sideB + this.sideC) - a - b;
    return Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2);
  }
}

let tringle = new Triangle (20, 20, 20);

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    return Math.sqrt((this.x2 - this.x1) * (this.x2 - this.x1) + (this.y2 - this.y1) * (this.y2 - this.y1));
  }
}

let line = new LineSegment (5, 5, 10, 10);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
