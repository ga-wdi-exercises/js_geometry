class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSqare() {
    return (this.length == this.width)? true:false
  }
  perimeter() {
    return (this.length*2)+(this.width*2)
  }
  area() {
    return this.length * this.width
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return (this.sideA == this.sideB)&&(this.sideB == this.sideC)&&(this.sideA == this.sideC)? true:false
  }
  isIsosceles() {
    let a = this.sideA
    let b = this.sideB
    let c = this.sideC
    return ((a==b)&&(a!=c))||((a==c)&&(a!=b))||((b==c)&&(b!=a))? true:false
  }
  area() {
    let a = this.sideA
    let b = this.sideB
    let c = this.sideC
    let s = (a+b+c)/2
    return Math.sqrt(s*(s-a)*(s-b)*(s-c))
  }
  isObtuse() {
    let a = this.sideA
    let b = this.sideB
    let c = this.sideC
    return (Math.pow(a,2) + Math.pow(b,2) < Math.pow(c,2))||(Math.pow(a,2) + Math.pow(c,2) < Math.pow(b,2))
    ||(Math.pow(c,2) + Math.pow(b,2) < Math.pow(a,2))? true:false
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
    let x = Math.abs(this.x1-this.x2)
    let y = Math.abs(this.y1-this.y2)
    let z = Math.pow(x,2)+Math.pow(y,2)
    return Math.sqrt(z)
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
