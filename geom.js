var rect1 = new Rectangle(3,3);
var rect2 = new Rectangle(4,3);
var rect3 = new Rectangle(3,5);

function Rectangle(length, width) {
  this.length = parseFloat(length);
  this.width = parseFloat(width);
}
Rectangle.prototype.isSquare = function() {
  if (this.length === this.width) {
    return true;
  } else {
    return false;
  }
};
Rectangle.prototype.area = function() {
  return (this.length * this.width);
};
Rectangle.prototype.perimeter = function() {
  var lengthSum = 2 * this.length;
  var widthSum = 2 * this.width;
  return lengthSum + widthSum;
};


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
