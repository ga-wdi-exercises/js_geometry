class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
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
    return (this.sideA === this.sideB) || (this.sideA === this.sideC) || (this.sideB === this.sideC);
  }
  area() {
    let p = (this.sideA + this.sideB + this.sideC) / 2;
    let a = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    return a;
  }
  isObtuse() {
    if (this.sideA > this.sideB && this.sideA > this.sideC) {
      return Math.pow(this.sideA, 2) > Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2);
    } else if (this.sideB > this.sideC) {
      return Math.pow(this.sideB, 2) > Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2);
    } else return Math.pow(this.sideC, 2) > Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2);
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
    return Math.sqrt((this.x2 - this.x1) * (this.x2 - this.x1) + (this.y2 - this.y1) * (this.y2 - this.y1));
  }
}


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
