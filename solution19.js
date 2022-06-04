//determine is sum of array is odd or even
function oddOrEven(array) {
    let sum = 0
    array.forEach((x) => {
      sum += x
    })
   if (sum%2 === 0){
     return 'even'
   }else{
     return 'odd'
   }
 }