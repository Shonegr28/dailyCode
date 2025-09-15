function allUnique(str) {        // Define a function named allUnique that takes a string "str"
  let seen = {}                  // Create an empty object to keep track of characters we’ve already seen

  for (let char of str) {        // Loop through each character (char) in the string
    if (seen[char]) {            // If this character already exists in the "seen" object
      return false               // Duplicate found → return false immediately
    } else {                     
      seen[char] = true          // Otherwise, mark this character as seen
    }
  }

  return true;                   // If the loop finishes with no duplicates → return true
}
