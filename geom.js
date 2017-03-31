class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare(){
    
    return this.length === this.length;
  }

  area(){
    
    return this.length * this.width;
  }

  perimeter(){
    return 2 * (this.length + this.width);
  }

}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }

  sIsosceles() {
      return this.sideA > this.sideB || this.sideB < this.sideC;

  }

  area() {
    return (this.sideA + this.sideb + this.sideC) / 2;

  }

}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    length() {}
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
