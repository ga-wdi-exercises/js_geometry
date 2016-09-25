class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if(this.length === this.width) {
      return true;
    } else {
      return false;
    }
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2*(this.length + this.width);
  }

}
const rectangle1 = new Rectangle(4, 3);
const rectangle2 = new Rectangle(4, 4);
const rectangle3 = new Rectangle(4, 5);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if(this.sideA === this.sideB === this.sideC) {
      return true;
    } else {
      return false;
    }
  }
  isIsosceles() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return true;
    } else {
      return false;
    }
  }
  area() {
    if ((this.sideA + this.sideB + this.sideC)/2) {
      return true;
    } else {
      return false;
    }
  }
}
const triangle1 = new Triangle(2,2,2)
const triangle3 = new Triangle(2,4,2)
const triangle2 = new Triangle(2,3,4)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
