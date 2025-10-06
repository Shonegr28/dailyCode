function classification(temp) {
  
    // If the temperature is greater than or equal to 30,000, it belongs to class "O"
    if (temp >= 30000) {
      return "O";
    } 
    
    // Else if the temperature is between 10,000 and 29,999 (inclusive), it belongs to class "B"
    else if (temp <= 29999 && temp >= 10000) {
      return "B";
    } 
    
    // Else if the temperature is between 7,500 and 9,999, it belongs to class "A"
    else if (temp <= 9999 && temp >= 7500) {
      return "A";
    } 
    
    // Else if the temperature is between 6,000 and 7,499, it belongs to class "F"
    else if (temp <= 7499 && temp >= 6000) {
      return "F";
    } 
    
    // Else if the temperature is between 5,200 and 5,999, it belongs to class "G"
    else if (temp <= 5999 && temp >= 5200) {
      return "G";
    } 
    
    // Else if the temperature is between 3,700 and 5,199, it belongs to class "K"
    else if (temp <= 5199 && temp >= 3700) {
      return "K";
    } 
    
    // Else if the temperature is between 0 and 3,699, it belongs to class "M"
    else if (temp <= 3699 && temp >= 0) {
      return "M";
    } 
  }