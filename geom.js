class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return this.length == this.width;
  }
  area(){
    return this.length*this.width;
  }
  perimeter(){
    return (2*(this.length+this.width));
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return this.sideA == this.sideB && this.sideC
  }
  isIsosceles() {
    return this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideB;
  }
  area() {
    let s = (this.sideA+this.sideB+this.sideC)/2
    return Math.pow(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC),.5)
  }
  isObtuse() {
    let sides = [parseInt(this.sideA),parseInt(this.sideB),parseInt(this.sideC)].sort((a, b)=> a-b);
    return (Math.pow(sides[0],2) + Math.pow(sides[1],2) < Math.pow(sides[2],2))
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
    return Math.pow((Math.pow((this.x1 - this.x2),2)+Math.pow((this.y1 - this.y2),2)),.5)
  }
}

const rectange = new Rectangle(5,6)
const lineSeg = new LineSegment(0,0,2,2)
const obtuse = new Triangle(10,5,6)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
