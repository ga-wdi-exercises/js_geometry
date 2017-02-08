class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

area(length, width) {
  return this.length * this.width
 }
isSquare(length, width) {
  return this.length == this.width
 }
 perimeter(length, width) {
   return (2*(this.length + this.width
 }
}
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
 isIsosceles() {
   return(this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideA)
 }
 isEquilateral() {
   return (this.sideA == this.sideB == this.sideC)
 }
 isObtuse() {
   return (Math.pow(this.sideA,2)+(this.sideB,2) > (this.sideC,2)) || (Math.pow(this.sideB,2)+(this.sideC,2) > (this.sideA,2)) || (Math.pow(this.sideC,2)+(this.sideA,2) > (this.sideB,2))

 area() {
   return (this.sideA * this.sideB / this.sideC) || (this.sideB * this.sideC / this.sideA) || (this.sideC * this.sideA / this.sideB)
 }
  }
}
let rectangle1 = new Rectangle(4,4)
let rectangle2 = new Rectanngle (10,15)
let rectanlge3 = new Rectangle (5,9)

let Triangle1 = new Triangle (10,10,10)
let Traingle2 = new Triangle (5,5,5,)
let Traingle3 = new Traingle (4,5,6)
let Traingle4 = new Triangle (8,6,9)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length()
  return (Math.pow((this.x1-this.x2),2) +  (Math.pow((this.y1-this.y2), 2)))
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
