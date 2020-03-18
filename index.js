// Your code here
class Polygon {
 constructor(side) {
    this.side = side;
  }
  
  get countSides() {
    return (this.side).length
  }
  
  get perimeter(){
    let total;
   for(let i =0; i< this.side.length; i++) 
      (total += this.side[i])
      return total
  }
}
