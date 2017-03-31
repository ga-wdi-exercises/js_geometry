class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

isSquare(){
  return (this.length===this.width)
  }


area(){
  return (this.length*this.width)
}


perimeter(){
  return 2 * (this.length+this.height)
}

}
var square = new Rectangle(10,10);
console.log(square);
console.log(square.isSquare());
console.log(class Rectangle {
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

isSquare(){
  return (this.length===this.width)
  }


area(){
  return (this.length*this.width)
}


perimeter(){
  return 2 * (this.length+this.height)
}


var square = new Rectangle(10,10){
console.log(square)
console.log(square.isSquare())
console.log(square.area);
console.log(square.perimeter);



}

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
}
isEquilateral(){
  if(this.sideA===this.sideB&&this.sideB====this.sideC){
      return true;
  }
}
  isIsosceles(){
this.sideA===this.sideC||
this.sideB===this.sideC){
     return true;
  }
}
isArea(){
  (this.sideA * this.sideB * this.sideC)
  }

  isObtuse(){
    if(this.sideA !== this.sideB && this.sideA !==this.sideC && this.sideB !==this.sideC){
      return true;
    }
  }
}

var triangle = new triangle(30,30,45)
console.log(triangle)
console.log(triangle.isIsosceles())


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}
length(){
  return (Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2)))
 }
}
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}

var distance = new LineSegment(4,2,8,2);
console.log (distance.length());
console.log (distance);
