class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }
  isSquare () {
    return this.length === this.width
  }
  area () {
    return this.length * this.width
  }
  perimeter () {
    return (this.length + this.width) * 2
  }
}

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  isEquilateral () {
    return this.sideA === this.sideB === this.sideC
  }
  isIsosceles () {
    return this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA
  }
  area () {
    // Heron's Fomula
    let s = (this.sideA + this.sideB + this.sideC) / 2
    return (s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)) ** 0.5
  }
  isObtuse () {
    return (this.sideA ** 2) + (this.sideB ** 2) < (this.sideC ** 2)
  }
}


class LineSegment {
  constructor (x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }
  length () {
    return (((this.x2 - this.x1) ** 2) + ((this.y2 - this.y1) ** 2)) ** 0.5
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
