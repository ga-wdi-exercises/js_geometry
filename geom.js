function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if(this.width == this.length){
    return true;
  }else{
    return false;
  }
};

Rectangle.prototype.area = function(){
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function(){
  return this.length*2 + this.width*2;
};

var skinnyBox = new Rectangle(18,2);

var squareBox = new Rectangle(8,8);

////////////

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  if (this.sideA == this.sideB && this.sideB == this.sideC){
    return true;
  }else{
    return false;
  }
};

Triangle.prototype.isIsosceles = function(){
  if ((this.sideA == this.sideB) || (this.sideA == this.sideB) || (this.sideB == this.sideC)){
    return true;
  }else{
    return false;
  }
};

Triangle.prototype.area = function(){
  var s = (this.sideA + this.sideB + this.sideC) / 2;
  var area = Math.sqrt(s*(s-this.sideA)(s-this.sideB)(s-this.sideC));
  return area;
};

Triangle.prototype.isObtuse = function(){
  if((Math.pow(this.sideA,2) + Math.pow(this.sideB,2) < Math.pow(this.sideC,2)) || (Math.pow(this.sideB,2) + Math.pow(this.sideC,2)) < (Math.pow(this.sideA,2)) || (Math.pow(this.sideC,2) + Math.pow(this.sideA,2) < Math.pow(this.sideB,2))){
    return true;
  }else{
    return false;
  }
};

//   var cosA = (Math.pow(-this.sideA,2) + Math.pow(this.sideB,2) + Math.pow(this.sideC,2)) / (2*this.sideB*this.sideC);
//   var cosB = (Math.pow(this.sideA,2) - Math.pow(this.sideB,2) + Math.pow(this.sideC,2)) / (2*this.sideA*this.sideC);
//   var cosC = (Math.pow(this.sideA,2) + Math.pow(this.sideB,2) + Math.pow(this.sideC,2)) / (2*this.sideA*this.sideB);
//   if (cosA < 0 || cosB < 0 || cosC < 0){
//     return true;
//   }else{
//     return false;
//   }
// };

var equalTri = new Triangle(8,8,8);

var isocTri = new Triangle(8,8,20);

var obtuseTri = new Triangle(2,2,18);

//////////////

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  var oneLine = (Math.pow(this.x2 - this.x1,2));
  var twoLine = (Math.pow(this.y2 - this.y1,2));
  return Math.sqrt(oneLine + twoLine);
};
