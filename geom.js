class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length === this.width){
      return true;
    }
    else {
      return false;
    }
  }
  area(){
    return(this.length * this.width);
    console.log(area)

  }
  perimeter(){
    return (2*(this.length+this.width))
    console.log(perimeter)
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if(this.sideA === this.sideB && this.sideA === this.sideC){
      return true;
    }
    else{
      return false;
    }
  }
    isIsosceles(){
      if(this.sideA === this.sideB || this.sideA === this.sideC){
        return true;
      }
      else{
        return false;
      }
    }
    area(){
    let perimeter = this.sideA + this.sideB + this.sideC
    let height = perimeter / 2
    console.log(Math.sqrt(height*(height-this.sideA)*(height-this.sideB)*(height-this.sideC)))
  }
  isObtuse(){
if ((this.sideA**2 + this.sideB**2) < (this.sideC**2)){
return true;
}
else{
  return false;
}
  }
//     isObtuse(){
//       if
//     }
}




class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  changeLength(){
    
  }
}
//
// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }

const firstRectangle = new Rectangle(2, 4)
const secondRectangle = new Rectangle(3, 7)
console.log(firstRectangle)
const equiTriangle = new Triangle(5,5,5)
console.log(equiTriangle)
const isoTriangle = new Triangle (3, 3,4)
console.log(isoTriangle)
const obtuseTriangle = new Triangle (2, 4, 5)
