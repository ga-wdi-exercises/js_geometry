class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    isSquare() {
        if (this.lenght === this.width) {
            return true
        } else {
            return false
        }
    }
    area() {
        return (this.lenght * this.width)
    }
    perimeter() {
        return ((this.length + this.width) * 2)
    }
  }
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    isEquilateral() {
        if (this.sideA === this.sideB && this.sideB === this.sideC) {
            return true
        } else {
            return false
          }
        }
            isIsosceles () {
                if (this.sideA === this.sideB && this.sideA !== this.sideC || this.sideA === this.sideC && this.sideA !== this.sideB || this.sideB === this.sideC === this.sideC && this.sideC) {
                    return true
                } else {
                    return false
                }
              }
                area() {
                    var p = ((this.sideA + this.sideB + this.sideC) / 2)
                    return Math.sqtr(this.p * (this.p - this.sideA) * (this.p - this.sideB) * (this.p - this.sideC))
                }

                isObtuse() {
                    if (this.sideA > 90) {
                }
            }
        }
    

    class LineSegment {
        constructor(x1, y1, x2, y2) {
            this.x1 = x1;
            this.y1 = y1;
            this.x2 = x2;
            this.y2 = y2;
        }
        lenght() {
            return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
        }
    }

    // NOTE: DO NOT REMOVE OR ALTER
    module.exports = {
        Rectangle: Rectangle,
        Triangle: Triangle,
        LineSegment: LineSegment
}
