# 📡 Space Week Day 3: Phone Home

**Theme:** World Space Week — Astronomy Coding Challenge  
**Focus:** Communication delay & transmission time

---

## 📌 Problem Statement
You are given an array of numbers representing **distances (km)** along a communication route: you → satellites → home planet.  
Compute how long a message takes to reach the destination planet.

---

## ⚙️ Rules & Constraints
- The **first value** is the distance from you to the **first satellite**.  
- Each **subsequent value**, except the last, is the distance to the **next satellite**.  
- The **last value** is the distance from the **final satellite** to the home planet.  
- Signal speed: **300,000 km/s**.  
- Each **satellite hop** adds a **0.5 s** transmission delay.  
- **Return a number** rounded to **4 decimal places**, with **trailing zeros removed**.

---

## 🧮 Formula
Let `route` be the array of distances and `n = route.length`.

- **Total distance:** \(\displaystyle D = \sum route_i\)  
- **Flight time:** \(\displaystyle T_{\text{flight}} = D / 300{,}000\)  
- **Satellite delay:** there are \(n-1\) satellites/hops → \(\displaystyle T_{\text{delay}} = (n-1)\times 0.5\)  
- **Total time:** \(\displaystyle T = T_{\text{flight}} + T_{\text{delay}}\)  
- Round \(T\) to **4 decimal places** and **strip trailing zeros**.

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| `sendMessage([300000, 300000])` | `2.5` |
| `sendMessage([384400, 384400])` | `3.0627` |
| `sendMessage([54600000, 54600000])` | `364.5` |
| `sendMessage([1000000, 500000000, 1000000])` | `1674.3333` |
| `sendMessage([10000, 21339, 50000, 31243, 10000])` | `2.4086` |
| `sendMessage([802101, 725994, 112808, 3625770, 481239])` | `21.1597` |

---

## ✅ Key Points
- Each array element is a **segment** of travel (km).  
- There are **n − 1** satellite delays (0.5 s each).  
- Ensure correct **precision** (4 decimals) and **output formatting** (no trailing zeros).

---

## 🎯 Goal
Practice **iteration**, **unit-rate time calculations**, and **result formatting** to model realistic **space communication latency**.
