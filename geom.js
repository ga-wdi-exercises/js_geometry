class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare () {
    if (this.length === this.width)
    return true
  }
  //   if else {
  //   return false
  // }

  area () {
    return this.length * this.width;
  }

  perimeter() {
    // !!!!!
    return 2 * (this.length + this.width)

  }
}

const myRectangle = new Rectangle(90, 90)
let mySecondRectangle = new Rectangle(30, 60)



// TRIANGLE CLASS

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC)
    return true
  }

  isIsosceles() {


  }

  area() {
    return this.sideA * this.sideB * this.sideC
  }

  isObtuse() {

  }


}

const myTriangle = new Triangle()




class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
