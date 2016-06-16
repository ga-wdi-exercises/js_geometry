area = 0
perimeter = 0

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  return this.length === this.width;
};

Rectangle.prototype.area = function(){
  return this.length * this.width;
};
Rectangle.prototype.perimeter = function(){
  return 2 * (this.length + this.width);
};

var rectangle1 = new Rectangle(4,6);
var rectangle2 = new Rectangle(8,8);


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  return this.sideA === this.sideB && this.sideA === this.sideC;
};

Triangle.prototype.isIsosceles = function(){
  return this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC
};

Triangle.prototype.area = function(){
  var p = (this.sideA + this.sideB + this.sideC)/2
  var getSquare = (p * (p - this.sideA)*(p - this.sideB)*(p - this.sideC));
  return Math.sqrt(getSquare);
};

Triangle.prototype.isObtuse = function(){
  if  (this.sideA > this.sideB && this.sideA > this.sideC) {
      return ((this.sideC * this.sideC) + (this.sideB * this.sideB)) < (this.sideA * this.sideA);
  }else if (this.sideB > this.sideA && this.sideB > this.sideC) {
      return ((this.sideA * this.sideA) + (this.sideC * this.sideC)) < (this.sideB * this.sideB);
  }else if (this.sideC > this.sideB && this.sideC > this.sideB) {
       return ((this.sideA * this.sideA) + (this.sideB * this.sideB)) < (this.sideC * this.sideC);
  }else{
    return ("false")
 }
};

var t1 = new Triangle(6,8,12);
var t2 = new Triangle(8,8,8);




function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype.length = function(){
  var s1 = Math.abs(this.x1 - this.x2);
  var s2 = Math.abs(this.y1 - this.y2);
  return Math.sqrt((s1 * s1) + (s2 * s2));
};

var l3 = new LineSegment(1,6,5,3);
