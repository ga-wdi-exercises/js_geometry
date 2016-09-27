class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare () {
    if (this.length === this.width) {
      console.log ("This is a sqaure.")
      return true
    }
    else {
      return false
    }
  }
  area () {
    let area = this.length * this.width
    console.log (`The area of the rectangle is ${area}.`)
    return area;
  }
  perimeter () {
    let perimeter = (2*this.length) + (2*this.width)
    console.log (`The perimeter of the rectangle is ${perimeter}`)
    return perimeter;
  }
}
const square = new Rectangle (4,4);
const shape1 = new Rectangle (9,3);
const shape2 = new Rectangle (8,6);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
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
/*
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}*/
