class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare(){
    return this.length === this.width
  }

  area(){
  return  this.length * this.width
  }

  perimeter(){
    return (this.length + this.width) * 2
  }
}

const rectangle = new Rectangle(5, 5);
const rectangleTwo = new Rectangle(16, 4);


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral(){
    return this.sideA === this.sideB  && this.sideB === this.sideC;
  }

  isIsosceles(){
    return this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC
  }

  area(height, base){
    return (height * base) / 2
  }

  isObtuse(){
    return this.sideA > this.sideB && this.sideA > this.sideB
  }

}

const triangle = new Triangle(3, 3, 3)
const triangleTwo = new Triangle(6, 10, 2)
const triangleThree = new Triangle(14, 7, 7)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length(){
    var x = this.x2 - this.x1
    var y = this.y2 - this.y1
    return Math.sqrt((x ** 2) + (y ** 2))
  }
}

const line = new LineSegment(4, 4, 8, 8)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
