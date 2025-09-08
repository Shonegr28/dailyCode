# Acronym Generator  

This program takes a string containing one or more words and returns an acronym based on defined rules.  

---

## 🚀 Features  
- Capitalizes the first letter of each word (with exceptions).  
- Skips common small words (unless they are the first word).  
- Preserves word order.  
- Produces a clean acronym with no spaces.  

---

## 📖 Rules for Building the Acronym  

1. **Capitalize** the first letter of each word.  
2. **Ignore common small words** — skip the first letter of the words:  
   - `a`, `an`, `and`, `by`, `for`, `of`  
   (unless they are the **first word** in the string).  
3. **Preserve order** — letters appear in the order the words are given.  
4. **No spaces** — the final acronym is a continuous string of letters.  

---

## 💡 Examples  

**Input:**  
