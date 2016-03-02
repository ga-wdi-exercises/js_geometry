function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if(this.length == this.width) {
  return true;
  }
  else {
  return false;
  }
};

Rectangle.prototype.area = function() {
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function() {
  return this.length * 2 + this.width *2;
};


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
  if(this.sideA == this.sideB && this.sideA == this.sideC){
    return true;
  }
  else {
    return flase;
  };
}

Triangle.prototype.isIsosceles = function() {
  if((this.sideA == this.sideB) && (this.sideA !== this.sideC) || (this.sideB == this.sideC) && (this.sideB == this.sideA) || (this.sideC == this.sideB) && (this.sideC !== this.sideA)){
    return true;
  }
  else {
    return false;
  }
};

Triangle.prototype.area = function() {
  var s = (this.sideA + this.sideB + this.sideC) / 2;
  return Math.sqrt(s * ((s-this.sideA)+(s-this.sideB)+(s-this.sideC));
};

Triangle.prototype.obtuse = function() {
  
}





function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
