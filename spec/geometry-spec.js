function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Recatangle.prototype{
  isSquare: function(){
    return this.length === this.width;
  }
}
