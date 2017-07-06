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
    return this.length * 2 + this.width * 2
  }
}

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
  isIsosceles () {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return true
    } else {
      return false
    }
  }
  area () {
    let s = (this.sideA + this.sideB + this.sideC) / 2
    let a = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
    return a
  }
  perimeter () {
    return (this.sideA + this.sideB + this.sideC)
  }
  obtuse () {
    let sideArray = [this.sideA, this.sideB, this.sideC]
    sideArray.sort(function (a, b) { return a - b })
    if ((this.sideC * this.sideC) > (this.sideA * this.sideA) + (this.sideB * this.sideB))
    return true
    else {
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
  length () {
    let xdiff = Math.abs(this.x2 - this.x1)
    let ydiff = Math.abs(this.y2 - this.y1)
    return Math.sqrt((xdiff * xdiff) + (ydiff * ydiff))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
