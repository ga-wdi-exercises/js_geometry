class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    this.length === this.width? true:false
    }
  }
  area(){
    return this.length * this.width
  }
  permiter(){
   return  (this.length * 2) + (this.width * 2)
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    (this.sideA === this.sideB && this.sideB === this.sideC)

  }
  isIsoceles(){
    (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC)


  }
  area(){
    semiperim = (this.sideA + this.sideB + this.sideC) / 2
    return Math.sqrt(semiperim*((semiperim - this.sideA)*(semiperim - this.sideB)*(semiperim - this.sideC)))

  }
  isObtuse(){

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
    
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
