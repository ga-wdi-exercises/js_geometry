class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
    console.log(this.length + " and " +this.width);
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
    console.log("The area is " + area1);
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
    console.log(this.sideA+" and "+this.sideB+" and "+this.sideC);
  }
  isEquilateral(){
    if ( this.sideA == this.sideB && this.sideC == this.sideB)
    {
      console.log("Yes it is equilateral triangle!!!");
      return true;
    }
    else{
      console.log("It is not equilater  al triangle!!!");
    }
  }
  isIsosceles(){
    if (this.sideA == this.sideB || this.sideA == this.sideC || this.sideB == this.sideC)
    {
      console.log("Yes it is Isosceless triangle!!!");
      return true;
    }
    else{
      console.log("It is not Isosceless triangle!!!");
    }

  }
  area(){
    var perimeter=(this.sideA+ this.sideB+ this.sideC)/2;
    var area2= Math.sqrt(perimeter*(perimeter-this.sideA)*(perimeter-this.sideB)*(perimeter-this.sideC));
    console.log("The area is " + area2);
  }
  isObtuse(){
    var sideOne=(this.sideA**2)
    var sideTwo=(this.sideB**2)
    var sideThree=(this.sideC**2)

    if (sideOne>(sideTwo+sideThree) || sideTwo>(sideOne+sideThree) || sideThree>(sideOne+sideTwo)){
      console.log("Yes it is Obtuse triangle!!!")
      return true;
    }
    else {
      console.log("No it is not Obtuse triangle!!!")
    }
  }
}

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    console.log(this.x1+" and "+this.x2+" and "+this.y1+" and "+this.y2);

  }
  length(){
    var leng= Math.sqrt(((this.x2-this.x1)**2)+((this.y2-this.y1)**2))
    console.log(leng);
  }
 }

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
