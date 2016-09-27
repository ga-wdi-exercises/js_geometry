// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }
//
//   isSquare() {
//     if (this.length === this.width) {
//       console.log("this is a square!")
//     } else {
//       console.log("this is not a square")
//     }
//   }
//
//   area() {
//     return this.length * this.width
//   }
//   // var test = new Rectangle()
//   perimeter(){
//     return ((this.length * 2) + (this.width * 2))
//
//   }
// }
// var test = new Rectangle(5, 5)
// var test2 = new Rectangle(7, 5)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC && this.sideA === this.sideC) {
      console.log("this is Equilateral!")
    } else {
      console.log("this is not Equilateral!")
    }
  }
  isIsosceles() {
    if (this.sideA === this.sideB && this.sideA != this.sideC || this.sideA === this.sideC && this.sideA != this.sideB || this.sideB === this.sideC && this.sideB != this.sideA) {
        console.log("this is Isosceles!")
    }  else {
        console.log("this is not Isosceles!")
  }
}

  area() {
    var s = (this.sideA + this.sideB + this.sideC)/ 2
    return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))

    }
  }


// var test = new Triangle(3, 3, 3)
//
// class LineSegment {
//   constructor(x1, y1, x2, y2){
//     this.x1 = x1;
//     this.y1 = y1;
//     this.x2 = x2;
//     this.y2 = y2;
//   }
// }
//
// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
