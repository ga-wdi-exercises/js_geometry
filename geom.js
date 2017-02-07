class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}

let newRectancle1 = new Rectangle(4,4)
let newRectangle2 = new Rectangle(2,2)



isSquare
if (this.length === this.width){
  return true;
}else{
  return false;
}

area(){
  return this.area = this.length * this.width;
}

perimiter(){
  return this.perimeter = 2 *(this.length + this.width)
}



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
}

let triangle1 = new Trianlge (1, 1, 3)
let triangle2 = new Triangle (2, 2, 2)
let trianlge3 = new Triangle (5, 6, 7)

isEquilateral(){
  return this.sideA === this.sideB && this.sideb === this.sideC;
}

isIsosceles(){
  return this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC;
}

isObtuse(){
  var side = [this.sideA, this.sideB, this.sideC]
  return Math.pow(side[0], 2) + Math.pow(side[1], 2) < Math.pow(side[2], 2);
}

area(){
    var perimeter = (this.sideA + this.sideB + this.sideC) /2;
    var area = Math.sqrt(perimeter*(perimeter-this.sideA)*(perimeter-this.sideB)*(perimeter-this.sideC));
      return area;
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
