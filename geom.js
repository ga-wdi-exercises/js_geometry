var rect1 = new Rectangle(3.5,3.5);
var rect2 = new Rectangle(4,3);
var rect3 = new Rectangle(3,5);

function Rectangle(length, width) {
  this.length = parseFloat(length);
  this.width = parseFloat(width);
}
Rectangle.prototype.isSquare = function() {
  if (this.length === this.width) {
    return true;
  } else {
    return false;
  }
};
Rectangle.prototype.area = function() {
  return (this.length * this.width);
};
Rectangle.prototype.perimeter = function() {
  var lengthSum = 2 * this.length;
  var widthSum = 2 * this.width;
  return lengthSum + widthSum;
};

var tri1 = new Triangle(3,3,3);
var tri2 = new Triangle(1,2,3);
var tri3 = new Triangle(3,3,1);
var tri4 = new Triangle(1,3,3);
var tri5 = new Triangle(1,3,1);

function Triangle(sideA, sideB, sideC) {
  this.sideA = parseFloat(sideA);
  this.sideB = parseFloat(sideB);
  this.sideC = parseFloat(sideC);
}
Triangle.prototype.isEquilateral = function() {
  if (this.sideA === this.sideB && this.sideA === this.sideC) {
    return true;
  } else {
    return false;
  }
};
//I am basing isosceles definition on argument that it has ONLY two equal sides, not at least 2 equal sides (thus excluding equilateral triangles)
Triangle.prototype.isIsosceles = function() {
  if (this.sideA === this.sideB && this.sideA != this.sideC) {
    return true;
  } else if (this.sideB === this.sideC && this.sideB != this.sideA) {
    return true;
  } else if (this.sideC === this.sideA && this.sideC != this.sideB) {
    return true;
  } else {
    return false;
  }
};
Triangle.prototype.area = function() {
  var perimeter = this.sideA + this.sideB + this.sideC;
  var semiPerim = perimeter/2;
  //return semiPerim;
  var multiply = semiPerim * (semiPerim - this.sideA) * (semiPerim - this.sideB) * (semiPerim - this.sideC);
  //return multiply;
  var getArea = Math.sqrt(multiply);
  return getArea;
};
Triangle.prototype.isObtuse = function() {

};


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
