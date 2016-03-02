function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}



var square = new Rectangle(5 , 5);
Rectangle.prototype.isSquare = function(){
if(this.length == this.width){
  return true;
}
else{
  return false;
}
};
console.log("isSquare :");
console.log(square.isSquare());


var square2 = new Rectangle(4 , 10);
Rectangle.prototype.area = function(){
return this.length * this.width;
};
console.log("area:");
console.log(square2.area());

var square3 = new Rectangle(5 , 5);
Rectangle.prototype.perimeter = function(){

return this.length + this.width;
};
console.log("perimeter :");
console.log(square3.perimeter());







function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}


var triangle = new Triangle(7 , 10 , 6);


Triangle.prototype.isEquilateral = function(){
  if(this.sideA == this.sideB && this.sideC == this.sideA && this.sideB == this.sideC){
    return true;
  }
  else{
    return false;
  }
};
console.log("isEquilateral :");
console.log(triangle.isEquilateral());



Triangle.prototype.isIsosceles = function(){
if(this.sideA == this.sideB && this.sideB != this.sideC){
  return true;
}
else{
  return false;
}
};
console.log("isIsosceles :");
console.log(triangle.isIsosceles());




Triangle.prototype.area = function(){

var height = 2*(this.sideA / this.sideB);
return (height * this.sideC)/2;

};
console.log("Area :");
console.log(triangle.area());


Triangle.prototype.obtuse = function(){

if(this.sideA != this.sideB && this.sideB != this.sideC && this.sideC != this.sideA){
  return true;
}
else{
  return false;
}

};
console.log("Obtuse :");
console.log(triangle.obtuse());



function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

var lineSegment = new LineSegment(10 , 5 , 3 , 4);
lineSegment.prototype.lengths = function() {

return 

};
console.log()
