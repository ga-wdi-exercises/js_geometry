class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {  return this.length === this.width  }
  area() {  return this.length * this.width }
  perimiter() { return this.length*2 + this.width*2 }
}

const rect = new Rectangle(4, 8);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    var a = this.sideA;
    var b = this.sideB;
    var c = this.sideC;
  }
  isEquilateral() { return this.sideA === this.sideB && this.sideA === this.sideC && this.sideC === this.sideA  };    // - returns true if the triangle is equilateral.
  isIsosceles() { return this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA };    // - return true if the triangle is isosceles.
  area() {  // calculates the area of the Triangle.
    let a = this.sideA;
    let b = this.sideB;
    let c = this.sideC;

    let s = (a + b + c)/2;
    return Math.sqrt(s * (s - a)*(s - b)*(s - c));
  };
  isObtuse() { // returns true if the triangle is obtuse.
    let sides = [this.sideA, this.sideB, this.sideC].sort();
    let hypotenuseOfRightTriangle = Math.sqrt(sides[0]**2 + sides[1]**2) // use the two shorter sides to find out the hypotenuse of a right triangle
    if (sides[2] > hypotenuseOfRightTriangle) { // if that hyp. is less than the longer side, then our angle MUST be larger than 90deg, and the triangle MUST be obtuse
      console.log("Obtuse Triangle");
      return true
    } else if (sides[2] == hypotenuseOfRightTriangle) {
      console.log("Right triangle!");
      return false
    } else {
      console.log("Acute");
      return false
    }
  };
}

const eq = new Triangle(2,2,2);
const iso = new Triangle(2,2,1);
const tri = new Triangle(6, 3, 2);



class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length() {  return Math.sqrt((this.x1 - this.x2)**2 + (this.y1 - this.y2)**2)  }
}

const line = new LineSegment(0,0,2,2)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
