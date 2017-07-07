class Rectangle
{
  constructor(length, width) {
    this.length = length;
    this.width = width;

  }


  isSquare()
  {
    if(this.length===this.width)
    {
    return true;
    }
    else
    {
    return false;
    }

  }


  area()
  {
    return this.length * this.width;
  }

  perimeter()
  {
    return (2*this.length + 2*this.width);
  }
}//end of rectangle function

 var x = new Rectangle(2,3);
console.log(x.isSquare());
console.log(x.area());
console.log(x.perimeter());





class Triangle
{
  constructor(sideA, sideB, sideC)
  {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral()
  {
    if(this.sideA===this.sideB && this.sideB===this.sideC && this.sideC===this.sideA)
    {
      return true;
    }
    else
    {
      return false;
    }
  }




  isIsosceles()
  {
    if(this.sideA===this.sideC ||  this.sideC===this.sideB ||this.sideA===this.sideB )
    {
      return true;
    }
    else
    {
      return false;
    }
  }



  isObtuse()
  {
      var angleA=0
      var angleB=0
      var angleC=0

      //law of cosines
      angleC =Math.acos( (this.sideA**2 + this.sideB**2 - this.sideC**2) / (2*this.sideA*this.sideB) );
      console.log(angleC);

      //law of sines
      angleB = Math.asin((Math.sin(angleC)*this.sideB)/this.sideC);

      console.log(angleB);


      angleA = Math.PI-angleC- angleB;


      console.log(angleA + "  "+ angleB + " "+angleC);

    //  the following are just angles in degrees if anyone interested
      console.log(angleA*180/Math.PI)
      console.log(angleB*180/Math.PI)
      console.log(angleC*180/Math.PI)

      return(angleA>Math.PI/2 || angleB >Math.PI/2 || angleC >Math.PI/2)




  }//end of isObtuse

}//end of triangle


var y = new Triangle(10,10,19);
console.log("triangle output");

console.log(y.isIsosceles());
console.log(y.isEquilateral());
console.log(y.isObtuse());



class LineSegment
{
    constructor(x1, y1, x2, y2){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }


  length()
  {
    return Math.sqrt( (this.x2-this.x1)**2   +  (this.y2-this.y1)**2   )
  }


}

var z = new LineSegment(1,3,10,45);
console.log(z.length());



// //NOTE: DO NOT REMOVE OR ALTER
// module.exports =
// {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
