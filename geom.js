class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
    isSquare() {
      if (this.length === this.width) {
        return true;
      }
      else {
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
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
    isEquilateral() {
        if(this.sideA === this.sideB && this.sideA === this.sideC) {
          return true;
        }
        else {
            return false;
          }
    isIsosceles() {
      if(this.sideA === this.sibeB || this.sideA === this.sideC || this.sideB === this.sideC){
        return true;
      }
      else {
        return false;
      }
    }
    area() {
      return this.sideA * this.sideB * this.sideC;
    }
    isObtuse() {
      if(this.sideA !== this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC){
        return true;
      }
      else {
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
      return Math.sqrt((Math.pow(Math.abs(this.x1-this.y1),2)) + (Math.pow(Math.abs(this.x2-this.y2),2)));
    }
}



// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
