class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length, width){
    return this.length === this.width;
  }
  area(length, width){
    return this.length * this.width;
  }
  perimeter(length, width){
    return (2*this.length) + (2*this.width);
  }
}

let bigSquare = new Rectangle(20, 20);
let notSquare = new Rectangle(15, 10);
let McPherson = new Rectangle(7.5, 7.5);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(sideA, sideB, sideC){
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }
  isIsosceles(sideA, sideB, sideC){
    return this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC;
  }
  area(sideA, sideB, sideC){
    let s = .5 * (this.sideA + this.sideB + this.sideC);
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }
  isObtuse(sideA, sideB, sideC){
    return this.sideC * this.sideC > (this.sideB * this.sideB) + (this.sideA * this.sideA);
  }
}

let federal = new Triangle(3,4,5);
let bermuda = new Triangle(6,6,6);
let wacky = new Triangle(2,3,4);

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(x1, y1, x2, y2){
    return Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2);
  }
}

let pythagorean = new LineSegment(2, 3, 4, 5);
let theorem = new LineSegment(6, 8, 10, 12);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
};
