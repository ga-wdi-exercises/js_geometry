class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    isSquare(){
        if (this.length == this.width){
            console.log("This is a Square!")
            return true
        } else {
            console.log("Not a square!")
            return false
        } 
    }
    area(){
        console.log ((this.length*this.width))
    }
    perimeter(){
        console.log ((this.length+this.width)*2)
    }
}


class Triangle {
    constructor(sideA, sideB, sideC){
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }
    isIsocsceles(){
        if (
                (this.sideA == this.sideB &&  this.sideA != this.sideC)
            ||  (this.sideA == this.sideC &&  this.sideA != this.sideB)
            ||  (this.sideB == this.sideC && this.sideB != this.sideA)
        ) {
            console.log("It's an Isocsceles!")
            return true
        } else {
            return false
        }
    }
    isEquilateral(){
        if (this.sideA == this.sideB && this.sideB == this.sideC) {
            console.log("It's an Equilateral!")
            return true
        }
    }
    area(){
        var s = ( this.sideA + this.sideB + this.sideC )/2
        return Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC)) 
    }
    isObtuse(){
        if ((Math.pow(this.sideA,2) + Math.pow(this.sideB,2)) > (Math.pow(this.sideC))) {
            return true
        } else {
            return false
        }
    }
}


var triangleOne = new Triangle(5,5,5)
var triangleTwo = new Triangle(6,3,6)
var triangleThree = new Triangle(1,2,3)

class LineSegment {
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    length(){
        var a = this.x1 + this.y1
        var b = this.x2 + this.y2
        return "Line one is " + a + " line two is " + b + "."
    }
}

var line = new LineSegment(1,2,3,4)

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
