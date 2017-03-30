class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
      console.log("true");
      return true
    } else {
      console.log("false");
    }
  }
  area() {
    return this.length * this.width
  }
  perimeter() {
    return (this.length * 2) + (this.width * 2)
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      console.log("true");
      return true
    } else {
      console.log("false");
    }
  }
  isIsosceles() {
    if(this.a === this.b && this.b !== this.c || this.b === this.c && this.c !== this.a || this.c === this.a && this.a !== this.c ) {
      console.log('true');
      return true
    } else {
      console.log();
    }
  }
  area() {
    let s = (this.sideA + this.sideB + this.sideC) / 2
    let area = Math.sqrt(s(s - this.sideA)(s - this.sideB)(s - this.sideC));
    return area;
  }
  isObtuse() {
    if (this.sideA !== this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC) {
      console.log('true');
      return true
    } else {
      console.log('false');
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
  length() {
    return Math.sqrt(Math.pow((this.x1 - this.x2), 2) + Math.pow((this.y1 - this.y2), 2))
  }
}

let rect = new Rectangle(24, 60);
let tri = new Triangle(34, 34, 34);
let tri2 = new Triangle(34, 4, 4);
let tri3 = new Triangle(6, 3, 4);
let line = new LineSegment(1, 1, 5, 4);



// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
