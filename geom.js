function Shape(sideA, sideB){
  this.sideA = sideA;
  this.sideB = sideB;
}

Shape.prototype.area = function(){
  return "area is " + (this.sideA*this.sideB);
}
Shape.prototype.perimeter = function(){
  return "perimeter is" + (2*this.sideA + 2*this.sideB);
}


function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = new Shape();

Rectangle.prototype.area = function(){
  return "area is " + (this.length*this.width);
}
Rectangle.prototype.perimeter = function(){
  return "perimeter is" + (2*this.length + 2*this.width);
}
Rectangle.prototype.isSquare = function() {
  if(length === width){
    return "this is a square"
  }
  else{
    return "this is a rectangle"
  }
}


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = new Shape();

Triangle.prototype.isEquilateral = function(){
  if(this.sideA === this.sideB && this.sideB === this.sideC && this.sideA === this.sideC){
    return "The triangle is an Equilateral"
  }
}

Triangle.prototype.isIsosceles = function(){
  if(this.sideA === this.sideB) || (this.sideB === this.sideC) || (this.sideA === this.sideC) {
    return "The triangle is Isosceles"
  }
}

Triangle.prototype.area = function(){
  var s = ((this.sideA+this.sideB+this.sideC)/2);
  return "area is " + Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
}

Triangle.prototype.isObtuse = function(){
  var sides = [this.sideA,this.sideB,this.sideC];
   sides.sort();
   if(Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2)){
     return "the triangle is Obtuse"
   }
 }

}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  var x = this.x2 - this.x1;
  var y = this.y2 - this.y1;
  var a = Math.pow(x, 2)
  var b = Math.pow(y, 2)
  return Math.sqrt(a + b);
}
