const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.post('/data', (req, res) => {
  const data = req.body; 
  res.send(`Received data: ${JSON.stringify(data)}`);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});