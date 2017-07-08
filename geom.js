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
    return this.sideA === this.sideB &&
           this.sideA === this.sideC
  }

  isIsosceles () {
    return (this.sideA === this.sideB) ||
           (this.sideA === this.sideC) ||
           (this.sideB === this.sideC)
  }

  area () {
    var perimeter = this.perimeter()
    return Math.sqrt(perimeter * (
                    (perimeter - this.sideA) *
                    (perimeter - this.sideB) *
                    (perimeter - this.sideC)
                  ))
  }

  perimeter () {
    return ((this.sideA + this.sideB + this.sideC) / 2)
  }

  isObtuse () {
    //  c^2 > a^2 + b^2, where c is the longest side
    var sides = this.getSides()

    return Math.pow(sides[2], 2) > Math.pow(sides[0], 2) + Math.pow(sides[1], 2)
  }

  getSides () {
    var sides = [this.sideA, this.sideB, this.sideC]

    var sorted = sides.sort(function (a, b) {
      return a - b
    })

    return sorted
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
    return Math.sqrt(
      Math.pow(this.x2 - this.x1, 2) + Math.pow(this.y2 - this.y1, 2)
    )
  }
}

var rect1 = new Rectangle(3, 3)
var rect2 = new Rectangle(4, 2)
var rect3 = new Rectangle(5, 3)

var triangle1 = new Triangle(1, 1, 1)
var triangle2 = new Triangle(2, 3, 4)
var triangle3 = new Triangle(4, 4, 7)

var line1 = new LineSegment(1, 1, 2, 2)
var line2 = new LineSegment(1, 5, 10, 2)
var line3 = new LineSegment(1, 1, 2, 2)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
