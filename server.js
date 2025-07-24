const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // Serves static files like HTML, CSS

// Handle calculator POST request
const fs = require('fs');

app.post('/calculate', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operator = req.body.operator;

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            result = 'Invalid operator';
    }

    // Read result.html and insert the result
    fs.readFile(path.join(__dirname, 'result.html'), 'utf8', (err, data) => {
        if (err) {
            res.send('Error loading result page.');
        } else {
            const updatedHtml = data.replace('{{result}}', result);
            res.send(updatedHtml);
        }
    });
});


// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
