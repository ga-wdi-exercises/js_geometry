var expect = require("chai").expect;

var Triangle = require( "../lib/triangle.js" );

describe("Triangle", () => {
  var triangle = new Triangle(1, 2, 3);
  it("has three sides", () => {
    expect(triangle.sideA).to.not.null;
    expect(triangle.sideB).to.not.null;
    expect(triangle.sideC).to.not.null;
  });

  describe("#isEquilateral", () => {
    it("returns false if the length of triangle's three sides that are not equal ", () => {
      expect(new Triangle(1, 9, 9).isEquilateral()).to.be.false;
    });
    it("returns true if the triangle has three sides that are all equal length", () => {
      expect(new Triangle( 9, 9, 9).isEquilateral()).to.be.true;
    });
  });

  describe("#isIsosceles", () => {
    it("returns false if the triangle does not have two equal-length sides", () => {
      expect(new Triangle(1, 2, 3).isIsosceles()).to.be.false;
    });
    it("returns true if the triangle has two equal-length sides", () => {
      expect(new Triangle(3, 3, 9).isIsosceles()).to.be.true;
    });
  });

  describe("#area", () => {
    it("returns correct area of a triangle", () => {
      expect(new Triangle(1, 2, 3).area()).to.equal(3);
    });
  });

  describe("#isObtuse", () => {
    it("returns false if a triangle is not an obtuse triangle", () => {
      expect(new Triangle(3, 3, 3).isObtuse()).to.be.false;
    });
    it("returns true if a triangle is an obtuse triangle", () => {
      expect(new Triangle(4, 6, 9).isObtuse()).to.be.true;
    });
  });

  describe("#isValid", () => {
    it("returns false if a triangle is not a valid triangle", () => {
      expect(new Triangle(1, 34, 55).isValid()).to.be.false;
    });
    it("returns true if a triangle is a valid triangle", () => {
      expect(new Triangle(4, 6, 9).isValid()).to.be.true;
    });
  });
});
