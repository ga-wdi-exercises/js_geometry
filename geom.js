//Start Rectangle
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
    isSquare(){
    if (this.length === this.width){
      return "true";
    } else {
      return "false";
    }
  }
    area(){
      return this.area = this.length * this.width;
    }
    perimeter(){
      return this.perimeter = (2*this.length)+(2*this.width);
    }
  }

const square = new Rectangle(2,2);
const rect1 = new Rectangle(3,6);
const rect2 = new Rectangle(7,9);

//Start Triangle
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA === this.sideB && this.sideB === this.sideC){
      return "true";
    } else{
      return "false";
    }
  }
  isIsosceles(){
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
      return "true";
    } else{
      return "false";
    }
  }
  isObtuse(){
    let sideA = this.sideA
    let sideB = this.sideB
    let sideC = this.sideC
    let triangle = [sideA, sideB, sideC].sort(function(a, b) {
      return a - b;});
    let a = triangle[0];
    let b = triangle[1];
    let c = triangle[2];
    console.log(triangle);
    console.log(triangle[0], triangle[1],triangle[2]);
    if (((a**2)+(b**2))< (c**2)){
      return "true";
    } else{
      return "false";
    }
  }
  area(){
        let a = this.sideA;
        let b = this.sideB;
        let c = this.sideC;
        let s = ((a+b+c)/2);
        return Math.sqrt(s*((s-a)*(s-b)*(s-c)));
}
}


const equTri = new Triangle(7,7,7);
const isoTri = new Triangle(3,7,7);
const isoTri2 = new Triangle(7,3,7);
const obtTri = new Triangle(3,12,10);


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return this.length = Math.sqrt(((this.x2-this.x1)**2)+((this.y2-this.y1)**2));
  }
}

const line1 = new LineSegment(1,2,3,4);

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
