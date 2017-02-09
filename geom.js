class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length, width){
    if (this.length == this.width) {
      return "true";
    }
  }
  area(length, width){
    return (this.length * this.width);
  }
  perimeter(length, width){
    return 2 * (this.length + this.width);
  }
}

let square = new Rectangle(10, 10)
let square2 = new Rectangle(8, 25)
let square3 = new Rectangle(9, 18)


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
