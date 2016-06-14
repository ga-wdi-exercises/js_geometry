var expect = require("chai").expect;

var Rectangle = require( '../lib/rectangle.js' );

describe('Rectangle', () => {
  var rectangle = new Rectangle(2, 4);
  it('has width and length', () => {
    expect(rectangle.length).to.equal(2);
    expect(rectangle.width).to.equal(4);
  });

  describe('#isSquare()', () => {
    it('returns false if it is not a square', () => {
      expect(rectangle.isSquare()).to.be.false;
    });
    it('returns true if it is a square', () => {
      var square = new Rectangle(9, 9);
      expect(square.isSquare()).to.be.true;
    });
  });

  describe('#area()', () => {
    it('returns a correct area', () => {
      var square = new Rectangle(2, 4);
      expect(square.area()).to.equal(8);
    });
    it('returns 0 if either side is less than 0', () => {
      var invalidRectangle = new Rectangle(-999, 4);
      expect(invalidRectangle.area()).to.equal(0);
    });
  });

  describe('#perimeter()', () => {
    it('returns a correct perimeter', () => {
      var square = new Rectangle(2, 4);
      expect(square.perimeter()).to.equal(12);
    });
    it('returns 0 if either side is less than 0', () => {
      var invalidRectangle = new Rectangle(-999, 4);
      expect(invalidRectangle.perimeter()).to.equal(0);
    });
  });
});
