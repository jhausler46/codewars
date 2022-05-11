//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
function fakeBin(x){
  const array = x.split('')
  const binArray = array.map((x) => {
    if (x<5){
      return 0;
    }else{
      return 1;
    }
  })
  const newStr = binArray.join('')
  return newStr
}