class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() {
    return this.length === this.width ? true : false;
  }

  area() {
    return this.length * this.width;
  }

  perimeter() {
    return 2 * (this.length + this.width);
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    return (this.sideA === this.sideB) && (this.sideB === this.sideC);
  }

  isIsosceles() {
    return (this.sideA === this.sideB) || (this.sideA === this.sideC) || (this.sideB === this.sideC);
  }

  area() {
    let a = this.sideA, b = this.sideB, c = this.sideC;
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  isObtuse() { //if cosA is < 0 - A is an obtuse angle
    let asquared = Math.pow(this.sideA, 2);
    let bsquared = Math.pow(this.sideB, 2);
    let csquared = Math.pow(this.sideC, 2);
    return (asquared + bsquared < csquared) || (bsquared + csquared < asquared) || (csquared + asquared < bsquared);
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
    let x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }
}

let rectangle = new Rectangle(2, 4);
let triangle = new Triangle(2, 3, 3);
let line = new LineSegment(1, 1, 2, 2);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
