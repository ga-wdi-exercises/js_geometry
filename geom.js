function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
  isSquare: function(){
    return this.length === this.width;
  },
  area: function(){
    return this.length * this.width;
  },
  perimeter: function(){
    return (2*this.length) + (2*this.width);
  }
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  isEquilateral: function(){
    return this.sideA === this.sideB && this.sideB === this.sideC;
  },
  Isosceles: function(){
    return this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC;
  },
  Area: function(){ //hmm its 1/2B*H found this online: var perimeter = (side1 + side2 + side3)/2;
//var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
//console.log(area);
    //if
    var p = (this.sideA + this.sideB + this.sideC)/2;
    var area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    return area;
  },
  isObtuse: function(){
    //I HVE NOIDEA AND THE SOLUTION DOESNT EVEN MAKE SENSE. 
  }
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
