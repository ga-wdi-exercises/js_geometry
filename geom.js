class Rectangle { //class
  constructor(length, width){ //constructor function is run when you call new
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if(this.length === this.width){
      return true;
    }
    else{
      return false;
    }
  }
  area(){
    return (this.length * this.width);
  }
  perimeter(){
    return((this.length * 2) + (this.width * 2))
  }
}

const squ = new Rectangle(5, 5); //instance
const rec = new Rectangle (7, 3);
const per = new Rectangle (6, 10);

console.log(squ.isSquare());
console.log(rec.area());
console.log(per.perimeter());



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return this.sideA === this.sideB && this.sideB === this.sideC
  }

  isIsosceles(){
    return (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC)
  }
  area(){
    return (((this.sideB / this.sideA) * 2) * this.sideB) / 2
  }
  isObtuse(){
    return (((this.sideA ** 2) + this.sideB ** 2) < (this.sideC ** 2))
  }
}

const equ = new Triangle(5, 5, 5)
const iso = new Triangle(6, 6, 10)
const are = new Triangle(4, 5, 3)
const obt = new Triangle(2, 2, 15)

console.log(equ.isEquilateral());
console.log(iso.isIsosceles());
console.log(are.area());
console.log(obt.isObtuse());

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return Math.sqrt(((this.x2 - this.x1) ** 2) + (this.y2 - this.y1) ** 2)
  }
}

const len = new LineSegment (6, 3, 8, 4)

console.log(len.length());

//
// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
