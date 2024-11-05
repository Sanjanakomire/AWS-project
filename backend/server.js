const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./data/products.json');

app.use(cors());
app.use(express.json());

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    product ? res.json(product) : res.status(404).send('Product not found');
});

// Mock checkout and payment status
app.post('/api/checkout', (req, res) => {
    const { success } = req.body;
    res.json({ message: success ? 'Payment Successful!' : 'Payment Failed!' });
});

app.listen(5000, () => {
    console.log('Backend running on http://localhost:5000');
});
