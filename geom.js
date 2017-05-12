class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  square() {
    if(this.length = this.width) {
      return true
    }else{
      return false
    }
}
  area() {
    return this.length * this.width;
  }

  perimeter(){
    return (this.length + this.width) * 2;
  }
}
const shape1 = new Rectangle(4, 4);
const shape2 = new Rectangle(3, 2);


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
}
    isEquilateral(){
      if(this.sideA === this.sideB === this.sideC){
        return true
      }else{
        return false
      }
}
    isIsosceles(){
        if(this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC){
          return true
        }else{
          return false
}

    area()
      perimeter ((this.sideA + this.sideB + this.sideC) / 2)
      return Math.sqrt(perimeter (perimeter - this.sideA)(perimeter - this.sideB)(perimeter - this.sideC))
}

    isObtuse(){
      if ((this.sideA ** this.sideA + this.sideB ** this.sideB) <= (this.sideC ** this.sideC)) {
      return true
    }else{
      return false
    }

const shape3 = new Rectangle(4, 4, 4);
const shape4 = new Triangle(3,4,4);


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
      }



    }
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
