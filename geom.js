class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    return this.length === this.width
  }
  area() {
    return this.length * this.width
  }
  perimeter() {
    return ((this.length * 2) + (this.width * 2))
  }
}

let Rec1 = new Rectangle(5, 5)


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return (this.sideA === this.sideB && this.sideB === this.sideC)
  }
  isIsosceles() {
    return (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC)
  }
  area() {
    return (this.sideA * this.sideB * this.sideC * 0.5)
  }
  isObtuse() {
    return (((this.sideA * this.sideA) + (this.sideB * this.sideB) < (this.sideC * this.sideC)) || ((this.sideA * this.sideA) + (this.sideC * this.sideC) < (this.sideB * this.sideB)) || ((this.sideC * this.sideC) + (this.sideB * this.sideB) < (this.sideA * this.sideA)))
  }
}

let tri1 = new Triangle (4, 4, 8)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    return ( Math.sqrt(Math.pow((this.x2-this.x1),2) + Math.pow((this.y2-this.y1),2))      )
  }
}

let line1 = new LineSegment (4, 5, 9, 8)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
