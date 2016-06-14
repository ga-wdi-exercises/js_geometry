sq = new Rectangle(4,4);
rt = new Rectangle(5,4);

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
  Rectangle.prototype.isSquare = function(){
    return (this.length === this.width)
  }
  Rectangle.prototype.area = function(){
    return (this.length * this.width);
  }
  Rectangle.prototype.perimeter = function(){
    return (this.length + this.length + this.width + this.width);
  }


trIs = new Triangle(3, 3, 5);
trEq = new Triangle(6, 6, 6);
trRight = new Triangle(3, 4, 5);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
  Triangle.prototype.isEquilateral = function(){
    return ((this.sideA === this.sideB) && (this.sideB === this.sideC) && (this.sideA === this.sideC))
  }
  Triangle.prototype.isIsoseles = function(){
    if ((this.sideA === this.sideB) && (this.sideB === this.sideC) && (this.sideA === this.sideC)){ //return false if all 3 sides are same, since its equilateral
      return false;
    }
    return ((this.sideA === this.sideB) || (this.sideA === this.sideC) || (this.sideB === this.sideA))
}
  Triangle.prototype.area = function(){
    var halfbase = .5 * this.sideA;
    var height = Math.sqrt((this.sideB*this.sideB)+(halfbase*halfbase));
    return halfbase*height;
  }
  Triangle.prototype.isObtuse = function(){
    //a^2+b^2 < c^2
    return ((Math.sqrt((this.sideA*this.sideA)+(this.sideB*this.sideB)) < this.sideC) || (Math.sqrt((this.sideB*this.sideB)+(this.sideC*this.sideC)) < this.sideA) || (Math.sqrt((this.sideA*this.sideA)+(this.sideC*this.sideC)) < this.sideB))
  }


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
  LineSegment.prototype.length(){
    var horiz = this.x1-this.x2;
    var vert = this.y1-this.y2;
    return (Math.sqrt(horiz*horiz)+(vert*vert))
  }
