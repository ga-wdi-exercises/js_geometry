class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if(this.width === this.length) return true; else{return false;}
    // let x = (this.width === this.length) ? true : false;
  }//end isSquare
  area(){
    return this.width * this.length;
  }
  perimeter(){
    return (this.length*2)+ (this.width*2);
  }

}//end Rectangle
//
let shapeOne = new Rectangle(5,4);
let shapeTwo = new Rectangle(5,5);
let shapeThree = new Rectangle(6,3);
let shapeFour = new Rectangle(8,8);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }//end constructor

  isEquilateral(){
    if(this.sideA === this.sideB && this.sideB === this.sideC)return true;
    else{return false}
  }
  isIsosceles(){
    if(this.sideA === this.sideB || this.sideB === this.sideC ||this.sideA === this.sideC) return true;
    else{return false;}
  }
  area(){
    let half = (1/2);
    let sp =(half*(this.sideA+this.sideB+this.sideC));
    return Math.sqrt(sp*(sp-this.sideA)*(sp-this.sideB)*(sp-this.sideC))
  }
  isObtuse(){
  return [(Math.pow(this.sideA,2))+(Math.pow(this.sideB,2))] < (Math.pow(this.sideC,2))
  }

}//end Triangle class


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
