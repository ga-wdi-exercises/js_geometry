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

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}


var test1 = new Triangle(2, 3, 4);


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
