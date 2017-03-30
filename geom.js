class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return (this.length == this.width);
  }
  area(){
    return (this.length * this.width);
  }
  perimeter(){
    return (2*this.length + 2*this.width);
  }
}


class Triangle{
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return((this.sideA == this.sideB) && (this.sideA == this.sideC));
  }
  //I'm considering an isosceles triangle as one having at least two even sides
  isIsosceles(){
    return((this.sideA == this.sideB)|| (this.sideA == this.sideC) || (this.sideB == this.sideC));
  }
  area() {
    var s = ((this.sideA + this.sideB + this.sideC) / 2);
    return(Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)));
  }
  isObtuse() {
    //this assumes sideA is the longest side.  need to figure out how to determine longest side and adjust accordingly
    return((Math.pow(this.sideA, 2)) > (Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2)));
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
     return (Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2)))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
