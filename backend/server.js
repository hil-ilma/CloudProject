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

// Health check endpoint for Kubernetes probes
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
