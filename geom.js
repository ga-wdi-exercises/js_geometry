function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if (this.length === this.width) {
    return true;
  } else {
    return false;
  }
};

Rectangle.prototype.area = function(){
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function(){
  return this.length * 2 + this.width * 2;
};

// var rectangle1 = new Rectangle(4, 5);
// var rectangle2 = new Rectangle(3, 3);
// var rectangle3 = new Rectangle(10, 9);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function(){
  if(this.sideA === this.sideB && this.sideA === this.sideC) {
    return true;
  } else {
    return false;
  }
};

Triangle.prototype.isIsosceles = function(){
  if(this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
    return true;
  } else {
    return false;
  }
};

Triangle.prototype.area = function(){
  var halfPerimeter = (this.sideA + this.sideB + this.sideC)/2;
  return Math.sqrt( halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC) );
};

Triangle.prototype.isObtuse= function(){
  if( Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2) ) {
    return true;
  } else {
    return false;
  }
};

// var triangle1 = new Triangle(3,4,5);
// var triangle2 = new Triangle(3,4,9);
// var triangle3 = new Triangle(3,4,4.5);
// var triangle4 = new Triangle(3,3,4.5);
// var triangle5 = new Triangle(3,3,3);


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function(){
  return Math.sqrt(Math.pow(Math.abs(this.x1-this.x2),2) + Math.pow(Math.abs(this.y1-this.y2),2) );
};

// var lineSegment1 = new LineSegment(1,1,1,1);
// var lineSegment2 = new LineSegment(0,0,3,4);
// var lineSegment3 = new LineSegment(0,0,-4, -3);
// var lineSegment4 = new LineSegment(1,1,7,9);
