const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Import Routes
const productRoutes = require('./routes/productRoutes');const authRoutes = require('./routes/authRoutes'); // Added this

const app = express();

// 2. Middleware 
// , "http://localhost:5173/"
// app.use(cors());
app.use(cors({
  origin: ["https://ecommerce-frontend-alpha-cyan.vercel.app"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json()); // This only needs to be here once

// 3. Use Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes); // Moved this up here

// 4. Test Route
app.get('/', (req, res) => {
  res.send("The API is running...");
});

// 5. Database Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// 6. Start the Server (Always at the very bottom)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});
// At the bottom of your server file
module.exports = app;