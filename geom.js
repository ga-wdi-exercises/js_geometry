class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() { 
    if (this.length === this.width) {
      console.log("Is Square")
    };
  area() {
    console.log(this.length * this.width);
  }

  perimeter() {
    console.log((this.lenth * 2) + (this.width * 2));
  }

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
      console.log(true);
    }
  }

  isIsoscelenes() {
    if (this.sideA === this.SideB) || (this.sideA === this.sideB) || (this.sideB === this.sideC) {
      console.log(true);
    }
  }

  isObtuse() {
    var AngleOne = (((this.sideA * this.sideA) + (this.sideB * this.sideB)) - (this.sideC * this.sideC)/2 * (this.sideA * this.sideB));
    var AngleTwo = (((this.sideB * this.sideB) + (this.sideC * this.sideC)) - (this.sideA * this.sideA)/2 * (this.sideB * this.sideC));
    var AngleThree = (((this.sideC * this.sideC) + (this.sideA * this.sideA)) - (this.sideB * this.sideB)/2 * (this.sideC * this.sideA));

      if (AngleOne || AngleTwo || AngleThree > 90) {
        console.log("Triangle is obtuse");
      };

    }

cos(C) =  a2 + b2 − c22ab

cos(A) =  b2 + c2 − a22bc

cos(B) =  c2 + a2 − b22ca



}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length() {
    console.log(this.x1 + this.y1);
    console.log(this.x2 + this.y2);
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
