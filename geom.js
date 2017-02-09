// RUN IN REPL.IT TO CHECK
class Rectangle{
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  area(){
    return this.length * this.width;
  }

  isSquare(){
    if (this.length == this.width) {
      return "This is a square!"
  } else {
      return "This is just a rectangle; not a square."
    }
  }

  perimeter(){
    return "The perimeter is "(this.length * 2) + (this.width * 2)
  }
}

let rect1 = new Rectangle(5,10)
let rect2 = new Rectangle(10,2)
let rect3 = new Rectangle(3,3)


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral(){
    if (this.sideA == this.sideB) {
      if (this.sideB == this.sideC) {
        return "This is an equilateral triangle!"
      } else {
        return "This is not an equilateral triangle."
      }
    } else {
      return "This is not an equilateral triangle."
    }
  }

  isIsosceles(){
    if (this.sideA == this.sideB) {
      return "This is an isosceles triangle!"
    } else {
      if (this.sideA == this.sideC) {
        return "This is an isosceles triangle!"
      } else {
        if (this.sideB == this.sideC) {
          return "This is an isosceles triangle!"
        } else {
          return "This is not an isosceles triangle."
        }
      }
    }
  }

  area(){
    this.semiperimeter = (this.sideA+this.sideB+this.sideC)/2;
    return Math.sqrt(this.semiperimeter*(this.semiperimeter-this.sideA)*(this.semiperimeter-this.sideB)*(this.semiperimeter-this.sideC))
  }

  /*obtuse(){
    A triangle with one interior angle measuring more than 90° is an obtuse triangle or obtuse-angled triangle. If c is the length of the longest side, then a2 + b2 < c2, where a and b are the lengths of the other sides.

  LAB: Sorry...ain't happening at 1 AM!  I'm going to bed.  zzzZZZZZzzzz
  }*/

}

let tri1 = new Triangle(2,3,4)
let tri2 = new Triangle(2,2,2)
let tri3 = new Triangle(10,5,10)




class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
