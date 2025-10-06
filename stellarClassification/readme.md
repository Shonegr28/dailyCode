# 🌌 Space Week Day 1: Stellar Classification

**Date:** October 4  
**Theme:** World Space Week — Astronomy Coding Challenge  

---

## 📌 Problem Statement
Given the **surface temperature** of a star (in **Kelvin, K**), determine its **stellar classification** based on the following temperature ranges:

| Classification | Temperature Range (K)      |
|----------------|-----------------------------|
| O | 30,000 K or higher |
| B | 10,000 K – 29,999 K |
| A | 7,500 K – 9,999 K |
| F | 6,000 K – 7,499 K |
| G | 5,200 K – 5,999 K |
| K | 3,700 K – 5,199 K |
| M | 0 K – 3,699 K |

Return the corresponding **classification letter** (`"O"`, `"B"`, `"A"`, `"F"`, `"G"`, `"K"`, or `"M"`) based on the given temperature.

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| classification(5778) | "G" |
| classification(2400) | "M" |
| classification(9999) | "A" |
| classification(3700) | "K" |
| classification(3699) | "M" |
| classification(210000) | "O" |
| classification(6000) | "F" |
| classification(11432) | "B" |

---

## ✅ Key Points
- Input: surface temperature in **Kelvin (integer or float)**.  
- Output: a **single letter** classification.  
- Classification ranges are **inclusive of boundaries** (e.g., 3700 K → "K").  

---

## 🌠 Scientific Context
The **Harvard Spectral Classification** system categorizes stars by their surface temperature and color:
- **O-type**: Blue, very hot  
- **B-type**: Blue-white  
- **A-type**: White  
- **F-type**: Yellow-white  
- **G-type**: Yellow (like our Sun)  
- **K-type**: Orange  
- **M-type**: Red, cooler stars  

---

## 🎯 Goal
This challenge introduces **conditional logic** and **range checking** while celebrating **World Space Week** — connecting programming with astronomy!
