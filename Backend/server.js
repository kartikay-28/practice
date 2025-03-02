const express = require('express');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center;">This is my Express server</h1>');
});

app.get('/Home', (req, res) => {
    res.send('<h1 style="text-align: center;">Hi, my name is Kartikay Rattan</h1> <br> <p>Welcome! This is my practice for backend CA.</p>');
});

app.listen(PORT, () => {
    console.log(`Hi, my name is Kartikay Rattan. The server is live on http://localhost:${PORT}`);
});
