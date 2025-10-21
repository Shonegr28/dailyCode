# 🌡️ Thermostat Adjuster 2

**Difficulty:** Easy  
**Topic:** Temperature Conversion / Conditional Logic  

---

## 📌 Problem Statement
Given the **current temperature** of a room in **Fahrenheit (°F)** and a **target temperature** in **Celsius (°C)**, determine how to adjust the room temperature to match the target.

Return a string that indicates whether to **heat**, **cool**, or **hold** based on the temperature difference.

---

## ⚙️ Rules
1. Convert the target temperature from Celsius to Fahrenheit using:  
   \[
   F = (C \times 1.8) + 32
   \]

2. Compare the current and target (converted) temperatures:
   - If the current temperature is **below** the target →  
     return `"Heat: X degrees Fahrenheit"`.
   - If the current temperature is **above** the target →  
     return `"Cool: X degrees Fahrenheit"`.
   - If the current temperature **equals** the target →  
     return `"Hold"`.

3. The difference \(X\) should be **rounded to one decimal place**.

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| adjustThermostat(32, 0) | `"Hold"` |
| adjustThermostat(70, 25) | `"Heat: 7.0 degrees Fahrenheit"` |
| adjustThermostat(72, 18) | `"Cool: 7.6 degrees Fahrenheit"` |
| adjustThermostat(212, 100) | `"Hold"` |
| adjustThermostat(59, 22) | `"Heat: 12.6 degrees Fahrenheit"` |

---

## 🧮 Conversion Formula
\[
\text{Target in °F} = (C \times 1.8) + 32
\]
\[
\text{Difference} = |\text{Current °F} - \text{Target °F}|
\]

---

## ✅ Key Points
- Always **convert** Celsius → Fahrenheit before comparison.  
- Return the **type of adjustment** and the **exact degree difference**.  
- Round results to **one decimal place**.  
- Maintain the exact string format shown in examples.

---

## 🎯 Goal
Practice:
- **Unit conversion** between Celsius and Fahrenheit  
- **Conditional decision-making**  
- **Precision rounding** and string formatting
