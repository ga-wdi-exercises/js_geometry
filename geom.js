class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    isSquare() {
        if (this.length === this.width) {
            return true;
        } else {
            return false;
        }
    }
    area() {
        return this.length * this.width;
    }
    perimeter() {
        return (this.length + this.width) * 2;
    }
}


class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    isEquilateral() {
        if (this.sideA === this.sideB && this.sideB == this.sideC) {
            return true;
        } else {
            return false;
        }
    }
    isIsosceles() {
        if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC) {
            return true;
        } else {
            return false;
        }
    }
    area() {
        var sides = (this.sideA + this.sideB + this.sideC);
        Math.sqrt(sides * ((sides - this.sideA) * (sides - this.sideB) * (sides - this.sideC)));
    }
    isObtuse() {

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
    return Math.sqrt(((this.x1 -= this.x2) * this.x1));
    Math.sqrt((this.y1 -= this.y2) * this.y1);
}
    }

let square = new Rectangle(2, 2);
let longBox = new Rectangle(2, 5);
let bigBox = new Rectangle(13, 15);

let equal = new Triangle(15, 15, 15);
let iso = new Triangle(25, 25, 13);
let totalArea = new Triangle(12, 15, 25);

let line = new LineSegment(2,3,6,7);

// // NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// };
