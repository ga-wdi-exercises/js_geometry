class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    return (this.length === this.width);
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return (this.length + this.width) * 2;
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return (this.sideA === this.sideB && this.sideB === this.sideC)
  }
  isIsoceles() {
    return (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA)
  }
  area() {
    let semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB) * (semiPerimeter - this.sideC));
    return area;
  }
  isObtuse() {
    let sides = [this.sideA, this.sideB, this.sideC];
    let [a, b, c] = sides;
    let longSide = Math.max(a, b, c);
    sides.splice(sides.indexOf(longSide), 1);
    if (longSide ** 2 > (sides[0] ** 2) + (sides[1] ** 2))
      return true
    else
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
    let deltaX = this.x2 - this.x1;
    let deltaY = this.y2 - this.y1;
    let length = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    return length;
  }
}

// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
