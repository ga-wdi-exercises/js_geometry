class Rectangle {
  constructor(length, width) {
    this.length = +length;
    this.width = +width;
  }

  isSquare (){
  this.IsSquare = (this.height==this.width);
  return this.IsSquare}

  area() {
  this.area = (this.length*this.width);
  return this.area;
  }

  perimeter() {
  this.perimeter = (this.length*2) +(this.width*2);
  return this.perimeter;
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = +sideA;
    this.sideB = +sideB;
    this.sideC = +sideC;
  }

  isEquilateral() {
  this.isEquilateral = (this.sideA==this.sideB==this.sideC)
  return this.isEquilateral;
  }

  isIsosceles() {
  this.isIsosceles = (this.sideA==this.sideB || this.sideB==this.sideC || this.sideC==this.sideA)
  return this.isIsosceles;
  }

  isObtuse() {
  this.isObtuse = ((this.sideA*this.sideA)*(this.sideB*this.sideB)>(this.sideC*this.sideC))
  return this.isObtuse;
  }

  area() {
  var s = (((this.sideA+this.sideB+this.sideC)/2))
  this.area = Math.sqrt((s-this.sideA)*(s-this.sideB)*(s-this.sideC)*s)
  return this.area;
  }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = +x1;
    this.y1 = +y1;
    this.x2 = +x2;
    this.y2 = +y2;
  }
  length() {
    this.run = Math.abs(this.x1)+Math.abs(this.x2)
    this.rise = Math.abs(this.y1)+Math.abs(this.y1)
    this.length = Math.sqrt((this.rise*this.rise)+(this.run*this.run))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
