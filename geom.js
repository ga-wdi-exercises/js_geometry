

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.IsSquare = function(){
  if (this.length === this.width){
    return "I'm a square!"
  }else{return "Not a square, just a rectangle"}
}

Rectangle.prototype.area = function(){
  return "My area is "+ (this.length * this.width);
}
Rectangle.prototype.perimeter = function(){
  return "My perimeter is "+(2*(this.length+this.width))
}
var square = new Rectangle(4,4);
var notSquare = new Rectangle(4,6);


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  if(this.sideA === this.sideB){
    if (this.sideB===this.sideC){
      return "I'm equilateral"
    }else if (this.sideB!==this.sideC){
      return "I'm isoceles! Run me under that prototype instead!"
    }
  }else{return "I'm not equilateral!"}
}
//I know I can clean this up but I'm not sure how just yet. I'm just thrilled it works!
Triangle.prototype.isIsosceles = function(){
    if(this.sideA===this.sideB){
    if (this.sideB !== this.sideC){
        return "I'm Isoceles!"
      }else{return "I'm Equilateral. There's a prototype to prove it!"}
    }else if (this.sideA===this.sideC){
      return "I'm Isoceles too!"
    }else{
      return "I'm neither isoceles nor am I equilateral"
    }
}
// do this for the area - Yall? Seriously? What's with the math? Man.... hahaha
Triangle.prototype.area = function(){
  this.perimeter=(this.sideA + this.sideB + this.sideC)/2;
  this.area = Math.sqrt(this.perimeter*((this.perimeter-this.sideA)*(this.perimeter-this.sideB)*(this.perimeter-this.sideC)));
  return "My perimeter is "+ this.perimeter + " and my area is " + this.area;
}
Triangle.prototype.isObtuse = function(){
  this.a2=Math.pow(this.sideA,2);
  this.b2=Math.pow(this.sideB,2);
  this.c2=Math.pow(this.sideC,2)
  if (this.a2+this.b2<this.c2){
    return "I'm SO obtuse!"
  }else if(this.a2+this.b2>this.c2){
    return "I'm damn aCUTE!"
  }
}

var equilateralTriangle = new Triangle(5,5,5);
var isoscelesTriangle = new Triangle(5,5,3);
var alsoNotEquilateral = new Triangle(5,10,14);
var anotherIsoscelesTriangle = new Triangle(4,3,4)
//==============================================================//
function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

///this is my proudest moment in code so far. I found this out all on my own. I mean...with google and our lessons but not by any other help. It works!
LineSegment.prototype.length = function(){
  this.Xdiff = ((this.x2)-(this.x1));
  this.Ydiff = ((this.y2-this.y1));
  this.distance = Math.sqrt(Math.pow(this.Xdiff,2)+Math.pow(this.Ydiff,2))
  return "I'm "+ this.distance + " long."
}

var lineyLineLine = new LineSegment(4,3,5,7)
