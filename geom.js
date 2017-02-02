class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length == this.width) {
      return("True");
      console.log("True");
    } else {
      return("False");
      console.log("False");
    }
  }
  area() {
    return(this.length*this.width);
    console.log(this.length*this.width);
  }
  perimeter() {
    return(this.length*2 + this.width*2);
    console.log(this.length*2 + this.width*2);
  }
}

let rectangleOne = new Rectangle(400, 400)
let rectangleTwo = new Rectangle(500, 400)
let rectangleThree = new Rectangle(1000, 2)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA == this.sideB && this.sideA == this.sideC) {
      return("Is Equilateral")
      console.log("Is Equilateral");
    } else {
      return("Not Equilateral")
      console.log(" Not Equilateral");
    }
  }
  isIsosceles() {
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      return("Is Isosceles")
      console.log("Is Isosceles");
    } else {
      return("Not Isosceles")
      console.log("Not Isosceles");
    }
  }
  area() {
    return((1/4)*(Math.sqrt(((this.sideA+this.sideB+this.sideC)*(-this.sideA+this.sideB+this.sideC)*(this.sideA-this.sideB+this.sideC)*(this.sideA+this.sideB-this.sideC)))))
    console.log((1/4)*(Math.sqrt(((this.sideA+this.sideB+this.sideC)*(this.sideB+this.sideC-this.sideA)*(this.sideA-this.sideB+this.sideC)*(this.sideA+this.sideB-this.sideC)))));
  }
  isObtuse() {
    if ((Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2)) < Math.pow(this.sideC, 2)) {
      return("Yup. It's Obtuse.")
      console.log("Yup. It's Obtuse.");
  } else {
    return("It's not obtuse. YOU'RE obtuse.")
    console.log("It's not obtuse. YOU'RE obtuse.");
  }
  }
}

let triangleOne = new Triangle(10, 10, 10)
let triangleTwo = new Triangle(15, 15, 10)
let triangleThree = new Triangle(8, 6, 13)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length() {
    var vertical = this.x2 - this.x1
    var horizontal = this.y2 - this.y1
    return(Math.sqrt(Math.pow(vertical, 2) + Math.pow(horizontal, 2)))
    console.log(Math.sqrt(Math.pow(vertical, 2) + Math.pow(horizontal, 2)));
  }
}

let lineSegmentOne = new LineSegment(1, 2, 3, 4)
let lineSegmentTwo = new LineSegment(7, 4, 5, 3)
let lineSegmentThree = new LineSegment(6, 3, 9, 8)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
