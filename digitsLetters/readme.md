# Digits vs Letters  

### Problem Statement  
Given a string, return:  
- **"digits"** if the string has more digits than letters.  
- **"letters"** if it has more letters than digits.  
- **"tie"** if it has the same number of digits and letters.  

- **Digits** consist of `0–9`.  
- **Letters** consist of `a–z` in both upper and lower case.  
- Ignore all other characters.  

---

### Tests & Results  
- ✅ `digitsOrLetters("abc123")` → **"tie"**  
- ✅ `digitsOrLetters("a1b2c3d")` → **"letters"**  
- ✅ `digitsOrLetters("1a2b3c4")` → **"digits"**  
- ✅ `digitsOrLetters("abc123!@#DEF")` → **"letters"**  
- ✅ `digitsOrLetters("H3110 W0R1D")` → **"digits"**  
- ✅ `digitsOrLetters("P455W0RD")` → **"tie"**  
