# Node-js-calculator-
# 🧮 Simple Calculator App (Node.js + Express + HTML/CSS)

This is a basic calculator web application that performs addition, subtraction, multiplication, and division. The backend is powered by **Node.js** and **Express**, while the frontend uses **HTML** and **CSS** for a clean and interactive user interface.

---

## 📁 Project Structure

**node-calc/
│
├── index.html # Frontend UI
├── style.css # Styling for the UI
├── server.js # Node.js + Express backend
├── package.json # Project metadata and dependencies**

## ✅ Features

- Interactive calculator UI
- Handles 4 basic arithmetic operations
- Form-based input with result display
- Clean and responsive design

---

## ⚙️ Prerequisites

Make sure you have **Node.js** installed on your system.

### 👉 To check if Node.js is installed:

in bash: 
node -v
**If not installed, download and install it from:
👉 https://nodejs.org**

📦 Setup Instructions
Clone or download the project folder

bash
Copy code
cd node-calc
Initialize a Node project (only once):
This creates a package.json file.

bash
Copy code
npm init -y
Install dependencies:

bash
Copy code
npm install express body-parser
Your folder now includes:

node_modules/

package.json

package-lock.json

🚀 Run the App
Start the server:

bash
Copy code
node server.js
Open your browser and go to:

bash
Copy code
http://localhost:3000/index.html
✅ You should see the calculator UI and use it right away!

🛠️ Tech Stack
Backend: Node.js, Express

Frontend: HTML, CSS

Middleware: body-parser

🧼 Notes
Ensure all files (server.js, index.html, style.css) are in the same directory.

The server serves static files using: app.use(express.static(__dirname)).

The calculator uses POST requests to send form data to the backend for computation.

