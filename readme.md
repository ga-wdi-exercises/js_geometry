# Geometry

## Testing with Jasmine (jasmine-node)

- [jasmine](http://jasmine.github.io/2.0/introduction.html)
- [jasmine-node](https://github.com/mhevery/jasmine-node)

Install the latest official version

```bash
$ npm install -g jasmine-node
```

Install dependencies

```bash
# Install jasmine-node and jasmine-expect that are specified in package.json
$ npm install
```

Write tests

- 'spec/*spec.js'

Run tests

```bash
npm run test # jasmine-node spec
```

or

```bash
jasmine-node spec
```

---

## TODO

#### Triangle

Given the following constructor function:

```
function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
```

Augment its prototype with the following methods:

* `isEquilateral` - returns true [if the triangle is equilateral](http://en.wikipedia.org/wiki/Equilateral_triangle).
* `isIsosceles` - return true [if the triangle is isosceles](http://en.wikipedia.org/wiki/Isosceles_triangle#By_relative_lengths_of_sides).
* `area` - calculates the [area of the Triangle](http://en.wikipedia.org/wiki/Heron%27s_formula).
* `isObtuse` - returns true [if the triangle is obtuse](http://en.wikipedia.org/wiki/Isosceles_triangle#By_internal_angles).

Create a few rectangles with different lengths and widths.

Bonus: Test your outcomes using [Jasmine](https://github.com/ga-wdi-lessons/js-jasmine)!


#### LineSegment

Given the following constructor:

```
function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
```
Augment its prototype with the following method:

* `length` – calculates the length of the (x1, y1) --> (x2, y2) [line segment](http://en.wikipedia.org/wiki/Pythagorean_theorem).
