function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
  return this.length == this.width;
};

Rectangle.prototype.area = function() {
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function() {
  return this.length * 2 + this.width * 2;
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function () {
  return (this.sideA == this.sideB) && (this.sideA == this.sideC);
};

Triangle.prototype.isIsosceles = function () {
  return (this.sideA == this.sideB) || (this.sideA == this.sideC) || (this.sideB == this.sideC);
};

Triangle.prototype.area = function () {
  var half_perimeter = (this.sideA + this.sideB + this.sideC)/2;
  var area_squared = half_perimeter * (half_perimeter - this.sideA) * (half_perimeter - this.sideB) * (half_perimeter - this.sideC);

  return Math.sqrt(area_squared);
};

Triangle.prototype.isObtuse = function () {
  var sides = [this.sideA,this.sideB,this.sideC];
  sides.sort();

  return (Math.pow(sides[0], 2) + Math.pow(sides[1], 2)) < Math.pow(sides[2], 2);
};

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function () {
  var diffX = this.x2 - this.x1;
  var diffY = this.y2 - this.y1;

  return Math.sqrt(diffX * diffX + diffY * diffY);
};

module.exports.Rectangle = Rectangle;
module.exports.Triangle = Triangle;
module.exports.LineSegment = LineSegment;
