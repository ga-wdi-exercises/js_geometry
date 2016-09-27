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
            ||  (this.sideB == this.sideC && this.sideB !=  this.sideA)
        ) {
            console.log("It's an Isocsceles!")
            return true
        }
    }
    isEquilateral(){
        if (this.sideA == this.sideB && this.sideB == this.sideC) {
            console.log("It's an Equilateral!")
            return true
        }
    }
    area(){
    }
}


var triangleOne = new Triangle(5,5,5)
var triangleTwo = new Triangle(6,3,6)
var triangleThree = new Triangle(1,2,3)

// class LineSegment {
//   constructor(x1, y1, x2, y2){
//     this.x1 = x1;
//     this.y1 = y1;
//     this.x2 = x2;
//     this.y2 = y2;
//   }
// }

// NOTE: DO NOT REMOVE OR ALTER
// module.exports = {
//   Rectangle: Rectangle,
//   Triangle: Triangle,
//   LineSegment: LineSegment
// }
