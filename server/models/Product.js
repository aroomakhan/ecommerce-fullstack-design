const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }, // Changed to Number for easier math later
  image: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, default: 10 },
  rating: { type: Number, default: 0 },
  orders: { type: Number, default: 0 },
  shipping: { type: String, default: "Free Shipping" }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);