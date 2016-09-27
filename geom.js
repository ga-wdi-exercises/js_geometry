class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length == this.width){
      return true
    } else {
      return false
    }
  }
  area(){
    return this.length * this.width
  }
  perimeter(){
    return (this.length*2)+(this.width*2)
  }
}

const square1 = new Rectangle(10,12)

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
    }
  isEquilateral(){
    if((this.sideA == this.sideB) && (this.sideB == this.sideC)){
      return true
    } else {
      return false
    }
    }
  isIsosceles(){
    if((this.sideA == this.sideB) && (this.sideB != this.sideC)){
      return true
    }
    else if ((this.sideB == this.sideC) && (this.sideA != this.sideC)){
      return true
    }
    else{
      return false
    }
  }
  area(){
    let s = (this.sideA + this.sideB + this.sideC)/2
    let a = Math.sqrt(s * (s-this.sideA) * (s-this.sideB) * (s-this.sideC))
//this doesn't work if a side's length is equal to s
    console.log(a);
  }
  // isObtuse(){
  //
  // }
}
const one = new Triangle(2,2,2)
const two = new Triangle(2,6,6)
const three = new Triangle(2,6,8)

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    if ((this.x1 > 0) && (this.x2 > 0)){
      var side1 = Math.abs(Math.abs(this.x1) - Math.abs(this.x2))
    } else if ((this.x1 < 0) && (this.x2 < 0)){
      var side1 = Math.abs(Math.abs(this.x1) - Math.abs(this.x2))
    }  else{
      var side1 = Math.abs(this.x1) + Math.abs(this.x2)
      }
    if ((this.y1 > 0) && (this.y2 > 0)){
      var side2 = Math.abs(Math.abs(this.y1) - Math.abs(this.y2))
    } else if ((this.y1 < 0) && (this.y2 < 0)){
      var side2 = Math.abs(Math.abs(this.y1) - Math.abs(this.y2))
    }  else{
      var side2 = Math.abs(this.y1) + Math.abs(this.y2)
      }
    let c = Math.sqrt((side1**2)+(side2**2))
    return c
  }
}

const z = new LineSegment(1,1,2,2)
const q = new LineSegment(-1,-1,-2,-2)
//
// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
