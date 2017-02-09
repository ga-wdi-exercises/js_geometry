class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length == this.width) {
      return "true";
    } else {
      return "false";
    }
  }
  areaOfRect(){
    return (this.length * this.width);
  }
  perimeter(){
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

  isEquilateral(){
    if (this.sideA == this.sideB && this.sideA == this.sideC) {
      return "true";
    } else {
      return "false";
    }
  }

  isIsosceles(){
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      return "true"
    } else {
      return "false"
    }
  }
  area(){
    let s = .5 * (this.sideA + this.sideB + this.sideC);
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
  }

  isObtuse(sideA, sideB, sideC){
    return this.sideC * this.sideC > (this.sideB * this.sideB) + (this.sideA * this.sideA);
  }
}

let triangle = new Triangle(10, 10, 10)
let triangle2 = new Triangle(20, 10, 30)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length(){
    return Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2);
  }
}

let line1 = new LineSegment(12, 13, 14, 15)
let line2 = new LineSegment(20, 22, 24, 26)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
