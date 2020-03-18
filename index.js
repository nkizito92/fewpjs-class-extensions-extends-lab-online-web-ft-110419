// Your code here
class Polygon {
 constructor(side) {
    this.side = side;
  }
  
  get countSides() {
    return (this.side).length
  }
  
  get perimeter(){
    let total = (this.side).slice(0, 3)
   
      return total + this.side
  }
}
