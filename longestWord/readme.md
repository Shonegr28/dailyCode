# 📝 Longest Word

This project finds the **longest word** in a given sentence.  

---

## 📌 Problem Statement
- Given a sentence, return the longest word.  
- Ignore periods (`.`) when determining word length.  
- If multiple words are tied for the longest, return the **first one** that occurs.  

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| getLongestWord("coding is fun") | "coding" |
| getLongestWord("Coding challenges are fun and educational.") | "educational" |
| getLongestWord("This sentence has multiple long words.") | "sentence" |

---

## ✅ Key Points
- Split the sentence into words.  
- Remove trailing periods before checking word length.  
- Track the longest word as you scan through the sentence.  
- Return the first occurrence in case of a tie.  

---

## 🎯 Goal
This exercise practices **string manipulation**, **iteration**, and handling **edge cases** like punctuation and ties.
