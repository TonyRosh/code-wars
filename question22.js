// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

// 7 KYU


function evenOrOdd(str) {
  
    let evenNum = []
    let oddNum = []
    
    let digits = str.split("").map(Number);
    
    for(let i = 0; i < digits.length; i++) {
      if(digits[i] % 2 === 0) {
        evenNum.push(digits[i])
      } else {
        oddNum.push(digits[i])
      }
    }
    
    let addEven = evenNum.reduce((a, b) => a + b, 0)
    let addOdd = oddNum.reduce((a, b) => a + b, 0)
    
    if(addEven > addOdd) {
      return 'Even is greater than Odd'
    } else if (addOdd > addEven) {
      return 'Odd is greater than Even'
    } else {
      return 'Even and Odd are the same'
    }
  
  }