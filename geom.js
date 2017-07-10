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
  area () {
    var perim = (this.sideA + this.sideB + this.sideC) / 2
    return Math.sqrt(this.perim * (this.perim - this.sideA) * (this.perim - this.sideB) * (this.perim - this.sideC))
}
  isIsosceles () {
    if ((this.sideA === this.sideB) || (this.sideA === this.sideB) || (this.sideB === this.sideC)) {
      return true
    } else {
      return false
    }
  isEquilateral () {
      if ((this.sideA === this.sideB) && (this.sideA === this.sideC)) {
        return true
      } else {
        return false
      }
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
