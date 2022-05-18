//filter out every other element in an array starting with second element
function removeEveryOther(arr){
    const newArr = arr.filter((x,i)=>{
      if(i===0||i%2===0){
        return x
      }else{
        return
      }
    })
    return newArr
  }