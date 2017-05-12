class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare(){
    if (this.length == this.width) {
      return true
    }else {
      return false
    }
  }

  area(){
    return this.length * this.width
  }

  perimeter(){
    return (this.length * 2) + (this.width * 2)
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral(){
    if (this.sideA == this.sideB && this.sideA == this.sideC) {
      return true
    }else {
      return false
    }
  }

  isIsosceles(){
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC) {
      return true
    }else{
      return false
    }
  }

  isObtuse(){
    if ((Math.pow(this.sideA,2) + Math.pow(this.sideB,2)) < Math.pow(this.sideC,2) || (Math.pow(this.sideA,2) + Math.pow(this.sideC,2)) < Math.pow(this.sideB,2) || (Math.pow(this.sideB,2) + Math.pow(this.sideC,2)) < Math.pow(this.sideA,2)) {
      return true
    }else {
      return false
    }
  }

  area(){
    return .25 * (Math.sqrt((Math.pow((Math.pow(this.sideA,2) + Math.pow(this.sideB,2) + Math.pow(this.sideC,2)),2)) - (2 *(Math.pow(this.sideA,4) + Math.pow(this.sideB,4) + Math.pow(this.sideC,4)))))
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
    return Math.sqrt(Math.pow(this.x1 - this.x2,2) + Math.pow(this.y1 - this.y2,2))
  }
}

var line = new LineSegment(0,0,5,0)
var triangle = new Triangle(3,4,5)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
