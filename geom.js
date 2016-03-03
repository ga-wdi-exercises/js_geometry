function Rectangle(length, width){
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  return (this.length === this.width)
}

Rectangle.prototype.area = function(){
  var rectArea = (this.length * this.width);
  return rectArea;
}

Rectangle.prototype.perimeter = function(){
  var rectPerimeter = ((this.length*2)+(this.width*2));
  return rectPerimeter;
}

var rectOne = new Rectangle(7,3);
var rectTwo = new Rectangle(4,5);
var rectThree = new Rectangle(3,3);

console.log("square?", rectOne.isSquare());
console.log("square?", rectThree.isSquare());
console.log("area: ", rectTwo.area());
console.log("perimeter: ", rectOne.perimeter());

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

//can calculate triangle area using sides in Heron's formula
//see http://mathworld.wolfram.com/HeronsFormula.html for reference
Triangle.prototype.semiPerimeter = function(){
  //to use Heron's formula, need to solve for triangle's semiperimeter
  var semiP = ((this.sideA + this.sideB + this.sideC)/2);
  return semiP;
}

//area function is returning NaN...no errors, but not a number
//breaking down into smaller pieces to find problem...
Triangle.prototype.area = function(){
  //plug in semiperimeter to calculate area
  //var triArea = Math.sqrt(this.semiPerimeter);
  var mathyThings = (this.semiP*((this.semiP-this.sideA)*(this.semiP-this.sideB)*(this.semiP-this.sideC)));
  return mathyThings;
}

var triOne = new Triangle(3, 6, 9);
var triTwo = new Triangle(4, 5, 6);

console.log("S2: ", triTwo.semiPerimeter());
console.log("math: ", triOne.area());
//console.log(triTwo.triArea);
//console.log("triangle 2 area: ", triTwo.area());

/*
function LineSegment(x1, y1, x2, y2){
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  //var length = function is hypotenuse...
  //(this.y2-this.y1) gives height
  //(this.x2-this.x1) gives base
  //use Pythagorean theorem to calculate hypotenuse
  var hyp = Math.sqrt((this.height*this.height)+(this.base*this.base));
  return hyp;
}
*/
