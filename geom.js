class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  //works
  isSquare() { 
    if (this.length === this.width) {
      console.log("Is Square")
      }
    }
  //works
  area() {
    console.log(this.length * this.width);
  }

  //works
  perimeter() {
    console.log((this.length * 2) + (this.width * 2));
  }

};

const myRectangle = new Rectangle(3, 3);

 class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  //working
  isEquilateral() {
    if (this.sideA === this.sideB === this.sideC) {
      console.log(true);
    } else {
      console.log("not equilateral!!!")
    }
  }

  //working
  isIsosceles() {
    if ((this.sideA === this.SideB) || (this.sideA === this.sideC) || (this.sideB === this.sideC)) {
      console.log(true);
    } else {
      console.log("not isosceles!!!")
    }
  }

  //working
  isObtuse() {
    console.log(AngleOne);
    var AngleOne = ((((this.sideA * this.sideA) + (this.sideB * this.sideB)) - (this.sideC * this.sideC))/2 * (this.sideA * this.sideB));
    var AngleTwo = ((((this.sideB * this.sideB) + (this.sideC * this.sideC)) - (this.sideA * this.sideA))/2 * (this.sideB * this.sideC));
    var AngleThree = ((((this.sideC * this.sideC) + (this.sideA * this.sideA)) - (this.sideB * this.sideB))/2 * (this.sideC * this.sideA));
        console.log(AngleOne);
        console.log(AngleTwo);
        console.log(AngleThree);
      if (AngleOne > 90 || AngleTwo > 90 || AngleThree > 90){
        console.log("Triangle is obtuse");
      } else {
        console.log("is not obtuse!")
      }

    }

}

const myTriangle = new Triangle(12, 16, 18);
const newTriangle = new Triangle(3, 3, 3);


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

const mySegment = new LineSegment (3, 5, 7, 8);


