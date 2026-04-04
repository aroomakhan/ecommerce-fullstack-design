const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // Week 2 Task: Attributes id, name, price, image, description, category, stock
  name: { 
    type: String, 
    required: [true, "Product name is required"], 
    trim: true 
  },
  price: { 
    type: Number, 
    required: [true, "Price is required"],
    min: 0 
  },
  image: { 
    type: String, 
    required: [true, "Image URL is required"] 
  },
  description: { 
    type: String, 
    default: "No description provided",
    trim: true 
  },
  category: { 
    type: String, 
    required: [true, "Category is required"],
    trim: true 
  },
  stock: { 
    type: Number, 
    default: 10,
    min: 0 
  },
  // Additional fields you added (Good for the Alibaba Clone UI)
  rating: { type: Number, default: 0 },
  orders: { type: Number, default: 0 },
  shipping: { type: String, default: "Free Shipping" }
}, { 
  timestamps: true,
  // This helps if your frontend specifically looks for .id instead of ._id
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

module.exports = mongoose.model('Product', productSchema);
// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true }, // Changed to Number for easier math later
//   image: { type: String, required: true },
//  description: { type: String, default: "No description provided" },
//   category: { type: String, required: true },
//   stock: { type: Number, default: 10 },
//   rating: { type: Number, default: 0 },
//   orders: { type: Number, default: 0 },
//   shipping: { type: String, default: "Free Shipping" }
// }, { timestamps: true });

// module.exports = mongoose.model('Product', productSchema);