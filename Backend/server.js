//                                                              Backend practice


// const express = require('express');
// const cors = require('cors');

// const PORT = 3000; 
// const app = express();

// app.use(express.json());
// app.use(cors());

// const users = [
//     { username: "Rohit Sharma", age: 37, email: "Hitman@gmail.com" }, 
//     { username: "Virat Kohli", age: 36, email: "King@gmail.com" }, 
//     { username: "MS Dhoni", age: 42, email: "CaptainCool@gmail.com" } 
// ];

// // Add a new user
// app.post('/post', (req, res) => {
//     try {
//         const { username, age, email } = req.body;

//         if (!username || !age || !email) {
//             return res.status(400).json({ "Message": "Enter all the details" });
//         }

//         if (typeof age !== 'number' || age <= 0) {
//             return res.status(400).json({ "Message": "Invalid age" });
//         }

//         const newUser = { username, age, email };
//         users.push(newUser);

//         return res.status(201).json({ "Message": "User Added", "User": newUser });
//     } catch (error) {
//         return res.status(500).json({ "message": "Not Added", "error": error.message });
//     }
// });

// // Get all users
// app.get('/post', (req, res) => {
//     try {
//         return res.status(200).json({ "Message": "User Found", "Data": users });
//     } catch (error) {
//         return res.status(500).json({ "message": "User not Found", "error": error.message });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}`);
// });


//                                                                 backend practice 2

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;


app.use(bodyParser.json());


const users = [
  { id: 1, username: "Rohit Sharma", email: "Hitman@gmail.com", password: "Hitman45", dob: "1987-04-30" },
  { id: 2, username: "Virat Kohli", email: "King@gmail.com", password: "King18", dob: "1988-11-05" }
];


app.get("/users", (req, res) => {
  res.status(200).json({ message: "Users retrieved successfully", users });
});


app.post("/signup", (req, res) => {
  const { username, email, password, dob } = req.body;


  if (!username) {
    return res.status(400).json({ error: "Username cannot be empty" });
  }
  if (!email) {
    return res.status(400).json({ error: "Email cannot be empty" });
  }
  if (!password || password.length < 8 || password.length > 16) {
    return res.status(400).json({
      error: "Password length should be greater than 8 or less than or equal to 16",
    });
  }
  if (!dob) {
    return res.status(400).json({ error: "Date of Birth cannot be empty" });
  }

  const newUser = { id: users.length + 1, username, email, password, dob };
  users.push(newUser);
  console.log("New user created:", newUser);

  res.status(201).json({ message: "Signup successful", user: newUser });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// const express = require('express');

// const PORT = 3000;
// const app = express();
// const mongoose = require('mongoose');
// const creator = [
//     {
//         Name: "Kartikay",
//         Age: 18,
//         hobbies: ["cricket", "coding", "gaming"],
//         skills: ["javascript", "cpp"]             
//     }
// ];

// app.get('/', (req, res) => {
//     res.send('<h1 style="text-align: center;">This is my Express server</h1>');
// });

// app.get('/Home', (req, res) => {
//     res.status(200).json({ "Message": "Hi, my name is Kartikay Rattan. Welcome to my practice for backend CA.", "Data": creator });
// });

// //  alternate method 

// // app.get('/Home', (req, res) => {
// //     try {
// //         res.send(`
// //             <h1 style="text-align: center;">Hi, my name is Kartikay Rattan</h1> 
// //             <br> 
// //             <p>Welcome! This is my practice for backend CA.</p>
// //             <pre>${JSON.stringify(creator, null, 2)}</pre>
// //         `);  
// //     } catch (error) {
// //         res.json({ "message": "No creator found", "error": error.message });
// //     }
// // });

// mongoose.connect("mongodb+srv://kartikay002:kartikay@cluster0.wh630.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// .then(()=>{
//     console.log("MongoDB connected successfully")
// })
// .catch((error)=>{
//     console.error("Database connection failed",error.message);
//     process.exit(1);
// })
// app.listen(PORT, () => {
//     console.log(`Hi, my name is Kartikay Rattan. The server is live on http://localhost:${PORT}`);
// });
