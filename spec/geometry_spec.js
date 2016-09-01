var Geom = require('../geom');
var Rectangle = Geom.Rectangle;
var Triangle = Geom.Triangle;
var LineSegment = Geom.LineSegment;

describe('Rectangle', function() {
  it('is a class that is defined', function () {
    expect(Rectangle).toBeDefined()
  })

  it('checks for squares', function() {
    var rectangle = new Rectangle(3, 3);
    expect(rectangle.isSquare()).toBe(true);
  });

  it('checks for non squares', function() {
    var rectangle = new Rectangle(3, 4);
    expect(rectangle.isSquare()).toBe(false);
  });

  it('calculates area', function() {
    var rectangle = new Rectangle(3,3);
    expect(rectangle.area()).toEqual(9);
  });

  it('finds the perimeter', function() {
    var rectangle = new Rectangle(2, 3);
    expect(rectangle.perimeter()).toEqual(10);
  });
});

describe('Triangle', function() {
  it('is a class that is defined', function () {
    expect(Triangle).toBeDefined()
  })

  it('checks for equilaterals', function() {
    var triangle = new Triangle(2, 2, 2);
    expect(triangle.isEquilateral()).toBe(true);
  });

  it('checks for non equilaterals', function() {
    var triangle = new Triangle(3, 4, 5);
    expect(triangle.isEquilateral()).toBe(false);
  });

  it('checks for isosceles', function() {
    var triangle = new Triangle(3, 5, 3);
    expect(triangle.isIsosceles()).toBe(true);
  });

  it('checks for non isosceles', function() {
    var triangle = new Triangle(1, 2, 3);
    expect(triangle.isIsosceles()).toBe(false);
  });

  it('calculates the area', function() {
    var triangle = new Triangle(4, 5, 3);
    expect(triangle.area()).toEqual(6);
  });

  it('checks for obtuse', function() {
    var triangle = new Triangle(2, 3, 4);
    expect(triangle.isObtuse()).toBe(true);
  });

  it('checks for non obtuse', function() {
    var triangle = new Triangle(9, 40, 41);
    expect(triangle.isObtuse()).toBe(false);
  });
});

describe('LineSegment', function() {
  it('is a class that is defined', function () {
    expect(LineSegment).toBeDefined()
  })

  it('calculates length of a line', function() {
    var line = new LineSegment(2,1, 6,4);
    expect(line.length()).toEqual(5);
  });
});
