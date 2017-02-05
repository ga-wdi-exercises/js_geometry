class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare() {
    if (this.length === this.width) {
      return true;
    }
    return false;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

let recA = new Rectangle(1, 1);
let recB = new Rectangle(2, 5);
let recC = new Rectangle(4, 7);

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  isEquilateral() {
    if (this.a === this.b && this.b === this.c) {
      return true;
    }
    return false;
  }
  isIsosceles() {
    if (this.a === this.b || this.b === this.c || this.c === this.a) {
      return true;
    }
    return false;
  }
  area() {
    let s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c));
  }
  isObtuse() {
    if (this.a**2 + this.b**2 < this.c**2 ||
        this.b**2 + this.c**2 < this.a**2 ||
        this.c**2 + this.a**2 < this.b**2) {
      return true;
    }
    return false;
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
    return sqrt(Math.abs(x2 - x1) + Math.abs(y2 - y1));
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
