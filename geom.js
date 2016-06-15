function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() { return (this.length == this.width) };
Rectangle.prototype.area = function() { return (this.length * this.width) };
Rectangle.prototype.perimeter = function() { return ( 2 * this.length + 2 * this.width) };

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  return ((this.sideA == this.sideB) &&
          (this.sideA == this.sideC) &&
          (this.sideB == this.sideC));
}

Triangle.prototype.isIsosceles = function() {
  return ((this.sideA == this.sideB) ||
          (this.sideA == this.sideC) ||
          (this.sideB == this.sideC));
}

Triangle.prototype.area = function() {
  var s = (this.sideA + this.sideB + this.sideC) / 2;
  return Math.sqrt( s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC) );
}

Triangle.prototype.isObtuse = function() {
  function obtuseCheck(x,y,z) {
    return (x * x + y * y < z * z);
  }
  return (obtuseCheck(this.sideA,this.sideB,this.sideC) ||
          obtuseCheck(this.sideB,this.sideC,this.sideA) ||
          obtuseCheck(this.sideC,this.sideA,this.sideB)
  );         
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
