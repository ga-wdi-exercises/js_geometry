class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length == this.width) {
      return true
    } else {
      return false
    }
  }
  area() {
    return this.length * this.width
  }
  perimeter(){
    return (this.length * 2) + (this.width * 2)
  }
}

var recA = new Rectangle(3,5)
var recB = new Rectangle(3,3)
var recC = new Rectangle(7,5)


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA == this.sideB && this.sideA == this.sideC) {
      return true
    } else {
      return false
    }
  }
  isIsosceles(){
    if(this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      return true
    } else {
      return false
    }
  }
  area(){
    let s = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(s * (s - this.sideA)*(s - this.sideB)*(s - this.sideC));
  }
  isObtuse(){
    let c = [this.sideA,this.sideB,this.sideC].sort();
    if (Math.pow(c[0], 2) + Math.pow(c[1],2) < Math.pow(c[2],2)) {
      return true
    } else {
      return false
    }

  }
}

var triA = new Triangle(5,6,7)
var triB = new Triangle(5,5,5)
var triC = new Triangle(7,3,5)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
