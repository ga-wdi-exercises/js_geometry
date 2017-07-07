  class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }

    isSquare(){
      if(this.length === this.width)
      {
        return true
      }
      else{
        return false
      }

    }

    area(){
      return (this.length * this.width)
    }

    perimeter(){
      return ((this.length * 2) + (this.width * 2))
    }
  }



  //to be obtuse angle: a^2+b^2 < c^2 or b^2+c^2 < a^2 or c^2+a^2 > b^2.

  class Triangle {
    constructor(sideA, sideB, sideC){
      this.sideA = sideA;
      this.sideB = sideB;
      this.sideC = sideC;
    }

    isEquilateral(){
      if(this.sideA.length === this.sideB.length && this.sideA.length === this.sideC.length)
      {
        return true
      }
      else{
        return false
      }
    }

    isIsosceles(){
      if(this.sideA.length === this.sideB.length || this.sideA.length === this.sideC.length){
        return true
      }
      else {
        return false
      }
    }

    area(){
      var p = this.sideA.length + this.sideB.length + this.sideC.length
      return Math.sqrt(p * (this.sideA.length) * (this.sideB.length) * (this.sideC.length))
    }

    //to be obtuse angle: a^2+b^2 < c^2 or b^2+c^2 < a^2 or c^2+a^2 > b^2.
    isObtuse(){
      if ((this.sideA.length * 2) + (this.sideB.length * 2) < (this.sideC.length * 2)){
        return true
      }
      else if ((this.sideC.length * 2) + (this.sideB.length * 2) < (this.sideA.length * 2)) {
        return true
      }
      else if ((this.sideA.length * 2) + (this.sideC.length * 2) < (this.sideB.length * 2)) {
        return true
      }
      else {
        return false
      }
    }
  }


  class LineSegment {
    constructor(x1, y1, x2, y2){
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }

    length () {
      var x = Math.abs( this.x1 - this.x2)
      var y = Math.abs( this.y1 - this.y2)

      return Math.sqrt(x * x + y * y)

    }
  }




  // NOTE: DO NOT REMOVE OR ALTER
  module.exports = {
    Rectangle: Rectangle,
    Triangle: Triangle,
    LineSegment: LineSegment
  }
