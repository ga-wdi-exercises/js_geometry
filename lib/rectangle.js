function Rectangle( length, width ) {
  this.length = length;
  this.width  = width;
}

// Returns true if the rectangle is a square.
Rectangle.prototype.isSquare = function() {
  return this.length === this.width;
}

// Returns the area of the rectangle.
Rectangle.prototype.area = function() {
  return this.isValid()
    ? 0
    : this.length * this.width;
}

// Returns the perimeter of the rectangle.
Rectangle.prototype.perimeter = function() {
  return this.isValid()
    ? 0
    : (this.length + this.width) * 2;
}

Rectangle.prototype.isValid = function() {
  return this.length < 0 || this.width < 0;
}

module.exports = Rectangle;
