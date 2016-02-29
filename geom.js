function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype = {
  function isSquare() {
    if (this.length === this.width);
        return true
    };
  function area(){
    return this.length * this.width
  };
  function perimeter(){
    return (2 * this.length) + (2 this.width);
  }
}

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  function isEquilateral(){
    return this.sideA === this.sideB && this.sideB === this.sideC
  };
  function isIsosceles() {
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC
  };
  function area(){
    var p = (this.sideA + this.sideB + this.sideC) / 2;
    var area = Math.sqrt ((p - this.sideA) + (p - this.sideB) + (p - this.sideC));
    return area;
  };
  function isObtuse(){
    
  }
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
