class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() {
    if (this.length === this.width) {
      return true;
      console.log("it is indeed true!");
    } else {
      return false;
      console.log("nope its false!");
    }
  }

  area () {
    return this.length * this.width;
  }
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

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
    return Math.sqrt(perimeter*((perimeter-this.sideA)*(perimeter-this.sideB)*(perimeter-this.sideC)));
  }

  isObtuse() {
    var firstSide = Math.pow(this.sideA, 2);
    var secondSide = Math.pow(this.sideB, 2);
    var thirdSide = Math.pow(this.sideC, 2);
    if ((firstSide > (secondSide + thirdSide)) || (secondSide > (firstSide + thirdSide)) || (thirdSide > (firstSide + secondSide))){
      return true;
    } else {
      return false;
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
length() {
  return (Math.sqrt((Math.pow((this.y2 - this.y1), 2)) + (Math.pow((this.x2 - this.x1), 2))));
}
}


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
