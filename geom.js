class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare =
    if (this.length === this.width)
}
//* `isSquare` - returns true if the rectangle is a square.
//* `area` - calculates the area of the rectangle.
//* `perimeter` - calculates the perimeter of the rectangle.


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
