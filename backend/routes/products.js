const express = require('express');
const router = express.Router();
const getConnection = require('../db'); 

// Get all products
router.get('/', async (req, res) => {
  try {
    const connection = await getConnection();
    const [results] = await connection.execute('SELECT * FROM products');
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Add Product
router.post('/', async (req, res) => {
  const { name, price, description, image_url } = req.body;  // include image_url here
  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'INSERT INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)',
      [name, price, description, image_url]   // include image_url here
    );
    res.json({ id: result.insertId, name, price, description, image_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add product' });
  }
});



// Update Product by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image_url } = req.body;

  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'UPDATE products SET name = ?, price = ?, description = ?, image_url = ? WHERE id = ?',
      [name, price, description, image_url, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ id, name, price, description, image_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update product' });
  }
});


// Delete Product by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await getConnection();
    const [result] = await connection.execute(
      'DELETE FROM products WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});
module.exports = router;