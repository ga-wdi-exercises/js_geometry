function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
var test = new Rectangle(2, 3);

//area
Rectangle.prototype.area = function(){
  return(this.length * this.width);
};
console.log(test.area());

//perimeter
Rectangle.prototype.perimeter = function() {
  return (2 * (this.length + this.width));
};
console.log(test.perimeter());

//square
Rectangle.prototype.isSquare = function() {
console.log(this.length === this.width);
return(this.length === this.width);

};

//TRIANGLE

function Triangle(sideA, sideB, sideC){
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
var test1 = new Triangle(2, 2, 3);

// isEquilateral
Triangle.prototype.isEquilateral = function(){
  return(this.sideA === this.sideB && this.sideA=== this.sideC && this.sideB === this.sideC);
};

// //isIsosceles
Triangle.prototype.isIsosceles = function(){
  return(this.sideA === this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC);
};

function Triangle(sidA, sidB, base, hite){
  this.sidA = sidA;
  this.sidB = sidB;
  this.base = base;
  this.hite = hite;
}
var test2 = new Triangle(2, 2, 5, 2);
//area
Triangle.prototype.area = function(){
return((this.base * this.hite)/2);
};




function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
