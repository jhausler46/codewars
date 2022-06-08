//sort array of strings then add stars in between letters
function twoSort(s) {
    const newArray = s.sort()
    const firstStr = newArray[0]
    const firstStrArray = firstStr.split('')
    const newStr = firstStrArray.join('***')
    return newStr
    
  }