//count number of true values in an array
function countSheeps(arrayOfSheep) {
    let numOfSheep = 0
    arrayOfSheep.forEach((x) => {
      if (x === true){
        numOfSheep++
    }else{
        return
      }
    })
    return numOfSheep
  }