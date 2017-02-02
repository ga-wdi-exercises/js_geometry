class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length === this.width){
      alert("The rectangle is a square.");
        return true;
    }
    else {
      return false;
    }

  }
  area(){
    let area = this.length * this.width
    return "The area of rectangle is ${area}.";
  }
  perimeter(){
    let perimeter = (this.length * 2)+(this.width * 2)
    return "The perimeter of rectangle is ${perimeter}";
  }
}

const square = new Rectangle(8,8);
const rectangleArea = new Rectangle(4,8);
const rectanglePerimeter = new Rectangle(4,8);



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA === this.sideB && this.sideB === this.sideC){
      return true;
    } else{
      return false;
    }
  }
  isIsosceles(){
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
      return true;
    } else{
      return false;
    }
  }
  area(){
    let side1 = sideA;
    let side2 = sideB;
    let side3 = sideC;
    let perimeter = (side1 + side2 + side3)/2;
    let area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
       return "The area of the triangle is ${area}";
  }
  isObtuse(){
    let aSide = this.sideA;
    let bSide = this.sideB;
    let cSide = this.sideC;
    let allSide = Math.max(aSide,bSide,cSide);

    if ((allSide ** 2 > (aSide ** 2) + (bSide ** 2))) {
      return true;
    }
    else {
      return false;
    }
}
const equilateral = new Triangle (8,8,8);
const isosceles = new Triangle (8,11,14);
const areaOfTriangle = new Triangle (6,7,8);
const obtuse = new Triangle (8,9,10);


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return Math.sqrt((this.x1 - this.x2)**2 + (this.y1 - this.y2)**2)

  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
