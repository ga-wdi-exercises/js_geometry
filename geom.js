class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  square () {
    if (this.length == this.width) {
      console.log ("This is a sqaure.");
      return true;
    }
    else {
      return ("this is not a square");
    }
  }

  area () {
    let area = this.length * this.width
    console.log ("The area of the rectangle is ${area}.");
    return area;
  }

  perimeter () {
    let perimeter = (2*this.length) + (2*this.width)
    console.log ("The perimeter of the rectangle is ${perimeter}");
    return perimeter;
  }
}
const t1 = new Rectangle (30,25);
const t2 = new Rectangle (7,9);
const t3 = new Rectangle (4,4);



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral () {
  return this.sideA == this.sideB && this.sideB == this.sideC;
  }

  isIsoceles () {
    return this.sideA == this.sideB || this.sideC == this.sideA || this.sideC == this.sideB;
  }

  getArea () {
      return (((this.sideB /this.sideA) * 2) * (this.sideB))/2;
      console.log("this is the area for the triangle!")
  }

}


const equilateral = new Triangle (3, 3, 3)
console.log(equilateral.isEquilateral())

const isoceles = new Triangle (10, 10, 12)
console.log(isoceles.isIsoceles());

const areaT = new Triangle(2,8, 5)
console.log(areaT.getArea())

const obtuse = new Triangle (5, 3, 13)
console.log(obtuse.isObtuse())







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
