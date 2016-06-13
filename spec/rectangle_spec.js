var jasmineExpect = require( 'jasmine-expect' );
var Rectangle      = require( '../lib/rectangle.js' );

describe('Rectangle', function() {
  var rectangle = new Rectangle(2, 4);
  it('has width and length', function() {
    expect(rectangle.length).toEqual(2);
    expect(rectangle.width).toEqual(4);
  });

  describe('#isSquare()', function() {
    it('returns false if it is not a square', function() {
      expect(rectangle.isSquare()).toBeFalse();
    });
    it('returns true if it is a square', function() {
      var square = new Rectangle(9, 9);
      expect(square.isSquare()).toBeTrue();
    });
  });

  describe('#area()', function() {
    it('returns a correct area', function() {
      var square = new Rectangle(2, 4);
      expect(square.area()).toBe(8);
    });
    it('returns 0 if either side is less than 0', function() {
      var invalidRectangle = new Rectangle(-999, 4);
      expect(invalidRectangle.area()).toBe(0);
    });
  });

  describe('#perimeter()', function() {
    it('returns a correct perimeter', function() {
      var square = new Rectangle(2, 4);
      expect(square.perimeter()).toBe(12);
    });
    it('returns 0 if either side is less than 0', function() {
      var invalidRectangle = new Rectangle(-999, 4);
      expect(invalidRectangle.perimeter()).toBe(0);
    });
  });
});
