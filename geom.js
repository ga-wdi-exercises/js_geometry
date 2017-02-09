class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}
isSquare(){
    return this.length === this.width;
  }
  area(){
    return this.length * this.width;
  }
  perimeter(){
    return (this.length * 2) + (this.width * 2)

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
