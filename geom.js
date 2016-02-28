function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}


function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}


function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}

Rectangle.prototype.isSquare = function(){
    if(this.length === this.width){
        return true;
    }
};

Rectangle.prototype.area = function(){
    return this.length*this.width;
};

Rectangle.prototype.perimeter = function(){
    return (2*(this.length + this.width));
};

Triangle.prototype.isEquilateral = function(){
    if(sideA === sideB === sideC){
        return true;
    }
};

Triangle.prototype.isIsosceles = function(){
    if(sideA === sideB || sideA === sideC || sideB === sideC){
        return true;
    }else{
        return false;
    }
};

Triangle.prototype.area = function(){
    answer = (((Math.sqrt(3))/4) * (this.sideA *this.sideA));
};

// Used formula from here: http://www.teacherschoice.com.au/maths_library/trigonometry/solve_trig_sss.htm
Triangle.prototype.isObtuse = function(){
    var a = this.sideA; var b = this.sideB; var c = this.sideC;
    var topOfEquation;
    var bottomOfEquation;
    var final;
    if(Math.max(a,b,c) === c){
        topOfEquation = ((Math.pow(a, 2)) +  (Math.pow(b, 2)) -  (Math.pow(c, 2)));
        bottomOfEquation = (2 * (a * b));
        var cosC = (topOfEquation / bottomOfEquation);
        final = (cos(-1) * (cosC));
    }else if(Math.max(a,b,c) === b){
        topOfEquation = ((Math.pow(a, 2)) +  (Math.pow(c, 2)) -  (Math.pow(b, 2)));
        bottomOfEquation = (2 * (a * c));
        var cosB = (topOfEquation / bottomOfEquation);
        final = (cos(-1) * (cosB));
    }else{
        topOfEquation = ((Math.pow(b, 2)) +  (Math.pow(c, 2)) -  (Math.pow(a, 2)));
        bottomOfEquation = (2 * (b * c));
        var cosA = (topOfEquation / bottomOfEquation);
        final = (cos(-1) * (cosA));
    }

    if(final > 90){
        return true;
    }else{
        return false;
    }
};

LineSegment.prototype.length = function(){
    var partX = Math.pow((this.x2 - this.x1), 2);
    var partY =Math.pow((this.y2 - this.y1), 2) ;
    var addThem = partX + partY;
    var answer = Math.sqrt(addThem);
    return answer;
};
