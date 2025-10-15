function count(text, pattern) {
    // Initialize a variable 'count' to keep track of how many times 'pattern' appears in 'text'
    let count = 0;
  
    // Loop through 'text' up to the point where a full 'pattern' can still fit
    for (let i = 0; i <= text.length - pattern.length; i++) {
  
      // Extract a substring from the current index 'i' with the same length as 'pattern'
      let substring = text.slice(i, i + pattern.length);
  
      // If the substring exactly matches 'pattern', increment 'count'
      if (substring === pattern) {
        count++;
      }
    }
  
    // Return the total count of occurrences found
    return count;
  }  