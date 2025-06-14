# 🎉 Event Guest List Manager

A simple, dynamic web application that lets you manage a guest list for any event. Add guests, categorize them, track attendance, and remove them — all without refreshing the page.

This challenge showcases DOM manipulation, event handling, and a beautifully styled UI using vanilla JavaScript, HTML, and CSS.

---
-- How to Run These functions ----
## 🛠️ Features

### ✅ Core Functionality
- ✏️ Add guest names using a form input
- 📜 Display guests in a dynamic list
- ❌ Remove guests individually with a button
- 🛑 Prevent page reload using `event.preventDefault()`

### 🚀 Stretch Features
- 🏷️ Categorize guests as Friend, Family, or Colleague with colored tags
- 🟢 Toggle RSVP status (Attending / Not Attending)
- 🧍 Limit guest list to 10 people — alert if the limit is reached
- 🕒 Show the time each guest was added
- 🌈 Colorful and animated background using CSS

---

## 🎨 CSS Design Highlights

The `style.css` includes:

- **Floating background glows** using `@keyframes float`
- Styled form, buttons, and guest items:
  - Rounded corners, spacing, hover effects
  - RSVP toggle buttons
  - Category-specific colored tags

```css
@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(50px, 30px);
  }
}
-- I created a files in the Visual Code Editor -------
📁 Folder Structure
css
Copy
Edit
event-guest-list-manager/
│
├── index.html           # Main HTML layout
├── style.css            # Styling and background animation
└── src/
    └── index.js         # JavaScript logic
📦 Technologies Used
HTML5

CSS3 (Animations, Pseudo-elements)

Vanilla JavaScript (DOM methods, event handling)

🚀 How to Run
Option 1: With Live Server (Recommended)
Open folder in VS Code

Install Live Server extension

Right-click index.html → "Open with Live Server"

Option 2: Open Directly
Double-click index.html

For full feature support (like local development scripts), use Live Server

📌 Developers TakeNote:
Clear let variable declarations used

Uses event.preventDefault() on form submission

Uses DOM creation with createElement, appendChild, classList.add, etc.

Uses event delegation to handle dynamic buttons

🧠 What I Learned

DOM manipulation best practices

Preventing page reloads on form submission

Event delegation and dynamic element control

Styling a web page using animations and layout design


👤 Author : Adreen N.Githinji
EmailAddress : githinjiadreen27@gmail.com
Adreen-99
GitHub: https://github.com/Adreen-99
