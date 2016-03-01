function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
  isSquare: function() {
    return this.length === this.width;
  },

  area: function(){
    return this.length + this.width;
  },

  perimeter: function(){
    return 2 * (this.length * this.width);
  }

};

 var rectangle = new Rectangle(2, 3);
 console.log(rectangle.area());


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  isEquilateral: function(){
    return (this.sideA === this.sideB && this.sideB === this.sideC);
  },

  isIsosceles: function(){
    if (this.sideA === this.sideB){
      return true;
    } else if (this.sideB === this.sideC){
      return true;
    } else if (this.sideC === this.sideA){
      return true;
    } else {
      return false;
    }
  }, // close isIsosceles triangle

  area: function(){
    var s = (this.sideA + this.sideB + this.sideC)/2; // s = semiperimeter
    var area = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
    return area;
  },

  isObtuse: function(){

  }
  // not sure
  }

//var triangle = new Triangle(5, 5, 2);
//console.log(triangle.area());

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

// use distance formula
LineSegment.prototype = {
  distance: function(){
    var distance = Math.sqrt(((this.x1-this.x2)*(this.x1-this.x2))+((this.y1-this.y2)*(this.y1-this.y2)))

    return distance;
  }
}

var lineSegment = new LineSegment(2,3,5,4);
console.log("distance " + lineSegment.distance());
