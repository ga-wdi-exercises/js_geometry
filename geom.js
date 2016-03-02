function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

//BRITTANY'S SOLUTION
Rectangle.prototype.isSquare = function() {
  if(this.length === this.width) {
    return true;
  } else {
    return false;
  }
  return this.length === this.width;
};

Rectangle.prototype.area = function() {
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function() {
  return (2* this.length) + (2 * this.width);
};

var rectangle = new Rectangle(10, 12);
var rectangle2 = new Rectangle(50, 30);


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

//BRITTANY'S SOLUTION

Triangle.prototype.isEquilateral = function() {
  if(this.sideA === this.sideB && this.sideB === this.sideC) {
    return this.sideA === this.sideB && this.sideB === this.sideC;
  };

  Triangle.prototype.isIsosceles = function() {
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideC === this.sideB;
  };

  Triangle.prototype.area = function() {
    //Heron's formula is A = the square root of s(s-a)(s-b)(s-c)
    //s = semiperimeter, which is s = a+b+c/2
    var s = (this.sideA + this.sideB + this.sideC) / 2;
    var HeronA = (s - this.sideA);
    var HeronB = (s - this.sideB);
    var HeronC = (s - this.sideC);
    return Math.sqrt(s * HeronA * HeronB * HeronC);
  };

  Triangle.prototype.isObtuse = function() {
    
  }
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
