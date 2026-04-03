// Final CORS Fix - April 3
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Import Routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); 

const app = express();

// 2. Middleware 
// UPDATED: Added specific options to ensure Vercel/Browsers play nice
app.use(cors({
  origin: ["https://ecommerce-fullstack-design-drab.vercel.app", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); 

// 3. Use Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// 4. Test Route
app.get('/', (req, res) => {
  res.send("The API is running...");
});

// 5. Database Connection
const MONGO_URI = process.env.MONGO_URI;
// 6. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));




module.exports = app;