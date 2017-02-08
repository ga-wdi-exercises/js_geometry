class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
isSquare(){
    if (this.length == this.width)
       return true;
    else
      false
},

area: function(){
   return this.length * this.width;
},

 perimeter: function(){
   return (this.length + this.width)*2
 }
};

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
isEquilaral(){
  if ( this.sideA == sideA || this.sideB == sideB || this.sideC == sideC)
   return true;
   else {
     false
   }
},
 isIsosceles(){
   if (this.sideA == sideA || this.sideB == sideB || this.sideC == sideC)
      return true;
    else {
      false
    }
},
area: function(){
  var a = (this.sideA + this.sideB + this.sideC)/2;
    return Math.sqrt(a*(a-this.sideA)*(a-this.sideB)*(a-this.sideC))

},
isObtuse: function() {
    var sides = [this.sideA,this.sideB,this.sideC];
    sides.sort();
    return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2);
  }
};

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  },
length(){
  return  = Math.sqrt((this.x2 - this.x1),2)+((this.y2 - this.y1),2))
}
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
