function toDecimal(binary) {
    // Step 1: turn the string into an array of characters
    let digits= binary.split("")
    // Step 2: prepare a variable to hold the result
    let decimal=0;
  
    // Step 3: loop through each digit
    for(let i=0;i<digits.length;i++){
      // Convert character "0"/"1" into a number
      let bit=Number(digits[i]);
  
      // Figure out the power of 2 for this position
      let power=digits.length-1-i;
      // Add contribution to decimal
      decimal += bit * Math.pow(2, power)
    }
  
    return decimal;
  }
  
  console.log(toDecimal("101"))