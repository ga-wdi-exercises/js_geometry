class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
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
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral () {
    return this.sideA === this.sideB === this.sideC
  }
  isIsosceles () {
    return this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA
  }
  area () {
    // Use Heron's fomula
    let a = this.sideA
    let b = this.sideB
    let c = this.sideC
    let s = (a + b + c) / 2
    return (s * (s - a) * (s - b) * (s - c)) ** (1 / 2)
  }
  isObtuse () {
    let a = this.sideA
    let b = this.sideB
    let c = this.sideC
    return (a ** 2) + (b ** 2) < (c ** 2)
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
