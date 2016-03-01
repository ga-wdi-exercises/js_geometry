function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.isSquare = function() {
  if(this.width === this.length){
    return true;
  }
  else{
    return false;
  }
};
Rectangle.prototype.area = function() {
  return (this.length*this.width);
};
Rectangle.prototype.perimeter = function() {
  return 2*(this.width + this.length);
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype.isEquilateral = function() {
if(this.sideA === this.sideB === this.sideC){
  return true;
else {
  return false;
    }
  }
}
Triangle.prototype.isIsoceles = function() {
  if(this.sideA === this.sideB !=== this.sideC) ||
  if(this.sideB === this.sideC !=== this.sideA) ||
  if(this.sideA === this.sideC !=== this.sideB){
  return true;
}
  else {
    return false;
  }
};

Triangle.prototype.area = function() {
  return(0.5*this.sideA*this.sideB);
};

Triangle.prototype.isObtuse = function() {
  if(this.sideA^2 + this.sideB^2 < this.sideC^2) ||
  if(this.sideB^2 + this.sideC^2 < this.sideA^2) ||
  if(this.sideA^2 + this.sideC^2 < this.sideB^2)
      return true;
    }
  else{
      return false;
};

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype.length = function() {
  return((this.y2 - this.y1)/(this.x2 - this.x1));
};
