//return string where each character is doubled
function doubleChar(str) {
    let strArray = str.split('')
    let newArray = []
    strArray.forEach(x => {
      newArray.push(x)
      newArray.push(x)
    })
    let newStr = newArray.join('')
    return newStr
  }
  