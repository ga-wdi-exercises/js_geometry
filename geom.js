const PI=Math.PI;


class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    return(this.length==this.width);
  }/* isSquare Method */
  area() {
    return(this.length * this.width);
  }/* area Method */
  perimeter() {
    return(this.length*2)+(this.width*2);
  }/* parimeter */
} /* class */

class AdjacentSides {
    constructor(longestSide,triangle) {
      this.longestSide=longestSide;
      this.adjacent=[];
      this.triangle=triangle;
  }   /* constructor */
   getAdjSides(){
    const sideA=this.triangle.sideA;
    const sideB=this.triangle.sideB;
    const sideC=this.triangle.sideC;

    switch (this.longestSide) {
      case sideA:
           this.adjacent.push(sideB);
           this.adjacent.push(sideC);
          break;
      case sideB:
          this.adjacent.push(sideA);
          this.adjacent.push(sideC);
      break;
      case sideC:
          this.adjacent.push(sideA);
          this.adjacent.push(sideB);
        break;
      default:
        break;
    } /* switch */
  } /* method getAdjSides */
} /* class AdjacentSides */

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
   isEquilateral(){
     /* - returns true if the triangle is equilateral. */
     return (this.sideA==this.sideB) && (this.sideB==this.sideC);
   }
   parameter () {
     return this.sideA+this.sideB+this.sideC;
   }
   isIsosceles() {
     /* - return true if the triangle is isosceles. */
  return   this.sideA ==this.sideB || this.sideB==this.sideC || this.sideA ==this.sideC
   }




  area() {

  /********************************************************************
  * - calculates the area of the Triangl using Heron's formula.
  *             ___________________________________________
  *    Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
  *        Where p is perimeter /2
  * *******************************************************************/

   let p=this.parameter()/2;  /* calculate 1/2 parameter */
   return Math.sqrt(p*(p-this.sideA) * (p-this.sideB) * (p-this.sideC));
  }
  getLongestSegment() {
  return Math.max(this.sideA,this.sideB,this.sideC);
  }

  isObtuse() {
    /* - returns true if the triangle is obtuse. */
/*    obtuse angle definition. An angle that measures more than
    90 degrees but less than 180 degrees. (Compare acute angle
    and right angle.) */
/*
    To solve an SSS triangle:
use The Law of Cosines first to calculate one of the angles.
then use The Law of Cosines again to find another angle.
and finally use angles of a triangle add to 180° to find the last angle. */


 let side1=this.getLongestSegment(); /* find the largest side */
 let adjSides= new AdjacentSides(side1,this); /* find adjecent sides */
 adjSides.getAdjSides();
 let side2=adjSides.adjacent[0];
 let side3=adjSides.adjacent[1];

  console.log("side1=",side1,"side2=",side2,"side3=",side3);
  let cosB = ((side2*side2)+(side3*side3)-(side1*side1))/(2*side2*side3);
  console.log("cosB=",cosB)
  let radB=Math.acos(cosB);
  console.log('radB=',radB);
  let degB=(180*radB)/PI;
  console.log('degb=',degB);
  return ( degB >90);

}/* method obtuse */
/* side1 is longest angle oppsite of side 1 is greatest */
/*  a=side 2 b=side3  b=side1 */



/*
  B is the largest angle, so find B first using the Law of Cosines:

cos B = (a2 + c2 − b2) / 2ac
cos B = (11.62 + 7.42 − 15.22) / (2×11.6×7.4)
cos B = (134.56 + 54.76 − 231.04) / 171.68
cos B = −41.72 / 171.68
cos B = −0.2430...
B = 104.1° to one decimal place
*/

} /* class Triangle */

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length () {
    /*  length – calculates the length of the (x1, y1) --> (x2, y2) line segment. */
    /********************************************************************
    * - calculates the area of the Triangl using Heron's formula.
    *               ___________________________________________
    *    Area	=	 	 /              2                  2
    *             √	 (	x2 −	x1)    + 	(	y2	−	y1	)
    *
    * *******************************************************************/
        /* find difference between two points */
      let x1=this.x1;
      let x2=this.x2;
      let y2=this.y2;
      let y1=this.y1;
       /* square differnce */
      let xsq= (x2-x1) * (x2-x1);
      let ysq= (y2-y1) * (y2-y1);
      let ss= xsq+ysq;
      return Math.sqrt(ss);  /* return sq root of difference */

  } /* length method */




}

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }

const bigRectangle= new Rectangle (20,20);
const medRectangle= new Rectangle (10,15);
const smallRectangle= new Rectangle (5,5);
console.log("Calling isSquare",bigRectangle.isSquare());
console.log("Area of med Rectangle =",medRectangle.area());
console.log("Perimeter of small Rectangle = ",smallRectangle.perimeter());
const tri1= new Triangle(5,5,5);
console.log("isosceles= " ,  tri1.isIsosceles() );
console.log("area", tri1.area())
const tri2= new Triangle( 11.62, 7.42,15.22);
console.log ( "Obtuse", tri2.isObtuse());
const tri3= new Triangle( 11.25, 6,8);
console.log ( "Obtuse", tri3.isObtuse());
const tri4= new Triangle( 3, 3,3);
console.log ( "Obtuse", tri4.isObtuse());
const tri5= new Triangle( 3, 4,5);
console.log ( "Obtuse", tri5.isObtuse());
const tri6= new Triangle( 7, 4,4);
console.log ( "Obtuse", tri6.isObtuse());

const ls2=new LineSegment(0,0,3,0);
console.log("Line Segment 0,0,3,0 = ",ls2.length());

const ls1=new LineSegment(1,1,4,5);
console.log("Line Segment 1,1,4,5 = ",ls1.length());
