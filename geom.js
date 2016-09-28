class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return this.width === this.length
  }
  area(){
    return (this.length) * (this.width);
  }
  perimeter(){
    return (this.length *2) + (this.width * 2);
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return (this.sideA === this.sideB) && (this.sideA === this.sideC)
  }
  isIsosceles(){
    return (this.sideA === this.sideB) || (this.sideB === this.sideC) || (this.sideA == this.sideC)
  }
  area(){
    var a = this.sideA;
    var b = this.sideB;
    var c = this.sideC;
    var s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
  }
  isObtuse(){
    var a = this.sideA;
    var b = this.sideB;
    var c = this.sideC;
    return (Math.pow(a,2) + Math.pow(b,2)) < Math.pow(c,2)
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
    var x = Math.abs(this.x2 - this.x1) * Math.abs(this.x2 - this.x1)
    var y = Math.abs(this.y2 - this.y1) * Math.abs(this.y2 - this.y1)
    return Math.sqrt(x + y);
  }
}

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
