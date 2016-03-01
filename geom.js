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

function Triangle1(sideA, sideB, sideC){
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
var test1 = new Triangle1(2, 2, 3);

// isEquilateral
Triangle1.prototype.isEquilateral = function(){
  return(this.sideA === this.sideB && this.sideA=== this.sideC && this.sideB === this.sideC);
};

// //isIsosceles
Triangle1.prototype.isIsosceles = function(){
  return(this.sideA === this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC);
};

//area

function Triangle2(sidA, sidB, base, hite){
  this.sidA = sidA;
  this.sidB = sidB;
  this.base = base;
  this.hite = hite;
}
var test2 = new Triangle2(3, 2, 5, 2);
Triangle2.prototype.area = function(){
return((this.base * this.hite)/2);
};

//isObtuse

function Triangle3(angleA, angleB, angleC) {
  this.angleA = angleA;
  this.angleB = angleB;
  this.angleC = angleC;
}
//this.angleA is called a property with values
var test3 = new Triangle3(100, 40, 40);
var test4 = new Triangle3(80, 30, 70);

// this line is invoking triange3 constructor function with values as arguments.
// test3 is an instance of the triange3 constructor test 3 may be different than any other instance. it's almost like another version of a triangle.
Triangle3.prototype.obtuse = function(){
return (this.angleA > 90 || this.angleB > 90 || this.angleC > 90);
};
// obtuse is a method.
// there are 2 triangles with different prop right now. test 3 and test 4
//Line Segment

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

var test5 = new LineSegment(2, 1, 6, 4);
LineSegment.prototype.length = function(){
return Math.sqrt(((6-2)*2) + ((4-1)*2));
};
