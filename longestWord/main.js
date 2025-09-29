function getLongestWord(sentence) {
    let words = sentence.split(" "); // splits each words in the sentence
    let longestWord = words[0].replace(/\./g, ""); // remove periods from first word
  
    for (let word of words) { // go through every word in the sentence
      let cleanWord = word.replace(/\./g, ""); // remove all periods from current word
      if (cleanWord.length > longestWord.length) { // if a word is bigger the longestword os replaced with the bigger word
        longestWord = cleanWord;
      }
    }
  
    console.log(longestWord);
    return longestWord; // returns the biggest word.
  }
  