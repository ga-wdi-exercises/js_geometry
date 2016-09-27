class Rectangle {
  constructor(length, width) {
    this.length = length
    this.width = width
}
  isSquare() {
    if (this.length === this.width) {
      console.log("You have a square");
    } else {
      console.log("This is not a square");
    }
  }

  area() {
    console.log((this.length * this.width));
  }

  perimeter() {
    console.log((this.length + this.width) * 2);
  }
}

// How to test:
// var test = new Rectangle(4, 4)
// test.isSquare()
// test.area()
// test.perimeter()

class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    if (this.sideA == this.sideB && this.sideA == this.sideC && this.sideC == this.sideB) {
      console.log("True! You have a Equilateral Triangle!");
    } else {
      console.log("False! This is not a Equilateral Triangle");
    }
  }

  isIsosceles() {
    if ((this.sideA === this.sideB) || (this.sideA === this.sideC)) {
      console.log("True! You have a Isosceles Triangle!");
/// this if statement returned true everytime... Why is that? Shouldn't this work?

    // if ((this.sideA === this.sideB && != this.sideC) || (this.sideA === this.sideC && != this.sideB) || (this.sideB === this.sideC && != this.sideA)) {
    } else {
      console.log("False! This is not a Isosceles Triangle");
 }
}
}


// 1/2 base times height
// assest the certimy perimeter forumla
// a + b + c / 2
// forumela for area of the traiage ... s's fancy square roots


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
