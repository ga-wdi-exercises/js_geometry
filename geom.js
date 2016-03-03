function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype = {
  isSquare: function(){
    this.length===this.width{
      return ("I'm a square")
    }else if ("I'm not a square")
  }
}


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype = {
  isEquilateral: function () {
    this.sideA === this.sideB
    this.sideB === this.sideC {
      return("I'm Equalateral!")
    }
  }
  isIsosceles: function () {
    this.sideA === this.sideB
    this.sideB === this.sideC
    this.sideC === this.sideA
    {
      return("I'm an Isosceles!")
    }
  }
  isObtuse: function () {
    this.sideA === this.sideB
    this.sideB === this.sideC{
      return("I'm Obtuse!")
    }
  }
  area function () {
    return ()

  }

}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype = {

}
