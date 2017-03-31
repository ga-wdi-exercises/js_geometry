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


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral(sideA, sideB, sideC){
    if(this.sideA = (this.sideB && this.sideC)){
      return true;
    }else {
      return false;
    }
  }
  isIsosceles(sideA, sideB, sideC){
    if(this.sideA = (this.sideB && this.sideC)){
      return false;
    }else if ((this.sideA != (this.sideB || this.sideC)) && (this.sideB != (this.sideA || this.sideC)){
      return false;
    }else if ((this.sideA = this.sideB ) && (this.sideA != this.sideC)){
      return true;
    }
  }
  findArea(sideA, sideB, sideC){
    let area = Math.sqrt(root);

      let square = ((this.sideA + this.sideB + this.sideC) / 2);
      let root = (square * ((square - this.sideA) * (square - this.sideB) * (square - this.sideC)));
  }
  isObtuse(sideA, sideB, sideC){
    if((a + b) < c){
      return true;
    }else {
      return false;
    }
    let a = Math.pow(this.sideA, 2);
    let b = Math.pow(this.sideB, 2);
    let c = Math.pow(this.sideC, 2);
  }
}
let triangle1 = new Triangle(3,5,7);
let triangle2 = new Triangle(4,4,4);
let triangle3 = new Triangle(6,6,9);

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
