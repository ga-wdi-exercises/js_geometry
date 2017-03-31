class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length === this.width){
      return true;
    }
  }
  area(){
    return this.width * this.length
  }
  perimiter(){
    return (this.length * 2) + (this.width * 2)
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA === this.sideB === this.sideC){
      return true
    }
  }
  isIsoceles(){
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB ===this.sideC){
      return true
    }
  }
  area(){
    let b = (this.sideA + this.sideB + this.sideC) / 2;
    let a = Math.sqrt(b * (b - this.sideA) * (b - this.sideB) * (b - this.sideC));
    return a;
  }
  isObtuse(){
    if (this.sideA !== this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC){
      return true;
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
  length(){
  return Math.sqrt((this.x2 - this.x1) * (this.x2 - this.x1) + (this.y2 - this.y1) * (this.y2 - this.y1));
}
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
