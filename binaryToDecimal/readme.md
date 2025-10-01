# 🔢 Binary to Decimal

This project converts a **binary number** (represented as a string) into its **decimal equivalent**.  

---

## 📌 Problem Statement
- A binary number uses only the digits `0` and `1`.  
- To convert binary to decimal:  
  - Multiply each digit by a power of 2.  
  - The rightmost digit is multiplied by `2^0`, the next by `2^1`, and so on.  
  - Add all results together to get the decimal value.  

Example:  
Binary `101` = `1 × 2² + 0 × 2¹ + 1 × 2⁰ = 4 + 0 + 1 = 5`.  

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| toDecimal("101") | 5 |
| toDecimal("1010") | 10 |
| toDecimal("10010") | 18 |
| toDecimal("1010101") | 85 |

---

## ✅ Key Points
- Input is always a string of binary digits (`0` or `1`).  
- Conversion requires multiplying each digit by the appropriate power of 2.  
- The result is returned as a decimal number.  

---

## 🎯 Goal
This exercise practices **string handling**, **loops**, and **number base conversions**.
