
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// ... (Keep your GET routes as they are) ...
// --- GET ALL PRODUCTS (With Search, Category, and Sort) ---
router.get('/', async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    let queryObject = {};

    // 1. Filter by Category
    // 1. Filter by Category (Make it case-insensitive)
if (category && category !== "") {
  queryObject.category = { $regex: new RegExp(`^${category}$`, 'i') };
}

    // 2. Search by Name (Case-insensitive)
    if (search && search !== "") {
      queryObject.name = { $regex: search, $options: 'i' }; 
    }

    // Build the Mongoose query
    let apiQuery = Product.find(queryObject);

    // 3. Sorting Logic
    if (sort === 'price-low') {
      apiQuery = apiQuery.sort({ price: 1 }); // Ascending
    } else if (sort === 'price-high') {
      apiQuery = apiQuery.sort({ price: -1 }); // Descending
    } else {
      apiQuery = apiQuery.sort({ createdAt: -1 }); // Default: Newest first
    }

    const products = await apiQuery;
    
    // Log for debugging (This helps you see what's happening in the terminal)
    console.log(`Found ${products.length} products for query:`, queryObject);
    
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

// --- GET SINGLE PRODUCT BY ID ---
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Error fetching product" });
  }
});

// --- ADD NEW PRODUCT (POST) ---
router.post('/', async (req, res) => {
  try {
    // Add 'stock' to the destructuring here
    const { name, price, image, category, description, stock } = req.body; 
    const newProduct = new Product({
      name,
      price,
      image,
      category,
      stock: stock || 10, // Use provided stock or default to 10
      description: description || "No description provided"
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: "Failed to add: " + err.message });
  }
});

// --- EDIT PRODUCT (PUT) ---
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true } // runValidators ensures the new data is valid
    );
    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Update failed: " + err.message });
  }
});

// --- DELETE PRODUCT (DELETE) ---
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;