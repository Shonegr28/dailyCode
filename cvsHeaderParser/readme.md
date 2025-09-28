# 📑 CSV Header Parser

This project extracts column headings from the first line of a **CSV file**.  
It ensures each heading is returned without leading or trailing whitespace.  

---

## 📌 Problem Statement
Given the first line of a comma-separated values (CSV) file, return an array containing the headings.

Rules:
- The first line of a CSV contains headings separated by commas.  
- Remove any **leading** or **trailing** whitespace from each heading.  

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| getHeadings("name,age,city") | ["name", "age", "city"] |
| getHeadings("first name,last name,phone") | ["first name", "last name", "phone"] |
| getHeadings("username , email , signup date ") | ["username", "email", "signup date"] |

---

## ✅ Key Points
- Use commas to split the string into parts.  
- Remove unnecessary whitespace from each heading.  
- Preserve words and spaces **inside** headings (e.g., `"first name"` remains unchanged).  

---

## 🎯 Goal
This exercise builds skills in **string manipulation** and **array processing**, which are essential for working with structured data like CSV files.
