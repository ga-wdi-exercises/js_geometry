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

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  isEquilateral () {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true
    } else {
      return false
    }
  }
  isIsosceles () {
    if (this.sideA === this.sideB && this.sideB !== this.sideC || this.sideA === this.sideC && this.sideC !== this.sideB || this.sideC === this.sideB && this.sideB !== this.sideA) {
      return true
    } else {
      return false
    }
  }
  area () {
    var s = (this.sideA + this.sideB + this.sideC) / 2
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
  }
  isObtuse () {
    function sortSides (a, b) {
      return a - b
    }
    var sideArray = [this.sideA, this.sideB, this.sideC]
    sideArray.sort(sortSides)
    if (Math.pow(sideArray[0]) + Math.pow(sideArray[1]) < Math.pow(sideArray[2])) {
      return true
    } else {
      return false
    }
  }
  }

class LineSegment {
  constructor (x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
