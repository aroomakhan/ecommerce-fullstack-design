// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// // 1. Import Routes
// const productRoutes = require('./routes/productRoutes');
// const authRoutes = require('./routes/authRoutes'); 

// const app = express();

// // 2. Middleware (Must come BEFORE routes)
// app.use(cors());
// app.use(express.json()); 

// // 3. Use Routes
// app.use('/api/products', productRoutes);
// app.use('/api/auth', authRoutes); // Moved this up here

// // 4. Test Route
// app.get('/', (req, res) => {
//   res.send("The API is running...");
// });

// // 5. Database Connection
// const MONGO_URI = process.env.MONGO_URI;
// mongoose.connect(MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected Successfully!"))
//   .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// // 6. Start the Server (Always at the very bottom)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server is listening on http://localhost:${PORT}`);
// });
// module.exports = app;
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
  origin: "*",
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

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));



module.exports = app;