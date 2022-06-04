//return reverse array of digits from string
function digitize(n) {
    const number = n.toString()
    const arrayNum = number.split('')
    const arrayReverse = arrayNum.reverse()
    let numberArray = arrayReverse.map(Number)
    return numberArray
  }