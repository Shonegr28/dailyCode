function digitsOrLetters(str) {
  // Initialize counters for letters and digits
  let letters = 0;
  let digits = 0;

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // Get the current character

    // Check if the character is a digit (0–9)
    if (char >= '0' && char <= '9') {
      digits++; // Increase digit count
    }
    // Check if the character is a letter (a–z or A–Z)
    else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      letters++; // Increase letter count
    }
    // Ignore any other characters (special symbols, spaces, etc.)
  }

  // Compare counts and return the result
  if (digits > letters) {
    return "digits";  // More digits than letters
  } else if (letters > digits) {
    return "letters"; // More letters than digits
  } else {
    return "tie";     // Equal number of digits and letters
  }
}
