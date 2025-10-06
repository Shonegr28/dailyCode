# 🔐 P@ssw0rd Str3ngth!

**Difficulty:** Easy  
**Topic:** String Validation / Regular Expressions  

---

## 📌 Problem Statement
Given a password string, return `"weak"`, `"medium"`, or `"strong"` based on its strength.

A password is evaluated according to the following **four rules**:

1. It is **at least 8 characters** long.  
2. It contains **both uppercase and lowercase letters**.  
3. It contains **at least one number**.  
4. It contains **at least one special character** from this set:  
   `! @ # $ % ^ & *`

Return:
- `"weak"` → if the password meets **fewer than 2** rules.  
- `"medium"` → if the password meets **2 or 3** rules.  
- `"strong"` → if the password meets **all 4** rules.  

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| checkStrength("123456") | "weak" |
| checkStrength("pass!!!") | "weak" |
| checkStrength("Qwerty") | "weak" |
| checkStrength("PASSWORD") | "weak" |
| checkStrength("PASSWORD!") | "medium" |
| checkStrength("PassWord%^!") | "medium" |
| checkStrength("qwerty12345") | "medium" |
| checkStrength("S3cur3P@ssw0rd") | "strong" |
| checkStrength("C0d3&Fun!") | "strong" |

---

## ✅ Key Points
- Use string length and pattern checks (letters, digits, and symbols).  
- Each rule increases the password’s “score.”  
- The total score determines whether it’s **weak**, **medium**, or **strong**.  

---

## 🎯 Goal
This exercise practices **string analysis**, **conditional logic**, and **pattern recognition** — essential skills for data validation and security checks.
