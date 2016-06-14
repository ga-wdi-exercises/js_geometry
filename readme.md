# Geometry

## Testing with Mocha

- [Mocha](https://mochajs.org/)
- [Chai BDD](http://chaijs.com/api/bdd/)

Install the latest official version of Mocha

```bash
$ npm install -g mocha
```

Install dependencies

```bash
$ npm install mocha chai --save-dev
```

Write tests

- 'test/*.js'

Run tests

```bash
mocha
```

or

```bash
npm run test
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
