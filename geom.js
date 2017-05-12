class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  isSquare(){
    if (this.length === this.width)
      return true;
      else {
        return false;
      }
  }
  areaCalc(){
    return this.length*this.width;
  }
  perimeter(){
    var perim = (this.length*2)+(this.width*2);
    return perim;
  }
}


class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA === this.sideB && this.sideB === this.sideC){
      return true;
    }
    else {
      return false;
    }
  }
    area(){
      var p = (this.sideA + this.sideB + this.sideC)/2;
      var area = Math.sqrt(p*((p-this.sideA)*(p-this.sideB)*(p-this.sideC)));
      return area;
    }

}


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

  }
  length(){
    var base1 = this.x2-this.x1;
    var base2 = this.y2-this.y1;
    var distance = Math.sqrt((Math.pow(base1, 2)+ Math.pow(base2, 2)));
    return distance;
  }
}


// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
  Rectangle: Rectangle,
  Triangle: Triangle,
  LineSegment: LineSegment
}
