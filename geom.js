class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }

  isSquare () {
    return (this.length === this.width)
  }
  area () {
    return (this.length * this.width)
  }
  perimeter () {
    return ((this.length + this.width) * 2)
  }
}

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }

  isEquilateral () {
    return (this.sideA === this.sideB === this.sideC)
  }

  isIsosceles () {
    return (this.sideA === this.sideB && this.sideB === this.sideC)
  }

  area () {
    var SemiPerimeter = ((this.sideA + this.sideB + this.sideC) / 2)
    return Math.sqrt(SemiPerimeter * ((SemiPerimeter - this.sideA) * (SemiPerimeter - this.sideB) * (SemiPerimeter - this.sideC)))
  }

  isObtuse () {
    return Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2) ||
   Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideB, 2) ||
   Math.pow(this.sideC, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideA, 2)
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
    return Math.sqrt(Math.pow(this.x1 - this.x2, 2) + Math.pow(this.y1 - this.y2, 2))
  }

}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
