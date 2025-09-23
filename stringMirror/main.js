function isMirror(str1, str2) {

    let clean1 =""
    for(let i =0; i<str1.length;i++){
      let char= str1[i];
  
      if ((char>='A' && char<='Z') || (char>='a' && char<='z')){
        clean1+=char
      }
    }
  
    let clean2 =""
    for(let i =0; i<str2.length;i++){
      let char= str2[i];
  
      if ((char>='A' && char<='Z') || (char>='a' && char<='z')){
        clean2+=char
      }
    }
  
    let reversed1 = "";
    for (let i = clean1.length - 1; i >= 0; i--) {
      reversed1 += clean1[i];
    }
  
    return reversed1 === clean2;
  
  }
  
  /*
  PSEUDOCODE:
  1. Start with two input strings: str1 and str2.
  2. Make an empty string clean1.
  3. Loop through str1:
     - If the character is a letter (A–Z or a–z), add it to clean1.
  4. Make an empty string clean2.
  5. Loop through str2:
     - If the character is a letter, add it to clean2.
  6. Make an empty string reversed1.
  7. Loop backwards through clean1:
     - Add each character to reversed1.
  8. Compare reversed1 with clean2.
     - If equal (case-sensitive), return true.
     - Else return false.
  */
  