const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// 1. Import Routes
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes'); 

const app = express();

const allowedOrigins = [
  'http://localhost:5173', // Keep for local development
  'https://ecommerce-fullstack-design-coral-ten.vercel.app' // 👈 PASTE YOUR ACTUAL FRONTEND URL HERE
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
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