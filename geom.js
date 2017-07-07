class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }
  isSquare () {
    if (this.length === this.width) {
      return true
    } else {
      return false
    }
  }
  area () {
    return this.length * this.width
  }
  perimeter () {
    return (this.length + this.width) * 2
  }
}
const square = new Rectangle(5, 5)
const notSquare = new Rectangle(5, 8)

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  isEquilateral () {
    if (this.sideA === this.sideB && this.sideA === this.sideC) {
      return true
    } else {
      return false
    }
  }
  isIsosceles() {
    if(this.sideA === this.sideB && this.sideA !== this.sideC || this.sideA === this.sideC && this.sideA !== this.sideB) {
      return true
    } else {
      return false
    }
  }
  area () {
    return .25 * Math.sqrt((this.sideA + this.sideB + this.sideC) * (-1 * this.sideA + this.sideB + this.sideC) * (this.sideA - this.sideB + this.sideC) * (this.sideA + this.sideB - this.sideC))
  }
  isObtuse () {
    function sortSides (a, b) {
      return a - b
    }
    var sideArray = [this.sideA, this.sideB, this.sideC]
    if (Math.pow(sideArray[0], 2) + Math.pow(sideArray[1], 2) > Math.pow(sideArray[3], 2)) {
      return true
    } else {
      return false
    }
  }
}
const tri = new Triangle(5, 5, 5)

class LineSegment {
  constructor (x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }
  length () {
    let x = Math.abs(this.x1 - this.x2)
    let y = Math.abs(this.y1 - this.y2)
    return Math.sqrt((x * x) + (y * y))
  }
}
const line = new LineSegment(3, 5, 6, 10)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
