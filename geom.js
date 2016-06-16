function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

// # Geometry
//
// ## Rectangle
//
// Given the following constructor function:
//
// ```

function Rectangle(length, width) {
  this.length = length;
  this.width = width
}

Rectangle.prototype.isSquare = function(){
  if(this.length == this.width){
    return true;
  }
  return false;
};
  Rectangle.prototype.area = function(){
    var area = this.length * this.width;
    return "Area: " + area;
  };
  Rectangle.prototype.perimeter = function(){
    var perimeter = (2 * this.length) + (2 * this.width);
    return "Perimeter: " + perimeter;
  };

// ```
//
// Augment its prototype with the following methods:
//
// * `isSquare` - returns true if the rectangle is a square.
// * `area` - calculates the area of the rectangle.
// * `perimeter` - calculates the perimeter of the rectangle.
//
// Create a few rectangles with different lengths and widths.
//
// Bonus: Test your outcomes using [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!
//
//
// ## Triangle
//
// Given the following constructor function:
//
// ```
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
// ```
//
// Augment its prototype with the following methods:
//
// * `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).
// * `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).
// * `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).
// * `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).
//
// Create a few rectangles with different lengths and widths.
//
// Bonus: Test your outcomes using [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!

Triangle.prototype.isEquilateral = function(){
  if(this.sideA == this.sideB == this.sideC){
    return true;
  }
  return false;
};
  Triangle.prototype.isIsosceles = function(){
    if(this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC){
      return true;
    }
    return false;
  };
  Triangle.prototype.area = function(){
    var perimeter     = this.sideA + this.sideB + this.sideC;
    var halfPerimeter = perimeter / 2;
    function pDiff(sideLength){
      var difference = halfPerimeter - sideLength;
      //console.log(difference);
      return difference;
    }
    var area = Math.sqrt(halfPerimeter * (pDiff(this.sideA)) * (pDiff(this.sideB)) * (pDiff(this.sideC)));
    return "Area: " + area;
  };
  Triangle.prototype.isObtuse = function(){
    var sides = [];
    sides.push(this.sideA);
    sides.push(this.sideB);
    sides.push(this.sideC);
    sides.sort();
    var largestSideIndex = sides.length - 1;
    var largestSide = sides[largestSideIndex];
    var sideCompareValue = sides[0] + sides[1];
    if(largestSide < sideCompareValue){
      return false;
    }else if(largestSide !== sideCompareValue){
      return true;
    }else{
      return false;
    }
  };


// ## LineSegment
//
// Given the following constructor:
//
// ```
function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
// ```
// Augment its prototype with the following method:
//
// * `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).

LineSegment.prototype.length = function(){
  function squareNumber(number){
    var numberSquared = number * number;
    return numberSquared;
  }
  var sideA = this.x1 - this.x2;
  var sideB = this.y1 - this.y2;
  var length = Math.sqrt(squareNumber(sideA) + squareNumber(sideB));
  return length;
}
