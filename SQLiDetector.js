const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    let userInput = req.query.input;
    let isVulnerable = /['"=;]/.test(userInput);

    if (isVulnerable) {
        res.send('Potential SQL Injection Detected');
    } else {
        res.send('Input seems safe');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
