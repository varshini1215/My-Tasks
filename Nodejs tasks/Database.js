const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


mongoose.connect('mongodb://localhost:27017/productsdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

app.use(express.json()); 


app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});


app.post('/api/products', async (req, res) => {
  let product = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  product = await product.save();
  res.status(201).json(product);
});


app.put('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        price: req.body.price,
      },
      { new: true }
    );
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});


app.delete('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (err) {
    res.status(400).send('Invalid ID');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
