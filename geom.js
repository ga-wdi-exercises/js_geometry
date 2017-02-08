class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if(this.length == this.width)
      return true;
  }
  isArea() {
    return this.length * this.width;
  }
  isPerimeter() {
    return (this.length + this.width) * 2;
  }
}

var square = new Rectangle(50, 50)
// var area = new Rectangle(50, 50)
// var perimeter = new Rectangle(100, 50)
// var Square = new Rectangle(50, 50)
// Rectangle.isSquare(100, 100)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideC) {
      return true;
    }
  }
  isIsoceles() {
    if (this.sideA === this.sideB || this.sideC) {
      return true;
    }
  }
  isArea() {
    var s = (this.sideA + this.sideB + this.sideC)/2
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
  }
  isObtuse() {
    var straightLine = 180
    var angle = (this.sideA + this.sideB)
    var obtuseAngle = straightLine - angle
    return obtuseAngle
  }
}

var triangle = new Triangle (40,20,0)
// var triangle = new Triangle ()

// AB = √(x1 - x2)2 + (y2 - y1)2
// AB = √(x2 - x1)2 + (yb - ya)2

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  //Distance between X and Y coordinates
  length(x1, y1, x2, y2) {
    var answer = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    return answer
  }

}

var distance = new LineSegment(10,5,15,10)
// use distance.length(10,15,20,25) in console

// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
