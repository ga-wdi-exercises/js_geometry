function Triangle3(angleA, angleB, angleC) {
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
}
function LineSegment(x1, y1, x2, y2) {
  this.x2 = x2;
  this.y2 = y2;
}

var test5 = new LineSegment(2, 1, 6, 4);
LineSegment.prototype.length = function(){
  return Math.sqrt(((6-2)*2)  ((4-1)*2));
};
