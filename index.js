// Your code here
class Polygon {
 constructor(side) {
    this.side = side;
  }
  
  get countSides() {
    return (this.side).length
  }
  
  get perimeter(){
    let total = (this.side).join("+")
    for(let i = 0; this.side.length; i++)
      (total += (this.side)[i])
      return total
  }
}
