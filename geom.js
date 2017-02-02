class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  square(){
    if(this.length == this.width){
    console.log("this is a square")
      }
    else{
      console.log("not a square")
     }
}

  area1(){
    var area = this.length*this.width
    console.log(area)
  }

  perimeter(){
    var parimeter = this.length*2 + this.width*2
    console.log(parimeter)
  }
}

let polygon1 = new Rectangle(10,5)


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  checkType(){
    if (this.sideC == this.sideB && this.sideA){
      console.log("it is equal")
    }
    else if(this.sideA == this.sideB || this.sideB == this.sideC){
      console.log("isosceles")
    }
    else{
      console.log("this is obtuse")
    }
  }
  area2(){
    var s = ((this.sideA + this.sideB + this.sideC)/2)
    var area = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
    console.log(area)
  }
}

let polygon2 = new Triangle(2,2,2)


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  distance(){
    var distance = Math.sqrt((this.x2 - this.x1)*(this.x2 - this.x1)+(this.y2 - this.y1)*(this.y2 - this.y1))
    console.log(distance)
  }
}

let polygon4 = new LineSegment(4,5,-1,10)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
