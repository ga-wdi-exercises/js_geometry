function Rectangle (length, width) {
	this.length = length;
	this.width = width;
}
Rectangle.prototype.isSquare = function(){
	if(this.length === this.width){
		return true;
	}
	else{
		return false;
	}
}

Rectangle.prototype.area = function(){
	return (this.length * this.width);
}
Rectangle.prototype.perimeter = function(){
		return ((this.length*2) + (this.width*2));
}
//


function Triangle (sideA, sideB, sideC) {
	this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype.isEquilateral = function(){
	if(this.sideA === this.sideB && this.sideB === this.sideC){
		return true;
	}
	else{
		return false;
	}
}

Triangle.prototype.isIsosceles = function(){
	if(this.sideA === this.sideB)||(this.sideA === this.sideC)||(this.sideC === this.sideB)||(this.sideC === this.sideA){
		return true;
	}else{
		return false;
	}

}
Triangle.prototype.area = function(){
    var p = (this.sideA + this.sideB + this.sideC) / 2;
    var area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    return area;
  }
Triangle.prototype.isObtuse = function(){
	var sides = (this.sideA, this.sideB, this.sideC);
	sides.sort();
	return Math.pow(sides[0], 2) + Math.pow(sides[1], 2) < Math.pow(sides[2], 2);
}



function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

LineSegment.prototype.length = function() {
    var one = this.x2 - this.x1;
    var two = this.y2 - this.y1;
    return Math.sqrt(one * one + two * two);
  }
};
