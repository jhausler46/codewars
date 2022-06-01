//return string without first and last letters
function removeChar(str){
    let strArray = str.split('')
    return strArray.slice(1, strArray.length-1).join('')
  };
  