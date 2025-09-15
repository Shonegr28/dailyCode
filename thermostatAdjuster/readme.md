# Adjust Thermostat

## Problem
Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

- Return **"heat"** if the current temperature is below the target.  
- Return **"cool"** if the current temperature is above the target.  
- Return **"hold"** if the current temperature is equal to the target.  

---

## Tests and Expected Results

1. `adjustThermostat(68, 72)` → **"heat"**  
2. `adjustThermostat(75, 72)` → **"cool"**  
3. `adjustThermostat(72, 72)` → **"hold"**  
4. `adjustThermostat(-20.5, -10.1)` → **"heat"**  
5. `adjustThermostat(100, 99.9)` → **"cool"**  
6. `adjustThermostat(0.0, 0.0)` → **"hold"**  

---

## Summary
- If the room is colder than the target → **heat**  
- If the room is warmer than the target → **cool**  
- If the room matches the target → **hold**  
