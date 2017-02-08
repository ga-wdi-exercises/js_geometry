class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    return this.length == this.width
  }

  area() {
    return this.length * this.width
  }
  perimeter() {
    return (2*(this.length+this.width))
  }
}
let rectangle1 = new Rectangle(4,4)
let rectangle2 = new Rectangle(10,12)
let rectangle3 = new Rectangle (25,30)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  area() {
    return ((this.sideA * this.sideB)/(this.sideC)) || ((this.sideB * this.sideC)/(this.sideA)) || ((this.sideC * this.sideA)/(this.sideB))
  }

  isEquilateral() {
    return (this.sideA == this.sideB == this.sideC)
  }

  isObtuse() {
    return (Math.pow(this.sideA, 2) + (this.sideB, 2) > (this.sideC, 2) || (Math.pow(this.sideB, 2) + (this.sideC, 2) > (this.sideA, 2) || (Math.pow(this.sideA, 2) + (this.sideC, 2) > (this.sideB, 2)
  }

  isIsosceles() {
    return (this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideA)
  }
}
let triangle1 = new Triangle (5,10,17)
let triangle2 = new Triangle (2,6,8)
let triangle3 = new Triangle (3, 17, 40)
class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length() {
    return ((this.x1 + this.y1)+(this.x2 + this.y2))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
