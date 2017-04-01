// RECTANGLE CLASS
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length === this.width) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  area(){
    return this.length * this.width;
  }
  perimeter(){
    return (this.length * 2) + (this.width * 2);
  }
}
// RECTANGLES
console.log('----RECTANGLES----')
var square = new Rectangle(10,10);
console.log(`Is it a square?: ${square.isSquare()}`);
console.log(`Area: ${square.area()}`);
console.log(`Perimeter: ${square.perimeter()}`);

var rectangle = new Rectangle(50,15);
console.log(`Is it a square?: ${rectangle.isSquare()}`);
console.log(`Area: ${rectangle.area()}`);
console.log(`Perimeter: ${rectangle.perimeter()}`);

var spongebob = new Rectangle(12,10);
console.log(`Is Spongebob a square? ${spongebob.isSquare()}`);
console.log(`Area: ${spongebob.area()}`);
console.log(`Perimeter: ${spongebob.perimeter()}`);

// TRIANGLE CLASS
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  isIsosceles(){
    if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  area(){
  // find the perimeter
    var p = (this.sideA + this.sideB + this.sideC)/2;
  // use the perimeter to find the area
    return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
  }
  isObtuse() {
    if ((this.sideA * this.sideA) + (this.sideB * this.sideB) < (this.sideC * this.sideC)){
      return 'Yes';
    } else {
      return 'No';
    }
  }
}

//TRIANGLES
console.log('----TRIANGLES----')
var equilateral = new Triangle(40,40,40);
console.log(`Is this an equilateral triangle?: ${equilateral.isEquilateral()}`);
console.log(`Is this an isosceles triangle?: ${equilateral.isIsosceles()}`);
console.log(`Area: ${equilateral.area()}`);
console.log(`Obtuse?: ${equilateral.isObtuse()}`);

var obtuse = new Triangle(40,76,86);
console.log(`Is this an equilateral triangle?: ${obtuse.isEquilateral()}`);
console.log(`Is this an isosceles triangle?: ${obtuse.isIsosceles()}`);
console.log(`Area: ${obtuse.area()}`);
console.log(`Obtuse?: ${obtuse.isObtuse()}`);

// LINE SEGMENT CLASS
class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  lengthOf(){
    var pointA = this.x1 - this.y1;
    var pointB = this.y1 - this.y2;
    // Pythagorean theorem
    return (pointA * pointA) + (pointB * pointB);
  }
}

//LINE SEGMENTS
console.log('----LINE SEGMENT----')
var lineOne = new LineSegment(10,35,6,21);
console.log(`Length of the distance between two points: ${lineOne.lengthOf()}`);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
