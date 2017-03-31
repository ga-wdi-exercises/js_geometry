class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length,width){
    if (length === width) {
      console.log('we have a square');
    } else {
      console.log('rectangle');
    }
  }
  area(length,width){
    return length * width;
  }
  perimeter(length,width){
    return (length * 2) + (width * 2);
  }
}


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
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
