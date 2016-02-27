function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.isSquare = function(){
  if(this.width == this.length){
    return true;
  }else{
    return false;
  }
};

Rectangle.prototype.area = function(){
  return this.length * this.width;
};

Rectangle.prototype.perimeter = function(){
  return this.length*2 + this.width*2;
};

// var skinnyBox = new Rectangle(18,2);

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}

$("h2").on("click",function(){
  console.log($(this).html())
}
);

$("h2").click(function(){
  alert(this.innerHTML);
}
);

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
