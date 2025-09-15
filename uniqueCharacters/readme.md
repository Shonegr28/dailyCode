# Unique Characters

## Problem Statement
Given a string, determine if **all the characters** in the string are unique.  

- Uppercase and lowercase letters should be considered different characters (`"a"` ≠ `"A"`).
- Return `true` if every character is unique.  
- Return `false` if **any character repeats**.

---

## Example Walkthrough

### Input: `"hello"`

Check characters one by one:

- `h` → not seen before ✅  
- `e` → not seen before ✅  
- `l` → not seen before ✅  
- next `l` → already seen ❌  

**Result:** `false`

---

### Input: `"aA"`

Check characters one by one:

- `a` → not seen before ✅  
- `A` → not seen before ✅  

**Result:** `true`

---

## Sample Test Cases

- `"abc"` → ✅ `true`  
- `"aA"` → ✅ `true`  
- `"QwErTy123!@"` → ✅ `true`  
- `"~!@#$%^&*()_+"` → ✅ `true`  
- `"hello"` → ❌ `false`  
- `"freeCodeCamp"` → ❌ `false`  
- `"!@#*$%^&*()aA"` → ❌ `false`  

---

## Notes
This problem is a classic example of using a **hash map (object in JavaScript)** to track seen characters and detect duplicates efficiently.  
- **Time Complexity:** O(n) (where *n* is the string length)  
- **Space Complexity:** O(n) in the worst case  
