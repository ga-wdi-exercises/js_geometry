var rects = [new Rectangle(2,9), new Rectangle(300,550), new Rectangle(60,60)];
var tris = [new Triangle(6,6,6), new Triangle(300,550,610), new Triangle(12,10,3)];



function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  return (this.length == this.width);
}

Rectangle.prototype.area = function(){
  return (this.length * this.width);
}

Rectangle.prototype.perimeter = function(){
  return (this.length * 2 + this.width * 2);
}


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  return (this.sideA == this.sideB == this.sideC);
}

Triangle.prototype.isIsoceles = function(){
  return ((this.sideA == this.sideB) || (this.sideA == this.sideC) || (this.sideB == this.sideC));
}

Triangle.prototype.area = function(){
  var s = ((this.sideA+this.sideB+this.sideC)/2)
  return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
}

Triangle.prototype.isObtuse = function(){
  var c = Math.max(this.sideA, this.sideB, this.sideC);
  if ( c == this.sideA){return Math.pow(this.sideA, 2 ) > (Math.pow(this.sideB,2) + Math.pow(this.sideC,2)); }
  else if ( c == this.sideB){return Math.pow(this.sideB, 2 ) > (Math.pow(this.sideA,2) + Math.pow(this.sideC,2)); }
  else {return Math.pow(this.sideC, 2 ) > (Math.pow(this.sideA,2) + Math.pow(this.sideB,2)); }
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
