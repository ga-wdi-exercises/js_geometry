
//Define a `Rectangle` class. Its constructor should take a `length` and `width` as arguments.

//Augment the class with the following methods...
//* `isSquare` - returns true if the rectangle is a square.
//* `area` - calculates the area of the rectangle.
//* `perimeter` - calculates the perimeter of the rectangle.

//Create a few rectangles with different lengths and widths.






class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

Rectangle.Square = {
  isSquare: function() {
    return (this.length===this.width);
  }

Rectangle.area = {
  area:function() {
    return (this.length * this.width);

}

Rectangle.perimeter = {
  perimeter:function()
  return (2 * this.length + 2 * this.width);
}

Rectangle.more = {
  more:function()
  return (5 * this.length + 10 * this.width);
}


//Define a `Triangle` class. Its constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.

//Augment the class with the following methods...
//* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).
//* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).
//* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).
//* `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).

//Create a few rectangles with different lengths and widths.

class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

  }
}

Triangle.equilateral = {
  isEquilateral: funtion() {
    return this.sideA === this.sideB === this.sideC
  }
}

Triangle.isosceles = {
  isIsosceles: function() {
    return this.sideA === this.sideB || this.sideC
  }
}

Triangle.obtuse = {
  isObtuse:function() {
  return (this.sideA > this.sideB === this.sideC)
}

Triangle.extra = {
  isExtra:function() {
  return (this.sideA > this.sideB > this.sideC)
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
