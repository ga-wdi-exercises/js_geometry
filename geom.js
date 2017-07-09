class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare () {
    if (this.length === this.width){
      return true
    } else {
      return false
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
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral () {
    if (this.sideA === this.sideB === this.sideC){
      return true
    } else {
      return false
    }
  }
  isIsosceles () {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
      return true
    } else {
      return false
    }
  }
  area () {
    return (1/4 * Math.sqrt((this.sideA + this.sideB + this.sideC) * (-this.sideA + this.sideB + this.sideC) * (this.sideA - this.sideB + this.sideC) * (this.sideA + this.sideB - this.sideC)))
  }

  isObtuse () {
    let angle1 = (Math.acos(((this.sideB * this.sideB) + (this.sideC * this.sideC) - (this.sideA * this.sideA)) / (2 * this.sideB * this.sideC))) * 57.2958 //radians to degrees conversion
    let angle2 = (Math.acos(((this.sideA * this.sideA) + (this.sideC * this.sideC) - (this.sideB * this.sideB)) / (2 * this.sideA * this.sideC))) * 57.2958 //radians to degrees conversion
    let angle3 = 180 - angle1 - angle2
    if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
      return true
    }
    else {
      return false
    }
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length () {
  let xdiff = Math.abs (this.x1 - this.x2)
  let ydiff = Math.abs (this.y1 - this.y2)
  return Math.sqrt((xdiff * xdiff) / (ydiff * ydiff))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
