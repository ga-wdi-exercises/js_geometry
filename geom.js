class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return (this.length === this.width)
  }
  perimeter(){
    return (this.length*2)+(this.width*2)
  }
  area(){
    return this.width * this.length
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    return( this.sideC === this.sideB && this.sideB === this.sideA)
  }
  isIsosceles(){
    return (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC)
  }
  area(){
    let a = this.sideA
    let b = this.sideB
    let c = this.sideC
    let halfP = (a+b+c)/2
    let step2 = (halfP - a) * (halfP - b) * (halfP - c)
    let step3 = step2*halfP
    
    return Math.sqrt( step3 )
  }
  isObtuse(){
    //a2+b2<c2
    //c always longest
    if (this.sideA > this.sideB && this.sideA > this.sideC) {
      //b2+c2<a2
      return Math.pow(this.sideB,2)+Math.pow(this.sideC,2) < Math.pow(this.sideA,2)
    
    }else if (this.sideB > this.sideA && this.sideB > this.sideC) {
      //c2+a2<b2
      return Math.pow(this.sideC,2) + Math.pow(this.sideA,2) < Math.pow(this.sideB,2)
    
    }else if (this.sideC > this.sideA && this.sideC > this.sideB) {
      //b2+a2<c2
      return Math.pow(this.sideB,2) + Math.pow(this.sideA,2) < Math.pow(this.sideC,2)
    
    }else {
      return " Triangle is not is not Obtuse"
    }
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
      return Math.sqrt(Math.pow((this.x2-this.x1),2) + Math.pow((this.y2-this.y1),2))
  }
}
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
