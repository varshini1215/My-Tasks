const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');

const app = express();
const port = 3000;
const secretKey = 'Cu4PXZXC1Z'; 


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.Console()
  ]
});


mongoose.connect('mongodb://localhost:27017/productsdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => logger.info('Connected to MongoDB'))
  .catch(err => logger.error('Could not connect to MongoDB...', err));


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema);

app.use(express.json()); 


app.get('/api/products', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});


app.get('/api/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (err) {
    next(err);
  }
});

app.post('/api/products', async (req, res, next) => {
  try {
    let product = new Product({
      name: req.body.name,
      price: req.body.price,
    });
    product = await product.save();
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
});


app.put('/api/products/:id', async (req, res, next) => {
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
    next(err);
  }
});


app.delete('/api/products/:id', async (req, res, next) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (err) {
    next(err);
  }
});


app.use((err, req, res, next) => {
  logger.error(err.message, { metadata: err });
  res.status(500).send('Something failed.');
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
