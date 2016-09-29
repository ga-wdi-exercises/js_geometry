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
    } else {
      console.log("False! This is not a Isosceles Triangle");
    }
  }

  area() {
    var a = this.sideA
    var b = this.sideB
    var c = this.sideC

    var s = (a + b + c) / 2
    var a1 = (s*(s-a)*(s-b)*(s-c))
    console.log(a1);
  }

  isObtuse() {
// enter some super awesome formula for finding out if
// a Triangle is Obtuse. console.log it out!

  }
}

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  lineLength() {
    var firstLine = this.x1**2 + this.y1**2
    var secondLine = this.x2**2 + this.y2**2
    length = firstLine*2 + secondLine*2
    console.log(length);
  }
}

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
