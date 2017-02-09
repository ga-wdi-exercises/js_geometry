class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if(this.length ==this.width){
    return "true"
  }
    else {
    return "false"
    }
  }
  area(){
    var areaOfRect = this.length*this.width
    return areaOfRect
  }
  perimeter(){
    var perimeterOfRect = (this.length*2)+(this.width*2)
    return perimeterOfRect
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA==this.sideB && this.sideA==this.sideC){
      return "true"
    }
    else {
      return "false"
    }
  }
  isIsosceles(){
    if(this.sideA==this.sideB || this.sideC==this.sideB){
      return "true"
    }
    else {
      return "false"
    }
  }
  isObtuse(){
    if(this.sideA === this.sideB && this.sideA === this.sideC){
      return "false"
     }
    else if(this.sideA == this.sideB || this.sideB == this.sideC){
      return "false"
     }
    else {
      return "true"
     }
   }
   triangleSemiPerimeter(){
   var s = (this.sideA+this.sideB+this.sideC)/2
   return s
   }
   triangleArea(){
     var triangleArea = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
     return triangleArea
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
