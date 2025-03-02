const express = require('express');

const PORT = 3000;
const app = express();

const creator = [
    {
        Name: "Kartikay",
        Age: 18,
        hobbies: ["cricket", "coding", "gaming"],
        skills: ["javascript", "cpp"]             
    }
];

app.get('/', (req, res) => {
    res.send('<h1 style="text-align: center;">This is my Express server</h1>');
});

app.get('/Home', (req, res) => {
    res.status(200).json({ "Message": "Hi, my name is Kartikay Rattan. Welcome to my practice for backend CA.", "Data": creator });
});

//  alternate method 

// app.get('/Home', (req, res) => {
//     try {
//         res.send(`
//             <h1 style="text-align: center;">Hi, my name is Kartikay Rattan</h1> 
//             <br> 
//             <p>Welcome! This is my practice for backend CA.</p>
//             <pre>${JSON.stringify(creator, null, 2)}</pre>
//         `);  
//     } catch (error) {
//         res.json({ "message": "No creator found", "error": error.message });
//     }
// });

app.listen(PORT, () => {
    console.log(`Hi, my name is Kartikay Rattan. The server is live on http://localhost:${PORT}`);
});
