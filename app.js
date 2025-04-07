const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Samad" },
  { id: 2, name: "Ali" }
];

app.get('/', (req, res) => {
  res.send('Simple Node API with Express 5');
});

app.get('/users', async (req, res) => {
  res.json(users);
});

app.post('/users', async (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
