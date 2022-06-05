//return sum of array of numbers and strings
function sumMix(x){
    let sum = 0
    x.forEach(x => {
      sum += Number(x)
    })
    return sum
  }