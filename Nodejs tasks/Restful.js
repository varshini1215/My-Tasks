const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); 

let products = [];


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});


app.post('/api/products', (req, res) => {
  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(product);
  res.status(201).json(product);
});


app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).send('Product not found');

  product.name = req.body.name;
  product.price = req.body.price;
  res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).send('Product not found');

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
