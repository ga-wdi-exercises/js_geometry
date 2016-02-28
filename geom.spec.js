var Geom = require('./geom');
var Rectangle = Geom.Rectangle;

describe('Rectangle', function() {

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
