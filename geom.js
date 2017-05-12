class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  };

  isSquare() {
    if (this.length === this.width) {
      return true;
    } else {
      return false;
    }
  };

  area () {
    this.length * this.width;
  }
  perimeter() {
    2 * (this.length + this.width);
  }
};

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    if (this.sideA === this.sideB === this.sideC) {
      return true;
    } else {
      return false;
    }
  }
  isIsosceles() {
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
      return true;
    } else {
      return false;
    }
  }
  area () {
    var perimeter = (this.sideA + this.sideB + this.side3)/2;
    var areaOfTriangle = Math.sqrt(perimeter*((perimeter-this.sideA)*(perimeter-this.sideB)*(perimeter-this.sideC)));
  }

  isObtuse() {
    var firstSide = this.sideA**2
    var secondSide = this.sideB**2
    var thirdSide = this.sideC**2
    if ((firstSide > (secondSide + thirdSide)) || (secondSide > (firstSide + thirdSide)) || (thirdSide > (firstSide + secondSide))){
      return true;
    } else {
      return false;
    }
  };

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
length() {
  (Math.sqrt((this.y2 - this.y1)**2 + (this.x2 - this.x1)**2));
}
};


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
