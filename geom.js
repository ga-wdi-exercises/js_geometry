class Rectangle {
  // a lenght and width need to be provided, (a,b)
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare () {
    //length and width have to be equal for it to be a sqaure
    if (this.length === this.width) {
      return true
    } else {
      return false
    }
  }
  area () {
    //the area is found by multiplying the lenght of rectangle by the width of the rectangle
    return this.length * this.width
  }
  perimeter () {
    // the perimeter is (rectangle lenght *2) + (rectangle width *2)
    return this.length * 2 + this.width * 2
  }
}

class Triangle {
  // 3 sides of the triangle need to be defined, (a,b,c)
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  //what type of triangle is it?
  isEquilateral () {
    // all side of the triangle must be equal to one another a===b===c
    if (this.sideA === this.sideB && this.sideA === this.sideC) {
      return true
    } else {
      return false
    }
  }
  isIsosceles () {
    //two of the three sides must equal each other a===b||b===c||c===a
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return true
    } else {
      return false
    }
  }
  obtuse () {
    let sideArray = [this.sideA, this.sideB, this.sideC]
    sideArray.sort(function (a, b) { return a - b })
    //one side (C*C) is greater than (a*a)+(b*b)
    if ((this.sideC * this.sideC) > (this.sideA * this.sideA) + (this.sideB * this.sideB))
    return true
    else {
      return false
    }
  }
  //measure the area and perimeter triangle
  area () {
    let s = (this.sideA + this.sideB + this.sideC) / 2
    //The Math.sqrt() function returns the square root of a number, that is
    let a = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
    return a
  }
  perimeter () {
    //add all the sides to find the perimeter
    return (this.sideA + this.sideB + this.sideC)
  }
}
class LineSegment {
  //Its constructor should take two pairs of coordinates -- `x1` `y1` `x2` `y2` -- as arguments.
  constructor (x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
//LineSegment
  length () {
  const line = new LineSegment(3,4,6,20)
    //calculates the length of the (x1, y1) --> (x2, y2)
    let xdiff = Math.abs(this.x1 - this.x2)
    //The Math.abs() function returns the absolute value of a number
    let ydiff = Math.abs(this.y1 - this.y2)
//The Math.sqrt() function returns the square root of a number
    return Math.sqrt((xdiff * xdiff) + (ydiff * ydiff))
    //|z_{1}-z_{2}|={\sqrt {(x_{1}-x_{2})^{2}+(y_{1}-y_{2})^{2}}},\,
  }
}
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
var obtuse = new Triangle(10, 10, 5)
var equi = new Triangle(7, 7, 7)
var iso = new Triangle(8, 10, 8)
var line = new LineSegment(4, 2, 9, 8)
