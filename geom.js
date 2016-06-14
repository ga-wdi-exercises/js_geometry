function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function() {
    return (this.length==this.width);
}
Rectangle.prototype.area = function() {
    return (this.length*this.width);
}
Rectangle.prototype.perimeter = function() {
    return ((2*this.length)+(2*this.width));
}


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

Triangle.prototype.isEquilateral = function() {
    return ((this.sideA==this.sideB) && (this.sideA==this.sideC));
}
Triangle.prototype.isIsosceles = function() {
    return ((this.sideA==this.sideB) || (this.sideA==this.sideC) || (this.sideB==this.sideC));
}
Triangle.prototype.area = function() {
    var peri = (this.sideA+this.sideB+this.sideC)/2;
    return (Math.sqrt(peri*(peri-this.sideA)*(peri-this.sideB)*(peri-this.sideC)));
}
Triangle.prototype.isObtuse = function() {
    if ((this.sideA > this.sideB) && (this.sideA > this.sideC)) {
        return (Math.pow(this.sideA, 2) > (Math.pow(this.sideB,2) + Math.pow(this.sideC, 2)));
    }
    else if ((this.sideA > this.sideB) && (this.sideA < this.sideC)) {
        return (Math.pow(this.sideC, 2) > (Math.pow(this.sideA,2) + Math.pow(this.sideB, 2)));
    }
    else if ((this.sideA < this.sideB) && (this.sideB > this.sideC)) {
        return (Math.pow(this.sideB, 2) > (Math.pow(this.sideA,2) + Math.pow(this.sideC, 2)));
    }
    else {
        return false;
    }
}

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function() {
    return (Math.sqrt(Math.pow(Math.abs(this.x2-this.x1),2)+Math.pow(Math.abs(this.y2-this.y1),2)));
}
