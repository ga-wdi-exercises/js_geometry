function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if (length === width) {
    return true;
  }
}

Rectangle.prototype.area = function(){
  var area = (length * width);
  return area;
  }

Rectangle.prototype.perimeter = function(){
  var perimeter = ((length*2)+(width*2));
  return perimeter;
  }

var rectOne = new Rectangle(7,3);
var rectTwo = new Rectangle(4,5);
var rectThree = new Rectangle(3,3);

/*
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.area = function(){
  //calculate height using Heron's formula
  var ess = ((sideA + sideB + sideC)/2)
  return ess;
  var area = sqr(ess((ess-sideA)*(ess-sideB)*(ess-sideC)));
  return area;
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  //var length = function is hypotenuse...
  //(y2-y1) gives height
  //(x2-x1) gives base
  //use Pythagorean theorem to calculate hypotenuse
  var hyp = sqr((height*height)+(base*base));
  return hyp;
}
*/
