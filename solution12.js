//Find error rate in printer codes
function printerError(s) {
    const sArray = s.split('')
    let errors = 0
    let length = sArray.length
    sArray.forEach((x => {
      if (/[a-m]/.test(x)){
          return 
      }else{
          errors++
      }
    }))
  return `${errors}/${length}`
    
}