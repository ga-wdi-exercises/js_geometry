class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    }
  isSquare(){
    if(this.length == this.width){
    return "true";
      }
    else{
      return "false";
      }
    }
  area(){
    var areaOfRectangle = this.length * this.width
    return areaOfRectangle;
  }
  perimeter(){
    var perimeterOfRectangle = (this.length * 2) + (this.width * 2)
    return perimeterOfRectangle;
  }
}

const square1 = new Rectangle(5,5);
const square2 = new Rectangle(3,7);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(sideA === sideB && sideA === sideC){
    return "true";
  }
  }
  isIsosceles(){
    if(this.sideA == this.sideB || this.sideB == this.sideC){
      return "true";
    }
  }
  isObtuse(){
    if(sideA === sideB && sideA === sideC){
      return "false";
    }
    else if(this.sideA == this.sideB || this.sideB == this.sideC){
      return "false";
    }
    else{
      return "true";
    }
  }
}

cons triangle1 = new Triangle(3,2,4)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    var calculateLength = ((y2 - y1) * (y2 - y1)) + ((x2 - x1) * (x2 - x1)) * 2;
    return calculateLength;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
