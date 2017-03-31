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
    console.log(this.length * this.width);
    return this.length * this.width
  }
  perimeter() {
    console.log((this.length * 2) + (this.width * 2));
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
      console.log("EQUIL: true");
      return true
    } else {
      console.log("EQUIL: false");
    }
  }
  isIsosceles() {

    if(this.sideA === this.sideB && this.sideB !== this.sideC || this.sideB === this.sideC && this.sideC !== this.sideA || this.sideC === this.sideA && this.sideA !== this.sideB ) {
      console.log('ISO: true');
      return true
    } else {
      console.log('ISO: false');
    }
  }
  area() {
    let s = (this.sideA + this.sideB + this.sideC) / 2
    let area = Math.sqrt(s * ((s - this.sideA) * (s - this.sideB) * (s - this.sideC)));
    console.log(`Triangle Area: ${area}`)
    return area;
  }
  isObtuse() {
    let sideA_Sqr = Math.pow((this.sideA),2);
    let sideB_Sqr = Math.pow((this.sideB),2);
    let sideC_Sqr = Math.pow((this.sideC),2);
    let triangle = [sideA_Sqr, sideB_Sqr, sideC_Sqr];
    let largest = Math.max(sideA_Sqr, sideC_Sqr, sideC_Sqr);
    let sideA_B = 0;

    console.log("Running isObtuse():");
    console.log(triangle);
    console.log(largest);

    triangle.forEach((item) => {
      if (item < largest) {
        sideA_B += item
      }
    })

    if (sideA_B < largest) {
      console.log('OBTUSE: true');
      return true
    } else {
      console.log('OBTUSE: false');
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
    let lineLength = Math.sqrt(Math.pow((this.x1 - this.x2), 2) + Math.pow((this.y1 - this.y2), 2));
    console.log(lineLength);
    return lineLength
  }
}

const rect1 = new Rectangle(24, 60);
const square = new Rectangle(34,34);
const tri = new Triangle(34, 34, 34);
const tri2 = new Triangle(34, 34, 28);
const tri3 = new Triangle(5, 10, 14);
const line = new LineSegment(1, 1, 5, 4);

/************** TESTS **************/
console.log("--------------------------");
console.log("Rectangle");
rect1.isSquare();
rect1.area();
rect1.perimeter();
square.isSquare();
console.log("\n\n");

console.log("--------------------------");
console.log("Triangle 1");
tri.isIsosceles();
tri.isEquilateral();
tri.isObtuse();
tri.area();
console.log("\n\n");

console.log("--------------------------");
console.log("Triangle 2");
tri2.isIsosceles();
tri2.isEquilateral();
tri2.isObtuse();
tri2.area();
console.log("\n\n");

console.log("--------------------------");
console.log("Triangle 3");
tri3.isIsosceles();
tri3.isEquilateral();
tri3.isObtuse();
tri3.area();
console.log("\n\n");

console.log("--------------------------");
console.log("Line");
line.length();

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
