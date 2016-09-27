class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare () {
    if (this.length === this.width){
      console.log("this is a square!")
    } else {
    console.log("this is a rectangle")
  }
    //var tes = new Rectangle(5,5)
    //test.isSquare()
  }
  area(){
    console.log(this.length * this.width)
  }
  // var test = new Rectangle (7,9)
  // test.area()
  perimeter(){
    console.log((this.length * 2) + (this.width * 2))
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
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
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
