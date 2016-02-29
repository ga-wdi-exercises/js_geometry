function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype = {
  isSquare: function(){
  return this.length == this.width;
  },
  area: function(){
    return this.length * this.width;
  },
  perimeter: function(){
    return (this.length + this.width)*2;
  }
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  isEquilateral: function(){
    return this.sideA == this.sideB && this.sideA == this.sideC;
  },
  isIsosceles: function(){
    return this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC;
  },
  area: function(){
    var s = (this.sideA + this.sideB + this.sideC)/2;
    return Math.sqrt(s*(s - this.sideA)*(s-this.sideB)*(s-this.sideC));
  },
  isObtuse: function(){
   c2 = Math.pow(this.sideC,2);
   a2 = Math.pow(this.sideA,2);
   b2 = Math.pow(this.sideA,2);
   if ((c2/2)<(a2+b2)<c2){
       return true;
   }
   else if ((b2/2)<(a2+c2)<b2){
       return true;
   }
   else if ((a2/2)<(c2+b2)<a2){
       return true;
   }
  }

};


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype.length = function (){
  var deltaX = this.x2 - this.x1;
  var deltaY = this.y2 - this.y1;
  return Math.sqrt(Math.pow(deltaY, 2) + Math.pow(deltaX, 2));
 };
