function adjustThermostat(temp, target) {      // Define a function with two inputs: current temp and target temp
  
  if (temp < target) {                         // Check if current temp is lower than target
    return "heat";                             // If yes, return "heat" (room needs to warm up)
  } 
  else if (temp > target) {                    // Otherwise, check if current temp is higher than target
    return "cool";                             // If yes, return "cool" (room needs to cool down)
  } 
  else {                                       // If neither (meaning temp == target)
    return "hold";                             // Return "hold" (temperature is just right)
  }

}
