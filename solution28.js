//find next square
function findNextSquare(sq) {
    let sqRoot = Math.sqrt(sq)
    if (!Number.isInteger(sqRoot)){
      return -1
    }else{
      return (sqRoot+1)*(sqRoot+1)
    }
  }