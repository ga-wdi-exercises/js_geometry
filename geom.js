class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
      return true;
    } else return false;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return (2 * this.length) + (2 * this.width);
  }
}
var rectangle1 = new Rectangle(20,5);
var rectangle2 = new Rectangle(12,18);
var rectangle3 = new Rectangle(10,10);



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

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
