function checkStrength(password) {
    let rules=0;
    if (password.length>=8){    //Rule #1: Has to be more than or equal to 8
      rules++;
    }
  
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)){ // Rule #2: Has to have uppercase and lowercase letters
      rules++;
    }
  if (/\d/.test(password)){     //Rule #3: Has To have numbers
    rules++;
  } 
    if (/[!@#$%^&*]/.test(password)) { //Rule #4: Has to have special characters
      rules++;
    }
    if (rules < 2){ // requirements
      return "weak";
    }
    if (rules < 4) {
      return "medium";
    }
    return "strong";;
  }