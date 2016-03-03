function Rectangle(length, width)
{
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function()
{
  return (this.length === this.width)
}

Rectangle.prototype.area = function()
{
  var rectArea = (this.length * this.width);
  return rectArea;
}

Rectangle.prototype.perimeter = function()
{
  var rectPerimeter = ((this.length*2)+(this.width*2));
  return rectPerimeter;
}

var rectOne = new Rectangle(7,3);
var rectTwo = new Rectangle(4,5);
var rectThree = new Rectangle(3,3);

console.log("square?", rectOne.isSquare());
console.log("square?", rectThree.isSquare());
/*
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.triArea = function()
{
  //calculate height using Heron's formula
  var ess = ((this.sideA + this.sideB + this.sideC)/2)
  var triArea = sqr(ess((ess-this.sideA)*(ess-this.sideB)*(ess-this.sideC)));
  return triArea;
}

var triOne = new Triangle(3, 6, 9);
var triTwo = new Tringle(4, 5, 6);

//console.log("area1: ", triOne.triArea);

function LineSegment(x1, y1, x2, y2)
{
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function()
{
  //var length = function is hypotenuse...
  //(this.y2-this.y1) gives height
  //(this.x2-this.x1) gives base
  //use Pythagorean theorem to calculate hypotenuse
  var hyp = sqr((this.height*this.height)+(this.base*this.base));
  return hyp;
}
*/
