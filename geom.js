class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(length, width){
    if(this.length === this.width){
      console.log("this is a square")
    } else{
      console.log("this is not a square")
    }
  }
  area(length, width){
    console.log(this.length * this.width);
  }
  perimeter(length, width){
    console.log(this.length * 2 + this.width * 2)
}
};


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(sideA, sideB, sideC){
    if(this.sideA == this.sideB && this.sideA == this.sideC){
      console.log("this is an equalateral triangle.")
    }else{
      console.log("this is not an equalateral triangle")
    }
  }
  isIsosceles(sideA, sideB, sideC){
    if(this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC){
      console.log("this is an isosceles triangle.")
    }else{
      console.log("this is not an isosceles triangle")
    }
  }
  area(sideA, sideB, sideC){
    let s = (this.sideA + this.sideB + this.sideC)/2
    let area = Math.sqrt(s * (s-this.sideA)*(s-this.sideB)*(s-this.sideC))
    console.log(area)
  }
  isObtuse(sideA, sideB, sideC){
    let squareA = Math.pow(this.sideA, 2)
    let squareB = Math.pow(this.sideB, 2)
    let squareC = Math.pow(this.sideC, 2)
    if (squareA + squareB < squareC){
      console.log("this is an obtuse triangle.")
    } else{
      console.log("this is not an obtuse triangle")
    }
  }

};

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
length(x1, y1, x2, y2){
  let m = (this.x1 -(-this.y1))/this.x2-this.y2
  console.log(m)
}

}
const happy = new Rectangle(6, 6);
const sad = new Rectangle(5, 7);
const pyramid = new Triangle(1, 1, 1);
const tri = new Triangle(10, 20, 20);
const lineL = new LineSegment(1,4, 5, 1);

// // NOTE: DO NOT REMOVE OR ALTER
module.exports = {
 Rectangle: Rectangle,
 Triangle: Triangle,
LineSegment: LineSegment
}
