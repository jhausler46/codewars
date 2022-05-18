//find century from year
function century(year) {
    if(year.length<3){
      return 1
    }else if(year%100===0) {
      return(year/100)
    }else{
      return (Math.ceil(year/100))
    }
  }