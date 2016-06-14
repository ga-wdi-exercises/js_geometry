function LineSegment( x1, y1, x2, y2 ) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

// Returns the length of the (x1, y1) --> (x2, y2) line segment.
LineSegment.prototype.length = function() {
  let dX = this.x1 - this.x2;
  let dY = this.y1 - this.y2;
  return Math.sqrt( Math.pow(dX, 2) + Math.pow(dY, 2)  );
}

// Returns true if it is a valid line segment.
LineSegment.prototype.isValid = function() {
  // The two points must be different.
  return (this.x1 !== this.x2) && (this.y1 !== this.y2);
}

module.exports = LineSegment;
