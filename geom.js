class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }
  isSquare () {
    if (this.length === this.width) {
      return true
    }
  }
  area () {
    return this.length * this.width
  }
  perimeter () {
    return (this.length * 2) + (this.width * 2)
  }
}

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  isIsosceles () {
    if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA) {
      return true
    } else {
      return false
    }
  }
  isEquilateral () {
    if (this.sideA === this.sideB && this.sideA === this.sideC) {
      return true
    } else {
      return false
    }
  }
  isObtuse () {
    var sides = [this.sideA, this.sideB, this.sideC]
// sort sides numerically; return a-b --> store in array
    var sortedSides = sides.sort(function (a, b) {
      return a - b
    })
// a^2 + b^2 < c^2
    if (Math.pow(sortedSides[0], 2) + Math.pow(sortedSides[1], 2) < Math.pow(sortedSides[2], 2)) {
      console.log(sortedSides)
      return true
    } else {
      return false
    }
  }
  area () {
    var perimeter = (this.sideA + this.sideB + this.sideC) / 2
    console.log(`perimeter: ${perimeter}`)
    var subArea = (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC)
    console.log(`area: ${subArea}`)
    var subArea2 = perimeter * subArea
    console.log(`area: ${subArea2}`)
    var area = Math.sqrt(subArea2)
    return area
  }
}

class LineSegment {
  constructor (x1, y1, x2, y2) {
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
  }
  lineLength () {
    var a = (this.x1 - this.x2)
    var b = (this.y1 - this.y2)
    return Math.sqrt(a * a + b * b)
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
