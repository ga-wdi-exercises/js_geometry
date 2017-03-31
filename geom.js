// RECTANGLE CLASS
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length, width){
    if (length === width) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
  area(length, width){
    return length * width;
  }
  perimeter(length, width){
    return (length * 2) + (width * 2);
  }
}

// TRIANGLE CLASS
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(sideA, sideB, sideC){
    if (sideA === sideB && sideB === sideC) {
      console.log('equilateral triangle')
    }
  }
  isIsosceles(sideA, sideB, sideC){
    if (sideA === sideB || sideB === sideC || sideA === sideC) {
      console.log('isosceles triangle')
    }
  }
  area(sideA, sideB, sideC){
  // find the perimeter
    var p = (sideA + sideB + sideC)/2;
  // use the perimeter to find the area
    return Math.sqrt(p*(p - side1) * (p - side2)*(p - side3));
  }
  obtuse(sideA, sideB, sideC) {
    // Pythagorean theorem
    var aSquared = Math.pow(sideA,2);
    var bSquared = Math.pow(sideB,2);
    var cSquared = Math.pow(sideC,2);
    if ((aSquared + bSquared) < cSquared){
      console.log('obtuse triangle');
    } else if((aSquared + bSquared) > cSquared) {
      console.log('acute triangle');
    } else {
      console.log('right triangle');
    }
  }
}

// LINE SEGMENT CLASS
class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    var pointA = x1 - y1;
    var pointB = y1 - y2;
    // Pythagorean theorem
    var aSquared = Math.pow(pointA,2);
    var bSquared = Math.pow(pointB,2);
    return Math.pow(pointA * pointB);
  }
}

// RECTANGLES
let square = new Rectangle();
console.log('Is it a square?: ' + square.isSquare());
console.log('Area: ' + square.area());
console.log('Perimeter: ' + square.perimeter());

//TRIANGLES

//LINE SEGMENTS

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
