# 💰 Tip Calculator

**Difficulty:** Easy  
**Topic:** Math / String Parsing / Formatting  

---

## 📌 Problem Statement
Given the **price of a meal** and a **custom tip percent**, return an array containing **three tip amounts**:

1. **15%** of the meal price  
2. **20%** of the meal price  
3. The **custom percent** of the meal price  

All values should be returned as strings in **"$N.NN"** format, rounded to **two decimal places**.

---

## ⚙️ Rules
- Meal prices are given in the format: `"$N.NN"`.  
- Custom tip percentages are given as strings like `"25%"`.  
- Output all amounts in the same format — e.g., `"$2.50"`.  
- Round to **two decimal places** using standard rounding rules.

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| calculateTips("$10.00", "25%") | ["$1.50", "$2.00", "$2.50"] |
| calculateTips("$89.67", "26%") | ["$13.45", "$17.93", "$23.31"] |
| calculateTips("$19.85", "9%") | ["$2.98", "$3.97", "$1.79"] |

---

## 🧮 Formula
\[
\text{Tip} = \text{Meal Price} \times \left(\frac{\text{Percent}}{100}\right)
\]
Round each result to **two decimals**, and prefix with `"$"`.

---

## ✅ Key Points
- Convert both price and percentage from string format to numbers.  
- Compute 15%, 20%, and custom tip values.  
- Format results consistently to **currency style** (`"$N.NN"`).  

---

## 🎯 Goal
This challenge reinforces:
- **Basic arithmetic o**
