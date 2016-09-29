class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length == this.width){
      return true
    }
    else{
      return false
    }
  }
  area(){
    return this.length * this.width
  }
  perimeter(){
    return (this.length*2)+(this.width*2)
  }
}

const rect = new Rectangle(3, 4)


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA === this.sideB === this.sideC){
      return "Equilateral"
    }
    else{
      return "Not Equilateral"
    }
  }
  isIsosceles(){
    if(this.sideA == this.sideB||
      this.sideA == this.sideB||
      this.sideA == this.sideB){
        return true
      }
      else{
        return false
      }
    }
  area(){
    let s = (this.sideA + this.sideB + this.sideC)/2
    return Math.sqrt(s(s-this.sideA)*(s - this.sideB)*(s - this.sideC) )
  }
  isObtuse(){
    let sides = [this.sideA, this.sideB, this.sideC]
    let c = Math.max(sides)
    return c
  }
}

const tri = new Triangle(4, 7, 3)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return Math.sqrt(((this.x2 - this.x1)**2) + ((this.y2 - this.y1)**2))
  }
}

const ls = new LineSegment(1, 2, 3, 5)

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
