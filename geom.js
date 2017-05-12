class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  }

  const isSquare = function () {
    if (this.length == this.width)
      alert("true")
  } else {
      alert("false")
    }
      const area = function () {
          alert(this.length * this.width)
    }
       const perimeter(){
          alert(2 * this.length + this.width)
        }
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
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
