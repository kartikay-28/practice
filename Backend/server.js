const express = require('express');

const PORT = 3000;

const app = express();

app.get('/',(req,res) => {
    res.send("This is my Express server")
})

app.listen(PORT , () => {
    console.log(`Hi my name is Kartikay Rattan . The server is live on http://localhost:${PORT}`)
})
