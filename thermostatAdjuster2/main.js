function adjustThermostat(currentF, targetC) {
    let targetF=targetC*(9/5)+32  // turn target C to target F
    let tempdifference=0  // Set this variable to find the difference between temperature
    if (currentF <targetF){   // If current F is less than target F  it should turn on heat
      tempdifference= targetF- currentF // Take the difference between targetF and currentF 
      return `Heat: ${tempdifference.toFixed(1)} degrees Fahrenheit` // Return the temp difference rounded ith the string
    }
    if (currentF >targetF){ // If current F is greater than target F it should turn on cool
      tempdifference= currentF-targetF // // Take the difference between currentF and  targetF
      return `Cool: ${tempdifference.toFixed(1)} degrees Fahrenheit`// Return the temp difference rounded ith the string
    }
    if (currentF=targetF){  // If it is the same
      return "Hold" // return hold
    }
  
    
  }
  console.log(adjustThermostat(59, 22))
  console.log(adjustThermostat(72, 18))