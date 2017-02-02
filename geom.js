class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  isSquare () {
    if (this.length === this.width) {
      console.log ("This is a sqaure.")
      return true
    }
    else {
      return false
    }
  }
  area () {
    let area = this.length * this.width
    console.log (`The area of the rectangle is ${area}.`)
    return area;
  }
  perimeter () {
    let perimeter = (2*this.length) + (2*this.width)
    console.log (`The perimeter of the rectangle is ${perimeter}`)
    return perimeter;
  }
}
const square = new Rectangle (4,4);
const shape1 = new Rectangle (9,3);
const shape2 = new Rectangle (8,6);

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral () {
    if ((this.sideA === this.sideB) && (this.sideA === this.sideC)) {
      console.log ("Equilateral triangle.")
      return true;
    }
    else {
      console.log ("This isn't an equilateral triangle.");
    }
  }

  isIsosceles () {
    if ((this.sideA === this.sideB) || (this.sideA === this.sideB) || (this.sideB === this.sideC)) {
      console.log ("This is an isosceles triangle.")
      return true;
    }
    else {
      console.log ("This isn't an isosceles triangle.")
    }
  }

  area () {
    let half_perim = (this.sideA + this.sideB + this.sideC)/2;
    console.log(half_perim);
    let perim_a = (half_perim - this.sideA);
    console.log(perim_a);
    let perim_b = (half_perim - this.sideB);
    console.log(perim_b);
    let perim_c = (half_perim - this.sideC);
    console.log(perim_c);
    let area_of_tri = Math.sqrt(half_perim * perim_a * perim_b * perim_c);
    return area_of_tri;
    console.log (area_of_tri);
  }

  isObtuse () {
    let side1 = this.sideA;
    let side2 = this.sideB;
    let side3 = this.sideC;
    let longest_side = Math.max(side1,side2,side3);
    if ((longest_side**2 > (side1 **2) + (side2 ** 2))) {
      console.log ("This is an obtuse triangle.")
      return true;
    }
  }

}

const triangle1 = new Triangle (4,4,4);
const triangle2 = new Triangle (3,4,5);
const triangle3 = new Triangle (5,7,8);

class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  length () {
    let diff_btw_x = this.x2 - this.x1;
    let diff_btw_y = this.y2 - this.y1;
    let calc_length = Math.sqrt((diff_btw_x**2)+(diff_btw_y**2))
    console.log (calc_length);
  }
}

const line1 = new LineSegment(4,2,9,3);
/*
// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}*/
