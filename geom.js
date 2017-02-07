class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

isSquare(){
  if(this.length == this.width){
    return true;
  } else {
    return false;
  }
}

area(){
  return this.length * this.width;
}

perimeter(){
  return(this.length+this.width)*2;
  }
}

const smallRectangle = new Rectangle(10,20);
const mediumRectangle = new Rectangle(100, 200);
const largeRectangle = new Rectangle(1000, 2000);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA == this.sideB && this.sideA == this.sideC && this.sideB == this.sideC){
      return true;
    } else {
      return false;
    }
  }
  isIsosceles(){
    if(this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC){
      return true;
    } else {
      return false;
    }
  }
  area(){
    var s = (this.sideA+this.sideB+this.sideC)/2;
    return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
  }
}

isObtuse(){
  
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return Math.sqrt(Math.pow((this.x1-this.x2),2)+(Math.pow((this.y1-this.y2),2)));
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
