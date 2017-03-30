class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
      if(this.length === this.width){
          return true;
      }
  }

  area(){
     return this.length * this.width
  }

perimeter(){
    return 2 * (this.length + this.width)

}
}


var square = new Rectangle(30, 30);
console.log(square)
console.log(square.isSquare())



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
      if(this.sideA===this.sideB&&this.sideB===this.sideC){
          return true;
      }
}
  isIsosceles(){
      if(this.sideA===this.sibeB||this.sideA===this.sideC||this.sideB===this.sideC){
          return true
      }
  }
  isArea(){
      (this.sideA * this.SideB * this.sideC)
  }

  isObtuse(){
      if(this.sideA !== this.sideB && this.sideA !== this.sideC && this.sideB !== this.sideC){
       return true;
     }
  }
}

var triangle = new Triangle(30,30,45)
console.log(triangle)
console.log(triangle.isIsosceles())



  class LineSegment {
   constructor(x1, y1, x2, y2){
     this.x1 = x1;
     this.y1 = y1;
     this.x2 = x2;
     this.y2 = y2;
   }
   length(){
      return (Math.sqrt(Math.pow((this.x2-this.x1),2)+Math.pow((this.y2-this.y1),2)))
   }
  }


  //    return (Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2))
  var distance = new LineSegment(4,2,8,2);
  console.log (distance.length());
  console.log (distance);

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
