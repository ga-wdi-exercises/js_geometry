class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare() {
    if (this.length === this.width) {
      return true;
    } else {
      return false;
    }
  }

  area() {
     return this.length * this.width;
  }

  perimeter() {
    return (this.length * 2) + (this.width * 2);
  }
}


class Triangle {
  constructor(sideA=1, sideB=1, sideC=1){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return true;
    } else {
      return false;
    }
  }

  isIsosceles() {
    if (this.sideA === this.sideB && this.sideA !== this.sideC || this.sideB === this.sideC && this.sideB !== this.sideA || this.sideA === this.sideC && this.sideA !== this.sideB) {
      return true;
    } else {
      return false;
    }
  }

  area() {
    let halfThePerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    let area = halfThePerimeter * (halfThePerimeter - this.sideA) * (halfThePerimeter - this.sideB) * (halfThePerimeter - this.sideC);
    area = Math.sqrt(area);
    return area;
  }

  isObtuse() {
    if (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideC !== this.sideA) {
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
    let length = Math.sqrt((this.x2 - this.x1)**2 + (this.y2 - this.y1)**2);
    return length;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}