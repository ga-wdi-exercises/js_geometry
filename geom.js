class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return this.length === this.width;
  }
  area(){
    return this.length*this.width;
  }
  perimeter(){
    return 2*(this.length + this.width);
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return this.sideA === this.sideB && this.sideB === this.sideC)
  }
  isIsosceles(){
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
    area(){
      let s = (this.sideA + this.sideB + this.sideC)/2;
      return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
    }

    isObtuse(){
      let sides = [this.sideA, this.sideB, this.sideC];
      return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2);
    }
  }


  class LineSegment {
    constructor(x1, y1, x2, y2){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
    length(){
      pythag = Math.sqrt(Math.pow((this.x2-this.x1), 2) + Math.pow((this.y2-this.y1)));
      return pythag;
    }
  }

  const rectangle1 = new Rectangle(5, 10);
  const rectangle2 = new Rectangle(13, 13);
  const triangle1 = new Triangle(4, 4, 24);
  const triangle2 = new Triangle(3, 4, 5);

  // NOTE: DO NOT REMOVE OR ALTER
  module.exports = {
    Rectangle: Rectangle,
    Triangle: Triangle,
    LineSegment: LineSegment
  }
