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

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype = {
  // isEquilateral - returns true if the triangle is equilateral.
  isEquilateral: function(){
    return this.sideA === this.sideB === this.sideC;
  },
  // isIsosceles - return true if the triangle is isosceles.
  // return - isIsosceles if sideA is equal to sideB but not equal to sideC.
  //or if sideA is equal to sideC but not equal to sideB.
  //or if sideB is equal to sideC but not equal to sideA.
  isIsosceles: function(){
    return
    this.sideA === this.sideB
    this.sideA === this.sideC
    this.sideB === this.sideC
    //need to figure out the relation.
  },
  // area - calculates the area of the Triangle.((b * h)/2)
  //Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
  area: function(){
    var p = (this.sideA + this.sideB + this.sideC) / 2;
    var area = Math.sqrt(p (p - this.sideA) (p - this.sideB) (p - this.sideC))
    return area;
  },
  // isObtuse - returns true if the triangle is obtuse.(has a =< 90' angle)
  // Must use Pythagorean theorem A^2 + B^2 = C^2
  // Could use Math.pow somehow to get the exponents
  isObtuse: function(){
    return ((this.sideA * this.sideA) + (this.sideB * this.sideB)) =< (this.sideC * this.sideC)
    //**Test this**
    //I'm not sure this is correct but in my head I don't see why not.
  }
};

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype = {
  length: function(){
    var a = (this.x1 - this.y1);
    var b = (this.x2 - this.x2);
    //Define the variables for the theorem.
  }
  return Math.sqrt((a * a) + (b * b))
  // Return with the product of the Pathagorean theorem using Math.sqrt for getting the square root of the equation.
}

// Need to use the Pathagorean theorem for this as well.
//  A^2 + B^2 = C^2
//  ((x1 - y1)^2 + (x2 - y2)^2) = C^2
// then just take the squar root of C^2

//Augment its prototype with the following method:
//  length – calculates the length of the (x1, y1) --> (x2, y2) line segment.
