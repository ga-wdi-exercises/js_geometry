function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if (this.length == this.width){
    return true;
  }
  else{
    return false;
  }
}

Rectangle.prototype.area = function(){
  area = this.length * this.width;
  return area;
}

Rectangle.prototype.perimeter = function(){
  perimeter = (this.width * 2) + (this.length * 2);
  return perimeter;
}

var square = new Rectangle(4, 4)
var newRec = new Rectangle(5, 2)


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  if (this.sideA == this.sideB && this.sideB == this.sideC){
    return true;
  }
  else{
    return false;
  }
}

Triangle.prototype.isIsosceles = function(){
  if (this.sideA == this.sideB && this.sideB == this.sideC){
    return false;
  }
  else if(this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC){
    return true;
  }
  else{
    return false;
  }
}

Triangle.prototype.area = function(){
  var s = (this.sideA + this.sideB + this.sideC) / 2
  area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s-this.sideC))
  return area;
}

Triangle.prototype.isObtuse = function(){
  if(Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2)){
    return true;
  }
  else if (Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideA, 2)){
    return true;
  }
  else if (Math.pow(this.sideC, 2) + Math.pow(this.sideA, 2) < Math.pow(this.sideB, 2)){
    return true;
  }
  else{
    return false;
  }
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  length = Math.sqrt((Math.pow((this.x1 - this.x2), 2)) + (Math.pow((this.y1 - this.y2), 2)))
  return length
}
