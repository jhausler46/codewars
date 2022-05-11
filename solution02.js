//find average of array
function find_average(array) {
    if (array.length !== 0){
      let a = 0
      array.forEach((x,i)=> a+=x)
      let b = a/(array.length)
      return b
    }else{
      return 0;
    }  
  }