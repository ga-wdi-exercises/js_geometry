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
    /*  - calculates the area of the Triangle. */
/*    Area	=	 √	 p	 (	p	−	a	) 	(	p	−	b	)	 (	p	−	c	)
where p is half the perimeter, or
a	+	b	+	c
2
*/
   let p=this.parameter()/2;
   console.log(p)
   return Math.sqrt(p*(p-this.sideA) * (p-this.sideB) * (p-this.sideC));

  }

  isObtuse() {
    /* - returns true if the triangle is obtuse. */
/*
    obtuse angle definition. An angle that measures more than
    90 degrees but less than 180 degrees. (Compare acute angle
    and right angle.) */
/*
    To solve an SSS triangle:
use The Law of Cosines first to calculate one of the angles.
then use The Law of Cosines again to find another angle.
and finally use angles of a triangle add to 180° to find the last angle. */

/* find the largest side */
 let side1=0;
 let side2=0;
 let side3=0;

  if ( this.sideA > this.sideB) {
      side1=this.sideA;
  } else {
     side1=this.sideB;
  }
   if (side1 < this.sideC) {
    side1 = this.sideC
   }

  switch (side1) {
    case this.sideA:
        side2=this.sideB;
        side3=this.sideC;
        break;
    case this.sideB:
        side2=this.sideA;
        side3=this.sideC;
        break;
    case this.sideC:
        side2=this.sideA;
        side3=this.sideB;
      break;
    default:
      break;
  } /* switch */

  console.log("side1=",side1,"side2=",side2,"side3=",side3);
  let cosB = ((side2*side2)+(side3*side3)-(side1*side1))/(2*side2*side3);
  console.log("cosB=",cosB)
  let radB=Math.acos(cosB);
  console.log('radB=',radB);
  let degB=(180*radB)/3.14159;
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
