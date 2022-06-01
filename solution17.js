//return sum of multiples of 3 and 5 up to n
function solution(number){
    let sum = 0
    for (let i = 1; i<number; i++){
      if (Math.sign(number) === -1){
        return 0
      }else if (i%3 === 0 && i%5 === 0){
        sum+=i
      }else if (i%3 === 0){
        sum+=i
      }else if (i%5 === 0){
        sum+=i
      }
    }
    return sum
  }