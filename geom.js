// RECTANGLE CLASS
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length, width){
    if (this.length === this.width) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  area(length, width){
    return this.length * this.width;
  }
  perimeter(length, width){
    return (this.length * 2) + (this.width * 2);
  }
}
// RECTANGLES
console.log('----RECTANGLES----')
var square = new Rectangle(10,10);
console.log(`Is it a square?: ${square.isSquare()}`);
console.log(`Area: ${square.isSquare()}`);
console.log(`Perimeter: ${square.perimeter()}`);

var rectangle = new Rectangle(50,15);
console.log(`Is it a square?: ${rectangle.isSquare()}`);
console.log(`Area: ${rectangle.isSquare()}`);
console.log(`Perimeter: ${rectangle.perimeter()}`);

var spongebob = new Rectangle(12,10);
console.log(`Is Spongebob a square? ${rectangle.isSquare()}`);
console.log(`Area: ${rectangle.area()}`);
console.log(`Perimeter: ${rectangle.perimeter()}`);

// TRIANGLE CLASS
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = this.sideA;
    this.sideB = this.sideB;
    this.sideC = this.sideC;
  }
  isEquilateral(sideA, sideB, sideC){
    if (this.sideA === this.sideB && this.sideB === this.sideC) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  isIsosceles(sideA, sideB, sideC){
    if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  area(sideA, sideB, sideC){
  // find the perimeter
    var p = (this.sideA + this.sideB + this.sideC)/2;
  // use the perimeter to find the area
    return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
  }
  obtuse(sideA, sideB, sideC) {
    // Pythagorean theorem
    var aSquared = Math.pow(this.sideA,2);
    var bSquared = Math.pow(this.sideB,2);
    var cSquared = Math.pow(this.sideC,2);
    if ((aSquared + bSquared) < cSquared){
      return 'Yes';
    } else if((aSquared + bSquared) > cSquared) {
      return 'No';
    }
  }
}

//TRIANGLES
console.log('----TRIANGLES----')
var equilateral = new Triangle(10,10,10);
console.log(`Is this an equilateral triangle?: ${equilateral.isEquilateral()}`);
console.log(`Is this an isosceles triangle?: ${equilateral.isIsosceles()}`);
console.log(`Area: ${equilateral.area()}`);
console.log(`Obtuse?: ${equilateral.obtuse()}`);

var acute = new Triangle(40,12,10);
console.log(`Is this an equilateral triangle?: ${acute.isEquilateral()}`);
console.log(`Is this an isosceles triangle?: ${acute.isIsosceles()}`);
console.log(`Area: ${acute.area()}`);
console.log(`Obtuse?: ${acute.obtuse()}`);

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
    var aSquared = Math.pow(pointA,2);
    var bSquared = Math.pow(pointB,2);
    return Math.pow(pointA * pointB);
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
