class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length,width){
    if (this.length != this.width){
      return false;
    } else if (this.length = this.width){
      return true;
    }
  }

  findArea(length, width){
  let area = this.length * this.width;
  return area;
  }
  findPerimeter(length, width){
  let perimeter = 2*(this.length + this.width);
  return perimeter;
  }
}
let rectangle1 = new Rectangle(6,6);
let rectangle2 = new Rectangle(12,3);


// class Triangle {
//   constructor(sideA, sideB, sideC){
//     this.sideA = sideA;
//     this.sideB = sideB;
//     this.sideC = sideC;
//   }
// }
//
//
// class LineSegment {
//   constructor(x1, y1, x2, y2){
//     this.x1 = x1;
//     this.y1 = y1;
//     this.x2 = x2;
//     this.y2 = y2;
//   }
// }

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
