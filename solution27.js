//cat years to dog years
var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears===1){
      return [humanYears, 15, 15]
    }else if(humanYears===2){
      return [humanYears, 24, 24]
    }else{
      let dogYears = (24 + 5*(humanYears-2))
      let catYears = (24 + 4*(humanYears-2))
      return [humanYears, catYears, dogYears]
    }
  }