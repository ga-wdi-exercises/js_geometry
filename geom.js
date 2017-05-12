class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length==this.width)
    {
      console.log("Yes it is square");
      return true;
    }
    else{
      console.log("It is not a square?");
    }
  }
  area(){
    let area1= this.length * this.width;
    console.log("The area is " +area1);
  }
  perimeter(){
    let perim= 2*(this.length + this.width);
    console.log("The perimeter is " + perim);

  }
}

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (sideA==sideB and sideB=sideC )
    {
      return true;
      console.log("Yes it is equilateral triangle");
    }
    else{
      console.log("It is not equilateral triangle?");
    }

  }
  isIsosceles(){
    if (sideA==sideB || sideB=sideC || sideA=sideC)
    {
      return true;
      console.log("Yes it is Isosceless triangle");
    }
    else{
      console.log("It is not Isosceless triangle?");
    }

  }
  area(){
    perimeter=(sideA+ sideB+ sideC)/2;
    area2=math.sqrt(perimeter*(perimeter-sideA)*(perimeter-sideB*(perimeter-sideC)
    console.log("The area is " +area2);
  }
  isObtuse(){

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
    var leng=math.sqrt(((this.x2-this.x1)**2)+((this.y2-this.y1)**2))
    console.log(leng);
  }
 }

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
