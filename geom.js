function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Recatangle.prototype = {
  //  isSquare - returns true if the rectangle is a square.
  isSquare: function(){
    return this.length === this.width;
  },
  //  area - calculates the area of the rectangle.
  area: function(){
    return this.length * this.width;
  },
  //  perimeter - calculates the perimeter of the rectangle.
  perimeter: function(){
    return this.length + this.width + this.length + this.width;
  }
};

function Triangle(triSideA, triSideb, triSideC) {
  this.triSideA = triSideA;
  this.triSideb = triSideb;
  this.tritriSideC = triSideC;
}
Triangle.prototype = {
  // isEquilateral - returns true if the triangle is equilateral.
  isEquilateral: function(){
    return this.triSideA === this.triSideb === this.triSideC;
  },
  // isIsosceles - return true if the triangle is isosceles.
    // return - isIsosceles if triSideA is equal to triSideB but not equal to triSideC.
      //or if triSideA is equal to triSideC but not equal to triSideB.
        //or if triSideB is equal to triSideC but not equal to triSideA.
  isIsosceles: function(){
    return
      this.triSideA === this.triSideB
      this.triSideA === this.triSideC
      this.triSideB === this.triSideC
  },
  // area - calculates the area of the Triangle.((b * h)/2)
  //Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
  area: function(){
    var p = (this.triSideA + this.triSideb + this.triSideC) / 2;
    var area = Math.sqrt(p (p - this.triSideA) (p - this.triSideb) (p - this.triSideC))
  },
  //  isObtuse - returns true if the triangle is obtuse.(has a =< 90' angle)
  isObtuse: function(){
    return this.triSideA

  }
};


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

//Augment its prototype with the following method:
//  length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
