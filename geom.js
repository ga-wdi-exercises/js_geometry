class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return (this.length === this.width)
  }
  area(){
    return (this.length * this.width)
  }
  perimeter(){
    return ((this.length * 2) + (this.width * 2))
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return ((this.sideA === this.sideB) && (this.sideA === this.sideC))
  }
  isIsosceles(){
    return ((((this.sideA === this.sideB) && (this.sideA !== this.sideC)) || ((this.sideA !== this.sideB) && (this.sideA === this.sideC))) || ((this.sideA !== this.sideB) && (this.sideB === this.sideC)))
  }
  area(){
    let perimeter = (this.sideA + this.sideB + this.sideC)/2;
    return (Math.sqrt(perimeter * (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC)));
  }
  isObtuse(){
    return ((this.sideA !== this.sideB) && (this.sideA !== this.sideC) || ((((this.sideA === this.sideB) && (this.sideA !== this.sideC)) || ((this.sideA !== this.sideB) && (this.sideA === this.sideC))) || ((this.sideA !== this.sideB) && (this.sideB === this.sideC))))
//does not work 100% of the time
    }
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return (Math.sqrt((this.x2 - this.x1)**2 + (this.y2 - this.y1)**2))
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
