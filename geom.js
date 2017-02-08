class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(width, length){
    return this.width === this.length
  }
  area(width, length){
    return this.width * this.length
  }
  perimeter(){
    return (this.width+this.length)*2
  }
}

let red = new Rectangle(40, 41)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(sideA, sideB, sideC){
    return (this.sideA === this.sideB && this.sideB === this.sideC)
    }
  isIsoscles(sideA, sideB, sideC){
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC
  }
  area(sideA, sideB, sideC){
    let s = ((this.sideA + this.sideB + this.sideC)/2)
    return (Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC)))
  }
  isObtuse(sideA, sideB, sideC){
    return (Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2)) < Math.pow(this.sideC, 2) || (Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2)) < Math.pow(this.sideB, 2) || (Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2)) < Math.pow(this.sideA)
  }
}

let green = new Triangle(2, 3, 3)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    var a = Math.abs(this.x1 - this.x2)
    var b = Math.abs(this.y1 - this.y2)
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
  }
}

let blue = new LineSegment(3, -5, -9, 7)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
