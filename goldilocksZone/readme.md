# 🌎 Space Week Day 5: Goldilocks Zone

**Theme:** World Space Week — Astronomy Coding Challenge  
**Focus:** Planetary Habitability and Orbital Calculations  

---

## 📌 Problem Statement
For the fifth day of Space Week, calculate the **Goldilocks Zone** of a star — the region around it where conditions are "just right" for **liquid water** to exist.  

Given the **mass of a star**, return an array containing the **start** and **end distances** of its Goldilocks Zone in **Astronomical Units (AU)**.

---

## ⚙️ Calculation Rules
1. **Luminosity** of the star is calculated as:
   \[
   L = M^{3.5}
   \]
   where \( M \) is the star’s mass (in solar masses).  

2. The **start of the Goldilocks Zone**:
   \[
   0.95 \times \sqrt{L}
   \]

3. The **end of the Goldilocks Zone**:
   \[
   1.37 \times \sqrt{L}
   \]

4. Round both results to **two decimal places**.

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| goldilocksZone(1) | [0.95, 1.37] |
| goldilocksZone(0.5) | [0.28, 0.41] |
| goldilocksZone(6) | [21.85, 31.51] |
| goldilocksZone(3.7) | [9.38, 13.52] |
| goldilocksZone(20) | [179.69, 259.13] |

---

## ✅ Key Points
- Input represents **mass of the star** relative to the Sun.  
- Output contains **two floating-point numbers** (start and end of the habitable zone).  
- Values are expressed in **Astronomical Units (AU)**, where 1 AU = distance from Earth to the Sun.  

---

## 🌠 Scientific Context
The **Goldilocks Zone**, or **habitable zone**, is the orbital region around a star where planetary conditions may allow **liquid water** to exist — neither too hot nor too cold.  
- Stars with higher masses have **larger and more distant** habitable zones.  
- Smaller stars have **closer** and **narrower** zones.

---

## 🎯 Goal
This challenge strengthens understanding of:
- **Mathematical modeling in astronomy**  
- **Exponentiation and square root operations**  
- **Precision and rounding in numerical computation**
