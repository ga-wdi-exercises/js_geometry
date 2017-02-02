class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    return this.length === this.width;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return (this.length + this.width) * 2;
  }
}

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    if (!(sideA < sideB + sideC && sideA > Math.abs(sideB - sideC)) || !(sideB < sideA + sideC && sideB > Math.abs(sideA - sideC)) || !(sideC < sideB + sideA && sideC > Math.abs(sideB - sideA))) {
      throw `Error: the dimensions (${sideA},${sideB},${sideC}) of this triangle are impossible!`;
    }
  }
  isEquilateral() {
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }
  isIsosceles() {
    return this.sideA === this.sideB || this.sideB === this.sideC;
  }
  area() {
    let { sideA: a, sideB: b, sideC: c} = this;
    let s = (a + b + c) /  2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
  isObtuse() {
    let { sideA: a, sideB: b, sideC: c} = this;
    return (Math.pow(a,2) / 2 < Math.pow(c,2) + Math.pow(b,2) && Math.pow(c,2) + Math.pow(b,2) < Math.pow(a,2)) ||
      (Math.pow(b,2) / 2 < Math.pow(a,2) + Math.pow(c,2) && Math.pow(a,2) + Math.pow(c,2) < Math.pow(b,2)) ||
      (Math.pow(c,2) / 2 < Math.pow(a,2) + Math.pow(b,2) && Math.pow(a,2) + Math.pow(b,2) < Math.pow(c,2))
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
    let x = Math.abs(this.x1 - this.x2);
    let y = Math.abs(this.y1 - this.y2);
    return Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
  }
}

function rInt(max = 100) {
  return Math.floor(Math.random() * max) + 1;
}

var rectangles = [new Rectangle(rInt(),rInt()),new Rectangle(rInt(),rInt()),new Rectangle(rInt(),rInt()),new Rectangle(10,10)];
var lines = [new LineSegment(rInt(),rInt(),rInt(),rInt()),new LineSegment(rInt(),rInt(),rInt(),rInt()),new LineSegment(rInt(),rInt(),rInt(),rInt()),new LineSegment(rInt(),rInt(),rInt(),rInt())];
var triangles = [new Triangle(5,5,5),new Triangle(100,100,rInt())];
var obtuseTriangles = [new Triangle(10,10,18),new Triangle(10,18,10),new Triangle(18,10,10)]
triangles.push(new Triangle(rInt(),rInt(),rInt()));
triangles.push(new Triangle(rInt(),rInt(),rInt()));
triangles.push(new Triangle(rInt(),rInt(),rInt()));
triangles.push(new Triangle(rInt(),rInt(),rInt()));



// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
