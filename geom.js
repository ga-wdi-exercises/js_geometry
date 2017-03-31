class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() { 
    if (this.length === this.width) {
      return: "Is Square"
    };
  area() {
    return: this.length * this.width;
  }

  perimeter() {
    return: (this.lenth * 2) + (this.width * 2);
  }

}


} 


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    if (this.sideA === this.sideB === this.sideC) {
      return true;
    }
  }

  isIsoscelenes() {
    if (this.sideA === this.SideB) || (this.sideA === this.sideB) || (this.sideB === this.sideC) {
      return true;
    }
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
