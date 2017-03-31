class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare(){
    
    return this.length === this.width;
  }

  area(){
    
    return this.length * this.width;
  }

  perimeter(){
    return 2 * (this.length + this.width);
  }

}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral() {
    return this.sideA === this.sideB && this.sideB === this.sideC;
  }

  isIsosceles() {
       return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;

  }

  area() {
    var p =  (this.sideA + this.sideb + this.sideC) / 2;
    area = Math.sqrt (p (p - this.sideA)*(p - this.sideB)*(p - this.sideC));

  }

  isObtuse () {
    if (this.sideA > this.sideB && this.sideA > this.sideC) {
      Math.pow(this.sideA) 
    }
  }

}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    
  length() {
     return Math.sqrt((this.x2 - this.x1) * (this.x2 - this.x1) + (this.y2 - this.y1) * (this.y2 - this.y1));
  }
 }  
}

let rc = new Rectangle (5,7);
console.log(rc);
let tr = new Triangle (6,6,6);
console.log(tr);


// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
