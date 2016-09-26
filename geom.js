class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length === this.width){
      return true
    }else{
      return false
    }
  }
  area(){
    let area = (this.length * this.width)
    console.log(`The area of the rectangle is ${area}`)
  }
  perimeter(){
    let perimeter = ((2*this.length) + (2 * this.width))
    console.log(`The perimeter of the rectangle is ${perimeter}`)
  }

}

const newRectangle = new Rectangle(6,3);


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (sideA===sideB && sideA===sideC){
      return true
  }else{
      return false
    }
}
  isIsosceles(){
    if (sideA===sideB || sideA ===sideC || sideB === sideC){
      return true
    }else{
      return false
    }
  }
  area(base, height){
    var s = ((this.sideA +this.sideB + this.sideC)/2)
    return Math.sqrt((s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC)))
  }
  isObtuse(){ //map
    var newArray = [this.sideA, this.sideB, this.sideC].sort()
    if (((newArray[0]**2) + (newArray[1]**2)) < (newArray[2]**2)) {
      return true
    }else{
      return false
    }
  }
}

const newTriangle= new Triangle(2,3,4);


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    var distance = Math.sqrt(((this.x2-this.x1)**2) + ((this.y2-this.y1)**2))
    return distance
  }
  }

  const newLineSegment= new LineSegment(2,2,4,4);



// //NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
