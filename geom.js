class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}
	isSquare() {
		if (this.length === this.width) {
			return true
		} else {
			return false
		}
	}
	area() {
		return this.length * this.width
	}
	perimeter() {
		return (this.length * 2) + (this.width * 2)
	}
}

var rect1 = new Rectangle(4, 4)
var rect2 = new Rectangle(7, 3)
var rect3 = new Rectangle(10, 5)


class Triangle {
	constructor(sideA, sideB, sideC) {
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}
	isEquilateral() {
		if (this.sideA === this.sideB && this.sideB === this.sideC && this.sideC === this.sideA) {
			return true
		} else {
			return false
		}
	}
	isIsosceles() {
		if (this.sideA === this.sideB || this.sideB === this.sideC || this.sideC === this.sideA) {
			return true
		} else {
			return false
		}
	}
	area() {
		let s = (this.sideA + this.sideB + this.sideC) / 2
		return ((s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)) ** 0.5)
	}
	isObtuse() {
		if (this.sideA ** 2 + this.sideB ** 2 < this.sideC ** 2 ||
		    this.sideB ** 2 + this.sideC ** 2 < this.sideA ** 2 ||
		    this.sideC ** 2 + this.sideA ** 2 < this.sideB ** 2) {
			return true
		} else {
			return false
		}
	}
}

var tri1 = new Triangle(3, 3, 3)
var tri2 = new Triangle(3, 4, 5)
var tri3 = new Triangle(4, 7, 4)


class LineSegment {
	constructor(x1, y1, x2, y2) {
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	}
	length() {
		return ((this.x1 - this.x2) ** 2 + (this.y1 - this.y2) ** 2) ** 0.5
	}
}

var line1 = new LineSegment(0, 0, 8, 0)
var line2 = new LineSegment(1, 1, 4, 5)
var line3 = new LineSegment(-3, 1, 4, -7)

// NOTE: DO NOT REMOVE OR ALTER
module.exports = {
	Rectangle: Rectangle,
	Triangle: Triangle,
	LineSegment: LineSegment
}
