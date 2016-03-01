function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
// Rectangles
Rectangle.prototype.isSquare = function() {
  if (this.length == this.width) {
  return true;
  }
  else {
    return false;
  }
};
Rectangle.prototype.area = function() {
  return this.length * this.width;
};
Rectangle.prototype.perimeter = function() {
  return (this.length * 2) + (this.length *2);
};
var square = new Rectangle(10,10);
var notSquare = new Rectangle(5,10);

// Triangles
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  if (this.sideA == this.sideB && this.sideA == this.sideC) {
    return true;
  }
  else {
    return false;
  }
};
Triangle.prototype.isIsosceles = function() {
  if (((this.sideA == this.sideB) && (this.sideA != this.sideC)) || ((this.sideB == this.sideC) && (this.sideB != this.sideA)) || ((this.sideA == this.sideC) && (this.sideA != this.sideB))) {
    return true;
  }
  else {
    return false;
  }
};
Triangle.prototype.area = function() {
  var s = (this.sideA + this.sideB + this.sideC) / 2;
  return Math.sqrt(s * (s-this.sideA) * (s-this.sideB) * (s-this.sideC));
};
Triangle.prototype.obtuse = function() {
  var sidesArray = [this.sideA, this.sideB, this.sideC];
  sidesArray.sort();
  var x = sidesArray.pop();
  var c = Math.sqrt(sidesArray[0]) + Math.sqrt(sidesArray[1]);
  if (Math.sqrt(c) < x) {
    return true;
  }
  else {
    return false;
  }
};

var equalTriangle = new Triangle(10,10,10);
var isoTriangle = new Triangle(10,10,5);
var obtuseTriangle = new Triangle(25, 8, 8);

// Lines
function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function() {
  var x = this.x1 - this.x2;
  if (x < 0) {
    x = x * -1;
  }
  var y = this.y1 - this.y2;
  if (y < 0) {
    y = y * -1;
  }
  var squares = (x * x) + (y * y);
  return Math.sqrt(squares);
};

var shortLine = new LineSegment(1,2,6,8);
var longLine = new LineSegment(-10,-8,16,20);
