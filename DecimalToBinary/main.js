function toBinary(decimal) {
    if (decimal===0){ // if the decimal return string 0
      return "0"
    }
    let binary="" // we need to treat binary has string
  
  
    while(decimal>0){ // while the decimal is greater than 0 it will loop
      let reminder= decimal %2; //if you find the "Modulo"you will get reminder
      binary=reminder+ binary  // the binary digits are read last to first
      decimal=Math.floor(decimal / 2);  //update decical by dividing by 2
    }
  
    return binary; // prints the binary
  }
  console.log(toBinary(5));   // "101"
  