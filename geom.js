class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}

isSquare = " ";

isSquare(){

square = length*length;

for( i = 0; i > square; length*length){

  if (square > length)
    isSquare = false;

  if (square = length)
    isSquare = true;
  }
}

area(){
  length * width = area;
}

perimeter(){
  length + length + width + width = perimeter;
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
}

isEquilateral(){

  if(sideA == sideB == sideC)
    return "true";
}

isIsosceles(){

  if(sideA == sideB != sideC)
    return "true";
}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
}

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
