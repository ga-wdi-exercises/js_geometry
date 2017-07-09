class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
      if (this.length === this.width) {
        return true
      }
    }
    area() {
      return this.length * this.width
    }
    perimeter() {
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
    if (this.sideA === this.sideB === this.sideC){
      return true
    }
  }
  isIsosceles(){
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return true
    }
  }
  area(){
    var s = (this.sideA + this.sideB + this.sideC)/2
    var area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC))
    return area
  }

  isObtuse(){
  if (this.sideA !== this.sideB && this.sideA !== C && this.sideB !== this.sideC) {
    return true
  }
}
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(x1, y1, x2, y2){
    Math.sqrt((Math.square(x1 - x2)) + ((Math.square(y1 - y2))))
  }
}



// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
