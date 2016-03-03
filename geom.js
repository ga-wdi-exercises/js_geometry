function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
    if (this.length === this.width) return true;
    return false;
};
Rectangle.prototype.area = function() {
    return this.length * this.width;
};
Rectangle.prototype.perimeter = function() {
    return (this.length + this.width) * 2;
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
    return (this.sideA === this.sideB && this.sideB === this.sideC);
};
Triangle.prototype.isIsosceles = function() {
    return (this.sideA === this.sideB || this.sideA === this.sideC);
};
Triangle.prototype.area = function() {
    var semiP = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(semiP * (semiP - this.sideA) *
                       (semiP - this.sideB) * (semiP * this.sideC));
};
Triangle.prototype.isObtuse = function() {
    var abSquared = (this.sideA * this.sideA) + (this.sideB * this.sideB);
    var cSquared = this.sideC * this.sideC;
    return ((cSquared / 2) < abSquared && abSquared < cSquared);
};

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function() {
    var xDelta = this.x2 - this.x1;
    var yDelta = this.y2 - this.y1;
    return Math.sqrt((xDelta * xDelta) + (yDelta * yDelta));
};


