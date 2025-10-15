# 🔤 String Count

**Difficulty:** Easy  
**Topic:** String Processing / Pattern Matching  

---

## 📌 Problem Statement
Given two strings, determine **how many times** the **second string** (pattern) appears in the **first string** (text).  

The pattern may **overlap** within the text.  
For example, `"aaa"` contains `"aa"` twice — the first two characters and the second two characters overlap.

---

## ⚙️ Rules
- Count **all occurrences**, including overlapping ones.  
- Matching is **case-sensitive**.  
- Return a single integer representing the count.  

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| `count('abcdefg', 'def')` | `1` |
| `count('hello', 'world')` | `0` |
| `count('mississippi', 'iss')` | `2` |
| `count('she sells seashells by the seashore', 'sh')` | `3` |
| `count('101010101010101010101', '101')` | `10` |

---

## ✅ Key Points
- Overlapping matches must be counted (e.g., `"aaaa"` with `"aa"` gives `3`).  
- The function must slide through the string one character at a time to find every valid occurrence.  
- Useful for **substring analysis**, **pattern frequency**, or **text parsing**.

---

## 🎯 Goal
Develop precision in **string traversal**, **looping logic**, and **substring matching** — important foundations for pattern detection and data parsing.
