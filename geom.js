function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
  if (this.length === this.width) {
    return true
  } else return false;
}

Rectangle.prototype.area = function() {
  return (this.width * this.length);
}

Rectangle.prototype.perimeter = function() {
  return (this.width * 2) + (this.length * 2);
}

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  if ((this.sideA === this.sideB) && (this.sideA === this.sideC) && (this.sideB === this.sideC)) {
    return true;
  } else return false;
}

Triangle.prototype.isIsosceles = function() {
  if ((this.sideA === this.sideB) && (this.sideA !== this.sideC)) {
    return true;
  } else if ((this.sideB === this.sideC) && (this.sideB !== this.sideA)) {
    return true;
  } else if ((this.sideA === this.sideC) && (this.sideA !== this.sideB)) {
    return true;
  } else return false
}

Triangle.prototype.area = function() {
  area = ((.5) * (this.sideA * this.sideC))

  return area;

}

// Triangle.prototype.isObtuse = function() {
//
// }

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
