const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;
const secretKey = 'your-secret-key'; 

app.use(express.json()); 

let users = []; 

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).send('User registered successfully');
});


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).send('Invalid username or password');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).send('Invalid username or password');

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});


const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

app.get('/api/protected', authenticateJWT, (req, res) => {
  res.send(`Hello, ${req.user.username}. You have access to this protected route.`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
