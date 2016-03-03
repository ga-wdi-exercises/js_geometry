function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.square = function () {
  if (this.length == this.width) {
    return true;
  }else{ return false;}
};

Rectangle.prototype.area = function() {
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function() {
  return 2 * (this.length + this.width);
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  if (this.sideA == this.sideB && this.sideA == this.sideC) {
    return true;
  }else{ return false;}
};

Triangle.prototype.isIsosceles = function() {
  if (this.sideA == this.sideB || this.sideA == this.sideC ||
  this.sideB == this.sideC) {
    return true;
  }else{ return true;}
};

Triangle.prototype.area = function() {
  var s = 0.5 * (this.sideA + this.sideB + this.sideC);
  var x = s * (s-this.sideA)*(s - this.sideB)*(s - this.sideC);
  return Math.sqrt(x);
};

//sideC must be the side opposite of the angle in question
Triangle.prototype.isObtuse = function() {
  if ((this.sideC*this.sideC) - (this.sideA*this.sideA) - (this.sideB*this.sideB) > 0 ) {
    return true;
  }else{return false;}
};

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function() {
var newX = this.x2 - this.x1;
var newY = this.y2 - this.y1;
var cSquared = (newX * newX) + (newY * newY);
return Math.sqrt(cSquared);
};
