describe("Rectangle class", function() {
  var myRectangle;

  // Rectangle is a constructor function
  beforeEach(function() {
    myRectangle = new Rectangle();
  });

  // myRectangle is an instance of Rectangle
  it("should take length as a parameter", function() {
    expect(myRectangle.length).toEqual(length);
  });

  it("should take width as a parameter", function() {
    expect(myRectangle.width).toEqual(width);
  });

  // myRectangle's prototype is the prototype of its contructor function which is Rectangle.prototype
  it("should have a isSquare function on it's prototype and returns true if the rectangle is a square", function() {
    expect(myRectangle.isSquare()).toEqual(true);
    // these functions should be on Rectangle.prototype
    expect(myRectangle.hasOwnProperty("isSquare")).toEqual(false);
  });

  // myRectangle's prototype is the prototype of its contructor function which is Rectangle.prototype
  it("should have a isSquare function on it's prototype and calculates the area of the rectangle", function() {
    expect(myRectangle.area()).toEqual(length * width);
    // these functions should be on Rectangle.prototype
    expect(myRectangle.hasOwnProperty("area")).toEqual(false);
  });

  // myRectangle's prototype is the prototype of its contructor function which is Rectangle.prototype
  it("should have a isSquare function on it's prototype and calculates the area of the rectangle", function() {
    expect(myRectangle.perimeter()).toEqual((length*2) + (width*2));
    // these functions should be on Rectangle.prototype
    expect(myRectangle.hasOwnProperty("perimeter")).toEqual(false);
  });

});
