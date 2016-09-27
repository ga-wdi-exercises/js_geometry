class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare () {
    return this.length === this.width;
  }
  calcArea () {
    return this.width * this.length;
  }
  calcPerimeter () {
    return ((this.length + this.width) + (this.length + this.width) *2);
  }
}
const square = new Rectangle (4, 4)
console.log(square.isSquare());

const area = new Rectangle (5, 9)
console.log(area.calcArea());

const perimeter = new Rectangle (6, 7)
console.log(perimeter.calcPerimeter());


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral () {
  return this.sideA === this.sideB === this.sideC;
  }
  isIsoceles () {
    return this.sideA === this.sideB || this.sideC === this.sideA || this.sideC === this.sideB;
  }
  getArea () {
      return (((this.sideB /this.sideA) * 2) * (this.sideB))/2
  }

  isObtuse () {
    return this.sideA ** 2 + this.sideB ** 2 < this.sideC ** 2
  }
}

const equilateral = new Triangle (3, 4, 7)
console.log(equilateral.isEquilateral())

const isoceles = new Triangle (5, 5, 9)
console.log(isoceles.isIsoceles());

const areaT = new Triangle(4,5, 3)
console.log(areaT.getArea())

const obtuse = new Triangle (2, 1, 10)
console.log(obtuse.isObtuse())

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  calcLength () {
    return Math.sqrt(((this.x2-this.x1)**2)+((this.y2-this.y1)**2));
  }
}

const length = new LineSegment (2, 1, 6, 4)
console.log(length.calcLength())


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
