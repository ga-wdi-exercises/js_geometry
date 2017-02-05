class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return this.length === this.width;
  }
  area(){
    return this.length * this.width;
  }
  perimeter(){
    return 2 *(this.length + this.width);
  }
}

let rectangle1 = new Rectangle(4,5);
let rectangle2 = new Rectangle(2,2);


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }
  isIsosceles(){
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;

  }
  area(){
    var perimeter = (this.sideA + this.sideB + this.sideC) /2;
    var area = Math.sqrt(perimeter*(perimeter-this.sideA)*(perimeter-this.sideB)*(perimeter-this.sideC));
      return area;
  }
  isObtuse(){
    var side = [this.sideA, this.sideB, this.sideC];
    return Math.pow(side[0], 2) + Math.pow(side[1],2) < Math.pow(side[2], 2);
  }

}
let triangle1 = new Triangle(1,1,3);
let triangle2 = new Triangle(2,2,2);
let triangle3 = new Triangle(5,6,7)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    var xCoords = Math.abs(this.x2 - this.x1);
    var yCoords = Math.abs(this.y2 - this.y1);
    var squareAndAdd = Math.pow(xCoords, 2) + Math.pow(yCoords,2);
    return Math.sqrt(squareAndAdd);
  }
}

let lineSegment1 = new LineSegment(1,2, 3,5);
let lineSegment2 = new LineSegment(4,2,6,8);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
