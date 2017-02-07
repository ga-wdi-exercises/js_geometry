class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
     if(this.length === this.width){
    console.log("square");
  }
}
  area() {
    if (this.length * this.width) {
      console.log("rectangle area");
    }
  }
  perimeter() {
    if ((this.length + this.width) * 2) {
      console.log("all the sides");
    }
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
    if (this.sideA === this.sideB === this.sideC) {
      console.log("we equal");
    }
  }
  isIsosceles() {
    if (this.sideA === this.sideB) {
      console.log("semi-equal");
    }
  }
  area() {
    if ((this.sideC * this.sideB)/2) {
      console.log("area aight");
    }
  }
  isObtuse() {
    if (this.sideB > this.sideA > this.sideC) {
      console.log("obtuse");
    }
  }
}

let equal = new Triangle("7cm", "7cm", "7cm");
let semi = new Triangle("9cm", "9cm", "5cm");
let obtuse = new Triangle("20cm", "12cm", "7cm");



class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  // Pythagorean theorem = a^{2}+b^{2}=c^{2}
  length() {
     if (Math.pow(this.x1, 2) + Math.pow(this.y1, 2)) {
       console.log("length1");
     }
    if (Math.pow(this.x2, 2) + Math.pow(this.y2, 2)) {
      console.log("length2");
    }
  }
}

// if (Math.pow(this.x1, 2)+ (Math.pow(this.y1, 2)) = (Math.pow(this.x2, 2)) + (Math.pow(this.y2, 2))) {
//   console.("theorem");
//   }
// }

let line1 = new LineSegment("2cm"+"3cm");
let line2 = new LineSegment("4cm"+"5cm");


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
};
