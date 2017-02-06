class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length == this.width) {
      return true;
    }
    return false
  }
  area() {
    return (this.length * this.width);
  }
  perimeter() {
    return ((this.length * 2) + (this.width * 2));
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilaral() {
    if (this.sideA == this.sideB && this.sideC) {
      return true
    }
    return false
  }
  isIsoceles() {
    if (this.sideA == this.sideB || this.sideB == this.sideC || this.sideA == this.sideC) {
      return true
    }
    return false;
  }
  area() {
    var s = (this.sideA + this.sideB + this.sideC)/2;
    return ((s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))**(1/2))
  }
  isObtuse() {
    if (Math.pow(tri.sideA,2)+Math.pow(tri.sideB,2) < Math.pow(tri.sideC,2) || Math.pow(tri.sideB,2)+Math.pow(tri.sideC,2) < Math.pow(tri.sideA,2) || Math.pow(tri.sideA,2)+Math.pow(tri.sideC,2) < Math.pow(tri.sideB,2)) {
      return true;
    }
    return false
  }
}

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    return Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2))
  }
}

let rect = new Rectangle(5,4);
let tri = new Triangle(4,4,3);
let line = new LineSegment(23,4,19,3);

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
