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

Triangle.prototype.area = function(){
  //calculate height using Heron's formula
  var ess = ((sideA + sideB + sideC)/2)
  return ess;
  var area = sqr(ess((ess-sideA)*(ess-sideB)*(ess-sideC)));
  return area;

LineSegment.prototype.length = function(){
  //var length = function is hypotenuse...
  //(y2-y1) gives height
  //(x2-x1) gives base
  //use Pythagorean theorem to calculate hypotenuse
  var hyp = sqr((height*height)+(base*base));
  return hyp;
  