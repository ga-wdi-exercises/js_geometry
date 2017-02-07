# Geometry

> **NOTE:** You can ignore the `module is not defined` error you see in the console when opening `index.html` in the browser. You should still be able to test your code.

## Rectangle

Define a `Rectangle` class. Its constructor should take a `length` and `width` as arguments.

Augment the class with the following methods...
* `isSquare` - returns true if the rectangle is a square.
* `area` - calculates the area of the rectangle.
* `perimeter` - calculates the perimeter of the rectangle.

Create a few rectangles with different lengths and widths.

**Bonus**: Test your outcomes using [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!

## Triangle

Define a `Triangle` class. Its constructor should take three sides -- `sideA` `sideB` and `sideC` -- as arguments.

Augment the class with the following methods...
* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).
* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).
* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).
* `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).

Create a few rectangles with different lengths and widths.

**Bonus**: Test your outcomes using [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!


## LineSegment

Define a `LineSegment` class. Its constructor should take two pairs of coordinates -- `x1` `y1` `x2` `y2` -- as arguments.

Augment the class with the following method...
* `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).
