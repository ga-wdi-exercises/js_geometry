class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    this.length = this.width;
    console.log("square");
  }
  area() {
    x = this.length * this.width;
    console.log("rectangle area");
  }
  perimeter() {
    x = (this.length + this.width) * 2;
    console.log("all the sides");
  }
}


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
};
