function Triangle( sideA, sideB, sideC ) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

// Returns true if the triangle is equilateral. 等辺形
Triangle.prototype.isEquilateral = function() {
  return this.sideA === this.sideB
    && this.sideB === this.sideC
    && this.sideC === this.sideA;
}

// Returns true if the triangle is isosceles. 二等辺三角形
Triangle.prototype.isIsosceles = function() {
  return this.sideA === this.sideB
    || this.sideB === this.sideC
    || this.sideC === this.sideA;
}

// Returns the area of the triangle.
Triangle.prototype.area = function() {
  // Heron's formula.
  let s = (this.sideA + this.sideB + this.sideC) / 2;
  return Math.sqrt( s * ( s - this.sideA ) * ( s - this.sideB ) * ( s - this.sideC ) );
}

// An obtuse(尖っていない) triangle is one with one obtuse angle
// (greater than 90°) and two acute angles.
// Returns true if the triangle is obtuse.
Triangle.prototype.isObtuse = function() {
  return Math.pow( this.sideA, 2 ) > Math.pow( this.sideB, 2 ) + Math.pow( this.sideC, 2 )
    || Math.pow( this.sideB, 2 ) > Math.pow( this.sideC, 2 ) + Math.pow( this.sideA, 2 )
    || Math.pow( this.sideC, 2 ) > Math.pow( this.sideA, 2 ) + Math.pow( this.sideB, 2 );
}

Triangle.prototype.isValid = function() {
  return this.sideA + this.sideB > this.sideC
    && this.sideB + this.sideC > this.sideA
    && this.sideC + this.sideA > this.sideB;
}

//---
// Relations of sides
//---
// Acute:  C^2 < a^2 + b^2
// Right:  C^2 = a^2 + b^2
// Obtuse: C^2 > a^2 + b^2

module.exports = Triangle;
