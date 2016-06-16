function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
  if (this.length === this.width) {
    return true;
  }
}

Rectangle.prototype.area = function() {
  return this.length*this.width;
}

Rectangle.prototype.perimeter = function() {
  return (this.length*2)+(this.width*2);
}

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  if (this.sideA === this.sideB && this.sideA === this.sideB) {
    return true;
  }
}

Triangle.prototype.isIsosceles = function() {
  if (this.sideA === this.sideB && this.sideA !== this.sideB) {
    return true;
  }
  else if (this.sideB === this.sideC && this.sideB !== this.sideA) {
    return true;
  }
  else if (this.sideC === this.sideA && this.sideC !== this.sideB) {
    return true;
  }
  return false;
}

Triangle.prototype.area = function() {
  var s = ((this.sideA+this.sideB+this.sideC)/2);
  return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
}

Triangle.prototype.isObtuse = function() {
  if (Math.pow(this.sideA,2)+Math.pow(this.sideB,2) < Math.pow(this.sideC,2)) {
    return true;
  }
  else if (Math.pow(this.sideB,2)+Math.pow(this.sideC,2) < Math.pow(this.sideA,2)) {
    return true;
  }
  else if (Math.pow(this.sideC,2)+Math.pow(this.sideA,2) < Math.pow(this.sideB,2)) {
    return true;
  }
  else {
    return false;
  }
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.distance = function() {
  return Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2));
}
