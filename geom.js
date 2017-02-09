class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length = this.length, width = this.width){
    return length == width;
  }
  area(length = this.length, width = this.width){
    return length*width;
  }
  perimeter(length = this.length, width = this.width){
    return (2*(length+width));
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    if(this.isValid(sideA, sideB, sideC)) {
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    } else {
      throw new Error('Invalid triangle sides');
    }
  }
  isEquilateral(sideA = this.sideA, sideB = this.sideB, sideC = this.sideC) {
    return sideA == sideB && sideC
  }
  isIsosceles(sideA = this.sideA, sideB = this.sideB, sideC = this.sideC) {
    return sideA == sideB || sideB == sideC || sideC == sideB;
  }
  area(sideA = this.sideA, sideB = this.sideB, sideC = this.sideC) {
    let s = (sideA+sideB+sideC)/2
    return Math.pow(s*(s-sideA)*(s-sideB)*(s-sideC),.5)
  }
  isObtuse(sideA = this.sideA, sideB = this.sideB, sideC = this.sideC) {
    let sides = [parseInt(sideA),parseInt(sideB),parseInt(sideC)].sort((a, b)=> a-b);
    return (Math.pow(sides[0],2) + Math.pow(sides[1],2) < Math.pow(sides[2],2));
  }
  isValid(sideA = this.sideA, sideB = this.sideB, sideC = this.sideC) {
    let sides = [parseInt(sideA),parseInt(sideB),parseInt(sideC)].sort((a, b)=> a-b);
    console.log(sides)
    return (sides[2] < sides[0] + sides[1]);
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(x1=this.x1, y1=this.y1, x2=this.x2, y2=this.y2){
    return Math.pow((Math.pow((x1 - x2),2)+Math.pow((y1 - y2),2)),.5)
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
