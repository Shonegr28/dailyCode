# 🧼 HTML Tag Stripper

**Difficulty:** Easy  
**Topic:** String Processing / Regular Expressions

---

## 📌 Problem Statement
Given a string of **HTML code**, remove all **HTML tags** (including their attributes) and return the **plain text content**.

---

## ✅ Rules
- The input string will contain **valid HTML**.
- **Tags may be nested**.
- Remove **all tags and attributes** (anything like `<...>`).
- Preserve and return only the **text content** in order.

---

## 🧪 Example Test Cases

| Input | Expected Output |
|-------|-----------------|
| `'<a href="#">Click here</a>'` | `"Click here"` |
| `'<p class="center">Hello <b>World</b>!</p>'` | `"Hello World!"` |
| `'<img src="cat.jpg" alt="Cat">'` | `""` (empty string) |
| `'<main id="main"><section class="section">section</section><section class="section">section</section></main>'` | `"sectionsection"` |

---

## 🧠 Notes & Edge Cases
- **Self-closing tags** like `<img />` produce **no text**.
- **Whitespace handling** depends on the text between tags; tags themselves are removed, not normalized.
- Nested tags should not affect the **order** of the text that remains.

---

## 🎯 Goal
Practice **string manipulation** and **pattern recognition** to extract meaningful content from structured markup.
