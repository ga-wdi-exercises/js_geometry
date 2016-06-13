function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if (this.length == this.width) {
    return true
  }
  else {
    return false
  }
}

Rectangle.prototype.area = function(){
  return (this.length * this.width);
}

Rectangle.prototype.perimeter = function(){
  return (2*(this.length + this.width));
}

var squareFriend = Rectangle(3,3);
var notSquareFriend = Rectangle(5,3);

//triangles

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.area = function(){
  var p = ((this.sideA+this.sideB+this.sideC)/2);
  var z = ((p - this.sideA)*(p - this.sideB)*(p - this.sideC))
  var squareRootofThis = p*z;
  var area = Math.sqrt(squareRootofThis);
  return area;
}

Triangle.prototype.isEquilateral = function(){
  if ((this.sideA==this.sideB) && (this.sideB==this.sideC)) {
    return true;
  }
  return false;
}

Triangle.prototype.isIsosceles = function(){
  if ((this.isEquilateral==false) && ((this.sideA==this.sideB) || (this.sideB==this.sideC)|| (this.sideA==this.sideC))) {
    return true;
  }
  return false;
}

Triangle.prototype.isObtuse = function(){
  if  (((Math.pow(this.sideA,2)) + (Math.pow(this.sideB,2))) < (Math.pow(this.sideC,2))) {
    return true;
  }
  else if (((Math.pow(this.sideB,2)) + (Math.pow(this.sideC,2))) < (Math.pow(this.sideA,2))) {
    return true;
  }
  else if (((Math.pow(this.sideC,2)) + (Math.pow(this.sideA,2))) < (Math.pow(this.sideB,2))) {
    return true;
  }
  else {
    return false;
  }
}

var triangleBob = new Triangle(3,3,3)
var triangleDan = new Triangle(3,5,6)
var triangleIris = new Triangle(3,3,4)

//lines

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}


LineSegment.prototype.length = function () {
length = Math.sqrt(((Math.pow((this.x2-this.x1),2))+(Math.pow((this.y2-this.y1),2))))
return length;
}

var newLine = new LineSegment(1,4,4,1)
