//determine how many years ago dad was twice as old as sons current age
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twiceSonAge = sonYearsOld*2
    return Math.abs(dadYearsOld-twiceSonAge)
  }