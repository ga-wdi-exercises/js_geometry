class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }
  isSquare () {
    if (this.length == this.width) {
      return true
    } else {
      return false
    }
  }
  perimeter () {
    return (this.length + this.width) * 2
  }
  area () {
    return (this.length * this.width)
  }

}

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  isEquilateral () {
    if ((this.sideA === this.sideB) && (this.sideA === this.sideC)) {
      return true
    } else {
      return false
    }
  }
  isIsosceles () {
    if ((this.sideA === this.sideB) || (this.sideA === this.sideB) || (this.sideB === this.sideC)) {
      return true
    } else {
      return false
    }
  }
  area () {
    var perim = (this.sideA + this.sideB + this.sideC) / 2
    return Math.sqrt(this.perim * (this.perim - this.sideA) * (this.perim - this.sideB) * (this.perim - this.sideC))
  }
  isObtuse () {
    temp = 0
    x = this.sideA
    y = this.sideB
    z = this.sideC
    if (x < y) {
      temp = z
      z = y
      y = temp
    }
    if (z < x) {
      temp = z
      z = x
      x = temp
    }

    if ((z * z > x * x + y * y)) {
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
  length () {
    xDif = 0
    yDif = 0

    xDif = Math.abs(this.x1 - this.x2)
    yDif = Math.abs(this.y1 - this.y2)

return Math.sqrt(Math.pow(xDif,2) + (Math.pow(yDif,2)))
  }}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
