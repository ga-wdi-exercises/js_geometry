//Start Rectangle
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
    isSquare(){
    if (this.length === this.width){
      return "true";
    } else {
      return "false";
    }
  }
    area(){
      return this.area = this.length * this.width;
    }
    perimeter(){
      return this.perimeter = (2*this.length)+(2*this.width);
    }
  }

const square = new Rectangle(2,2);
const rect1 = new Rectangle(3,6);
const rect2 = new Rectangle(7,9);

//Start Triangle
class Triangle {
  constructor(sideA, sideB, sideC){
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  isEquilateral(){
    if (this.sideA === this.sideB && this.sideB === this.sideC){
      return "true";
    } else{
      return "false";
    }
  }
  isIsosceles(){
    if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
      return "true";
    } else{
      return "false";
    }
  }
  isObtuse(){
    if (this.sideA != this.sideB && this.sideB != this.sideC){
      return "true";
    } else{
      return "false";
    }
  }
  area(){
    if ((this.sideA === this.sideB) && (this.sideB === this.sideC)){ //equilateral
        let a = this.sideA;
        return this.equArea = (a ** 2)*(Math.sqrt(3)/4);
    } else if (this.sideA === this.sideB){ //isoceles
        let a = this.sideC;
        let c = this.sideA;
        return this.isoArea = a*(Math.sqrt((4*(c**2))-(a**2))/4);
    } else if (this.sideA === this.sideC){ //isoceles
        let a = this.sideB;
        let c = this.sideA;
        return this.isoArea = a*(Math.sqrt((4*(c**2))-(a**2))/4);
    } else if (this.sideB === this.sideC){ //isoceles
        let a = this.sideA;
        let c = this.sideB;
        return this.isoArea = a*(Math.sqrt((4*(c**2))-(a**2))/4);
    } else if ((this.sideA != this.sideB) && (this.sideB != this.sideC) && (this.sideA != this.sideC)){ //obtuse
        let a = this.sideA;
        let b = this.sideB;
        let c = this.sideC;
        return this.obtArea = "bruh for real..."
  }
}
}

const equTri = new Triangle(7,7,7);
const isoTri = new Triangle(3,7,7);
const isoTri2 = new Triangle(7,3,7);
const obtTri = new Triangle(7,9,8);


class LineSegment {
  constructor(x1, y1, x2, y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  length(){
    return this.length = Math.sqrt(((this.x2-this.x1)**2)+((this.y2-this.y1)**2));
  }
}

const line1 = new LineSegment(1,2,3,4);

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
