class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }
  isSquare () {
    return this.length === this.width
  }
  area() {
    return this.length * this.width
  }
  perimeter() {
    return (this.length * 2) + (this.width * 2)
  }
}

class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA
    this.sideB = sideB
    this.sideC = sideC
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC){
    return true
  }
  else {
    return false
  }
}
  isIsosceles() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return false
    }
    else if  (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
      return true
    }
    else {
      return true
    }
    }
    area() {
      var s = (this.sideA + this.sideB + this.sideC) / 2
      console.log(s)
      var triArea = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
      return triArea
    }

    isObtuse() {
      var triArray = [this.sideA, this.sideB, this.sideC]
      triArray.sort(function(a, b) {
        return a - b
      })
      if (triArray[2] ** 2 >  (triArray[0] ** 2) + (triArray[1] ** 2)) {
        return true
      }
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
  length() {
    return (Math.sqrt((abs(x2 - x1)**2) + (abs(y2 - y1))**2) 
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
