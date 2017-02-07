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

let Square = new Rectangle("4cm", "4cm");
let Rectangle1 = new Rectangle("6cm", "10cm");
let Rectangle2 = new Rectangle("12cm", "6cm");


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    this.sideA = this.sideB = this.sideC;
    console.log("we equal");
  }
  isIsosceles() {
    this.sideA = this.sideB;
    console.log("semi-equal");
  }
  area() {
    x = (this.sideC * this.sideB)/2;
    console.log("area aight");
  }
  isObtuse() {
    x = (this.sideB > this.sideA > this.sideC);
    console.log("obtuse"); 
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
