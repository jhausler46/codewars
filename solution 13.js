//get middle letter/two letters from string
function getMiddle(s)
{
  let sArray = s.split('')
  if (sArray.length % 2 !== 0){
    let index = Math.ceil((sArray.length)/2)-1
    return sArray[index]

  }else{
    let indeces1 = Math.ceil((sArray.length/2)-1)
    let indeces2 = Math.ceil((sArray.length/2))
    return sArray[indeces1] + sArray[indeces2]
  }
}