class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare (length, width) {
    if (this.length===this.width) {
      return `True`;
    } else {
      return `False`;
    }
  }

  area (length, width) {
    return this.length * this.width;
  }

  perimeter (length, width) {
    return (2*this.length)+ (2*this.width)
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral (sideA, sideB, sideC) {
    if (this.sideA===this.sideB && this.sideB===this.sideC) {
      return 'True'
    } else {return 'False' }
  }

  isIsosceles (sideA, sideB, sideC){
    if (this.sideA===this.sideB && this.sideA > this.sideC) {
      return 'True'
    } else if (this.sideB===this.sideC && this.sideB > this.sideA){
      return 'True'
    } else if (this.sideA===this.sideC && this.sideA >this.sideB){
      return 'True'
    } else { return 'False'
    }
  }

  calcHeight(sideA, sideB, sideC) {
    if (this.sideB==this.sideC) {
     height=sqrt((this.sideB**2)-((.25)(this.sideA**2))
     return
   } else if (this.sideB==this.sideA) {
      height=sqrt((this.sideB**2)-((.25)(this.sideC**2))
     return
   } else if (this.sideA==this.sideC) {
      height=sqrt((this.sideA**2)-((.25)(this.sideB**2))
     return
   }
  }

triangeArea (sideA, sideB, sideC) {
  var height = calcHeight()

    if (this.sideB==this.sideC) {
      (.5)*(this.sideA)*(height)
    } else if (this.sideB==this.sideA){
      (.5)*(this.sideC)*(height)
    } else if (this.sideC==this.sideA) {
      (.5)*(this.sideC)*(height)
    }
  }

// isObtuse () {}
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  return sqrt {((this.x1-this.x2)**2)+(this.y1-this.y2)**2}
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
