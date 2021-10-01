// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//8kyu

function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twiceAge = sonYearsOld * 2
    let yearsAgo = dadYearsOld - twiceAge
    return Math.abs(yearsAgo)
  }




  or



  
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld * 2))
  }