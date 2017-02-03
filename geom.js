
class Rectangle{
  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  isSquare(){
    if(this.length === this.width){
      return true;

    }else{
      return false;
    }

  }

  area(){

     return this.area = this.length * this.width;

  }
  perimeter(){

  return this.perimeter = 2 *( this.length + this.width);
  }
}


let newRec = new Rectangle(3,3)
console.log(newrec.area);
//checking for square
newRec.isSquare()
//for area
let newrec = new Rectangle(3,4)
//newRec.area()
//for perimeter
let newRec = new Rectangle(3,6)
//newRec.perimeter()



class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if( (this.sideA == this.sideB) && (this.sideA == this.sideC)){
      return true;

    }else{
      return false;
    }
  }
  isIsosceles(){
    if((this.sideA == this.sideB) || (this.sideA == this.sideC) || this.sideB == this.sideC )){
      return true;
    }
    else{
      return false;
    }
  }
  areaTriangle(){
    let s = (this.sideA + this.sideB + this.sideC)/2;
    return this.area = Math.sqrt(s(s - this.sideA) * (s - this.sideB ) * (s - this.sideC));
  }

  isObtuse(){
    let A = [this.sideA, this.sideB, this.sideC];
    A.sort();
    if ( (Math.pow(A[2],2) > ((Math.pow(A[1],2) + Math.pow(A[0],2)){
      return true

    } else{
      return false
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
    return Math.sqrt(Math.pow((this.x2 - this.x1),2) + Math.pow((this.y2 - this.y1),2))
  }
}
*/
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
