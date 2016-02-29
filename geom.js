function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
    if (this.length == this.width) {
        return true;
    }
    else {
        return false;
    }
};
Rectangle.prototype.area = function() {
    return (this.length*this.width);
};
Rectangle.prototype.perimeter = function() {
    return (this.length*2 + this.width*2);
};
var box1 = new Rectangle(3, 8);
var box2 = new Rectangle(5, 2);
var box3 = new Rectangle(9, 4);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
    if (this.sideA == this.sideB && this.sideB == this.sideC) {
        return true;
    } else {
        return false;
    }
};
Triangle.prototype.isIsosceles = function() {
    if (this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideA) {
        return true;
    } else {
        return false;
    }
};
Triangle.prototype.area = function() {

    var s = ((this.sideA + this.sideB + this.sideC)/2);
    var area = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC));
    return area;
};
Triangle.prototype.isObtuse = function() {
if (
Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) < Math.pow(this.sideC, 2) ||
Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) < Math.pow(this.sideA, 2) ||
Math.pow(this.sideC, 2) + Math.pow(this.sideA, 2) < Math.pow(this.sideB, 2)
) {
    return true;
} else {
    return false;
}
};

var tri1 = new Triangle(8, 4, 3);
var tri2 = new Triangle(7, 1, 6);
var tri3 = new Triangle(5, 2, 9);

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function() {
    return Math.sqrt((Math.pow((this.y2-this.y1), 2))+(Math.pow((this.x2-this.x1), 2)));
};
