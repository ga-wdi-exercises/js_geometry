class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    return this.length === this.width
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2*(this.length + this.width);
  }
}

let rectangle = new Rectangle(8, 4)



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return this.sideA === this.sideB && this.sideA === this.sideC;
  }
  isIsosceles() {
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
  }
  area() {
    let p = (this.sideA + this.sideB + this.sideC)/2;
    return Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC));
  }
  isObtuse() {
    let a = Math.max(this.sideA, this.sideB, this.sideC);
    let b = Math.min(this.sideA, this.sideB, this.sideC);
    let c = (this.sideA + this.sideB + this.sideC) - a - b;
    return Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2);
  }


}


let triangle = new Triangle(100, 40, 40);



class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    return Math.sqrt((this.x2 - this.x1)*(this.x2-this.x1) + (this.y2 - this.y1)*(this.y2 - this.y1))
  }
}

let lineSegment = new LineSegment(20, 42, 10, 40)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
