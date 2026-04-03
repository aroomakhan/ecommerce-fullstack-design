const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Import Routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); 

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://ecommerce-fullstack-design-coral-ten.vercel.app' 
];

app.use(cors({
  origin: function (origin, callback) {
    // If there's no origin (like a direct browser hit to the API link), allow it
    if (!origin) return callback(null, true);
    
    // Check if the origin is in our list
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS blocked'), false);
    }
  },
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

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));
// 6. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});






module.exports = app;