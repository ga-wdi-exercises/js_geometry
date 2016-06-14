var expect = require("chai").expect;

var LineSegment = require( '../lib/line_segment.js' );

describe('LineSegment', function() {



  describe('#length()', () => {
    it('returns a correct length of the line segment', () => {
      var lineSegment = new LineSegment(2, -3, -1, -2);
      expect(lineSegment.length()).to.closeTo(3.16, 0.01);
    });
  });

  describe('#isValid()', () => {
    it('returns false if it is a point', () => {
      var lineSegment = new LineSegment(2, 4, 2, 4);
      expect(lineSegment.isValid()).to.be.false;
    });
    it('returns true if it is a valid line segment', () => {
      var lineSegment = new LineSegment(2, 2, 5, 9);
      expect(lineSegment.isValid()).to.be.true;
    });
  });
});
