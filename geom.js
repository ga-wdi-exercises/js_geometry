class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare (){
    if (this.length == this.width){
      return true;
    }
  }
  area(){
    return this.length*this.width
  }
  perimeter(){
    return this.length*2 + this.width*2
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA == this.sideB == this.sideC){
      return true;
    }
  }
  isIsosceles(){
    if (this.sideA == this.sideB || this.sideB == this.sideC || this.sideA == this.sideC) {
      return true;
    }
  }
  area(){
    let semiperimeter = (this.sideA+this.sideB+this.sideC)/2
    let area = Math.sqrt(semiperimeter*((semiperimeter-this.sideA)*(semiperimeter-this.sideB)*(semiperimeter-this.sideC)))
    return area
  }
  isObtuse(){
    if (this.sideA == this.sideB == this.sideC){
      return false
    }
    else if(this.sideA == this.sideB || this.sideB == this.sideC || this.sideA == this.sideC){
      return false
    }
    else {
      return true
    }
  }
}


class LineSegment{
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    let distX = (this.x2-this.x1)*(this.x2-this.x1)
    let distY = (this.y2-this.y1)*(this.y2-this.y1)
    return Math.sqrt(distX+distY)
  }
}

let eva = new LineSegment(3,4,7,8)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
