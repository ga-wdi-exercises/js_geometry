//Start Rectangle
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
    isSquare(){
    if (this.length === this.width){
      console.log("true");
    } else {
      console.log("false");
    }
  }
    area(){
      return this.area = this.length * this.width;
    }
    perimeter(){
      return this.perimeter = (2*this.length)+(2*this.width);
    }
  }

const square = new Rectangle(2,2);
const rect1 = new Rectangle(3,6);
const rect2 = new Rectangle(7,9);

//Start Triangle
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
