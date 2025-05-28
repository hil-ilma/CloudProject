const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Routes
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');

app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Backend API is working!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
