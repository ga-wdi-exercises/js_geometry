class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }
  isSquare () {
    if (this.length === this.width) {
      return true
    } else { return false }
  }
  area () {
    return this.length * this.width
  }
  perimeter () {
    return 2 * (this.length + this.width)
  }
}
const rectangle1 = new Rectangle(7, 4)
const rectangle2 = new Rectangle(16, 8)
const rectangle3 = new Rectangle(12, 6)

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  isEquilateral () {
    if (this.sideA === this.sideB === this.sideC) {
      return true
    } else { return false }
  }
  isIsosceles () {
    if (this.sideA === this.sideB || this.sideB === this.sideC) {
      return true
    } else { return false }
  }
  triArea () {
    let p = (this.sideA + this.sideB + this.sideC) / 2
    return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))
  }
  isObtuse () {
    if((this.sideA * this.sideA) * (this.sideB * this.sideB) < (this.sideC * this.sideC)) {
      return 'true'
    } else {return false}
  }
}
const triangle1 = new Triangle(7, 9, 9)
const triangle2 = new Triangle(6, 6, 6)
const triangle3 = new Triangle(4, 2, 8)

class LineSegment {
  constructor (x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }
  lineLength () {
    Math.sqrt((this.x2 - this.x1) * (this.x2 - this.x1)) + ((this.y2 - this.y1) * (this.y2 - this.y1))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
//module.exports = {
//  Rectangle: Rectangle,
  //Triangle: Triangle,
//  LineSegment: LineSegment
//}
