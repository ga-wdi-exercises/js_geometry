function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(length, width) {
  if (length === width) {
    return true;
  } else {
    return false;
  }
}

Rectangle.prototype.area = function(length, width) {
  return length * width;
}

Rectangle.prototype.perimeter = function(length, width) {
  return (length * 2) + (width * 2);
}

var longRectangle = new Rectangle(5, 10);

var square = new Rectangle(5, 5);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    return true;
  } else {
    return false;
  }
}

Triangle.prototype.isIsosceles = function(sideA, sideB, sideC) {
  if (sideA === sideB || sideB === sideC) {
    return true;
  } else {
    return false;
  }
}

Triangle.prototype.area = function(sideA, sideB, sideC) {
  return sideA * sideB * sideC;
}

Triangle.prototype.isObtuse = function(sideA, sideB, sideC) {
  if (((Math.pow(sideA, 2)) + (Math.pow(sideB, 2)) < (Math.pow(sideC, 2))) ||
  ((Math.pow(sideB, 2)) + (Math.pow(sideC, 2)) < (Math.pow(sideA, 2))) ||
  ((Math.pow(sideA, 2)) + (Math.pow(sideC, 2)) < (Math.pow(sideB, 2)))) {
    return true;
  } else {
    return false;
  }
}

var equilateralTriangle = new Triangle(3, 3, 3);

var isoscelesTriangle = new Triangle(3, 3, 4);

var obtuseTriangle = new Triangle(10, 3, 3);

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function() {

}
