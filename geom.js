class Rectangle {
  constructor(length, width){
    this.length = length
    this.width = width
  }
  isSquare() {
    return (this.width === this.length)
  }
  area() {
    return (this.length * this.width)
  }
  perimeter() {
    return (2*(this.length+this.width))
  }
}
let bob = new Rectangle(5,4)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return (this.sideA === this.sideB === this.sideC)
  }
  isIsosceles() {
    return ((this.sideA === this.sideB) || (this.sideA === this.sideC) || (this.sideA === this.sideC))
  }
  area() {
    let s = ((this.sideA + this.sideB + this.sideC)/2)
    return (Math.sqrt(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
  }
  isObtuse() {
    return (((this.sideA * this.sideA) + (this.sideB * this.sideB) > (this.sideC * this.sideC)) || ((this.sideA * this.sideA) + (this.sideC * this.sideC) > (this.sideB * this.sideB)) || ((this.sideC * this.sideC) + (this.sideB * this.sideB) > (this.sideA * this.sideA)) )
  }
}
let zelda = new Triangle (4, 5, 6)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    return Math.sqrt(Math.pow((this.x1-this.x2), 2) + (Math.pow((this.y1-this.y2), 2)))
  }
}
let liney = new LineSegment(8, 6, 7, 5)//Now i know, liney!!! 

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
