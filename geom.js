class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() {
    if (this.length == this.width){
      return true
    }else{
      return false
    }
  }
  area() {
    return this.length*this.width
  }
  perimeter() {
    return (this.length+this.width)*2
  }

}
let square = new Rectangle(4,2)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA==this.sideB && this.sideA==this.sideC){
    return true
  }else{
    return false
    }
  }
  isIsosceles() {
    if (this.sideA==this.sideB || this.sideA==this.sideC || this.sideB==this.sideC){
      return true
    }else{
      return false
    }
  }
  area() {
    var sP = (this.sideA+this.sideB+this.sideC)/2
    var sA = sP-this.sideA
    var sB = sP-this.sideB
    var sC = sP-this.sideC
    return Math.sqrt(sP*sA*sB*sC)
  }
  isObtuse() {
    if (this.sideA !== this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC){
      return true
    }else{
      return false
    }
  }
}

let triangle = new Triangle(15,16,17)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    console.log(this)
    let sX = this.x1-this.x2
    let sY = this.y1-this.y2
    let sXx = Math.pow(sX,2)
    let sYy = Math.pow(sY,2)
    return Math.sqrt(sXx+sYy)
  }
}

let line = new LineSegment(7, 3, 8, 2)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
