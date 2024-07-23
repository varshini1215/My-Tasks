const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json()); 


const validateUser = [
  body('username').isString().withMessage('Username must be a string'),
  body('email').isEmail().withMessage('Email must be valid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];


app.post('/users', validateUser, (req, res) => {
 
  const { username, email, password } = req.body;
  res.status(201).json({ message: 'User created successfully', data: { username, email,password } });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
