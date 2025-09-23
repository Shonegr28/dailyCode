# String Mirror

## Problem
Given two strings, determine if the second string is a **mirror** of the first.

A string is considered a mirror if it contains the same letters in reverse order.

- Treat uppercase and lowercase letters as **distinct**.  
- Ignore all **non-alphabetical** characters.  

---

## Tests

- ✅ `isMirror("helloworld", "helloworld")` → **false**  
- ✅ `isMirror("Hello World", "dlroW olleH")` → **true**  
- ✅ `isMirror("RaceCar", "raCecaR")` → **true**  
- ✅ `isMirror("RaceCar", "RaceCar")` → **false**  
- ✅ `isMirror("Mirror", "rorrim")` → **false**  
- ✅ `isMirror("Hello World", "dlroW-olleH")` → **true**  
- ✅ `isMirror("Hello World", "!dlroW !olleH")` → **true**  

---

## Notes
- Ignore spaces, punctuation, and other non-letters.
- Comparison is case-sensitive (`M` ≠ `m`).
- Mirror means the second string equals the reversed first string (letters only).
