class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length == this.width) {
      return true;
    } else {
      return false;
    }
  }
  area(){
    return this.length * this.width;
  }
  perimeter(){
    return (this.length * 2) + (this.width * 2);
  }
}

let square = new Rectangle(10,10)
let smallRectangle = new Rectangle(3,5)
let largeRectangle = new Rectangle(40,30)


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA == this.sideB && this.sideA == this.sideC) {
      return true;
    } else {
      return false;
    }
  }
  isIsosceles(){
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      return true;
    } else {
      return false;
    }
  }
  area(){
    var s = (this.sideA + this.sideB + this.sideC) / 2
    return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
  }
  isObtuse(){
    if (this.sideA > this.sideB && this.sideA > this.sideC) {
      var left = Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2)
      var right = Math.pow(this.sideA, 2)
      if (left < right) {
        return true;
      } else {
        return false;
      }
    } else if (this.sideB > this.sideA && this.sideB > this.sideC) {
      var left = Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2)
      var right = Math.pow(this.sideB, 2)
      if (left < right) {
        return true;
      } else {
        return false;
      }
    } else if (this.sideC > this.sideA && this.sideC > this.sideB) {
      var left = Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2)
      var right = Math.pow(this.sideC, 2)
      if (left < right) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

let equilateral = new Triangle(8,8,8)
let isosceles = new Triangle(10,10,7)
let obtuse = new Triangle(5,14,10)
let acute = new Triangle(5,6,7)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    var dSquared = Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2)
    return Math.sqrt(dSquared)
  }
}

let coordinates = new LineSegment(3,5,9,2)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
