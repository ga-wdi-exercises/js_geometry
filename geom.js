class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
      return true;
    } else return false;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return (2 * this.length) + (2 * this.width);
  }
}
var rectangle1 = new Rectangle(20,5);
var rectangle2 = new Rectangle(12,18);
var rectangle3 = new Rectangle(10,10);



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true;
    } else return false;
  }
  isIsosceles() {
    if (this.sideA === this.sideB && this.sideB !== this.sideC) {
      return true;
    } else if (this.sideB === this.sideC && this.sideC !== this.sideA) {
      return true;
    } else if (this.sideC === this.sideA && this.sideA !== this.sideB) {
      return true;
    } else return false;
    }
    area() {
      var s = (this.sideA+this.sideB+this.sideC)/2;
      return Math.sqrt((s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC)));
    }
    isObtuse() {
      if (this.sideA**2 + this.sideB**2 < this.sideC**2) {
        return true;
      } else if (this.sideB**2 + this.sideC**2 < this.sideA**2) {
        return true;
      } else if (this.sideC**2 + this.sideA**2 < this.sideB**2) {
        return true;
      } else return false;
    }
  }

var triangle1 = new Triangle(10,10,10);
var triangle2 = new Triangle(4,4,7);
var triangle3 = new Triangle(4,15,13);


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
 length() {
  return Math.sqrt((Math.abs((this.x2-this.x1)))**2 + (Math.abs((this.y2-this.y1)))**2)
 }
}

var lineSegment1 = new LineSegment(2,3,3,5);
var lineSegment2 = new LineSegment(2,-3,4,-8);
var lineSegment3 = new LineSegment(-6,-5,2,8);
var lineSegment4 = new LineSegment(-5,6,5,6);



// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
