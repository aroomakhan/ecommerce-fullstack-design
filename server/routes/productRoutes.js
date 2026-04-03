const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const { category, search, sort } = req.query;
    let query = {};

    // 1. Category Filter
    if (category && category !== "") {
      query.category = category;
    }

    // 2. Search Filter (Regex makes it "fuzzy" so 'sam' finds 'Samsung')
    if (search && search !== "") {
      query.name = { $regex: search, $options: 'i' }; 
    }

    // 3. Sorting Logic
    let sortOption = {};
    if (sort === 'price-low') sortOption = { price: 1 };
    if (sort === 'price-high') sortOption = { price: -1 };
    if (sort === 'newest') sortOption = { createdAt: -1 };

    const products = await Product.find(query).sort(sortOption);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// --- 1. ADD NEW PRODUCT (POST) ---
router.post('/', async (req, res) => {
  try {
    const { name, price, image, category, description } = req.body;

    // Create a new product instance using your Model
    const newProduct = new Product({
      name,
      price,
      image,
      category,
      description: description || "No description provided" // Fallback if empty
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct); // 201 means "Created Successfully"
  } catch (err) {
    res.status(400).json({ message: "Failed to add product: " + err.message });
  }
});

// Add this to your product routes in the backend:
router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } // Returns the newly updated product
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});


// --- 2. DELETE PRODUCT (DELETE) ---
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product removed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

module.exports = router;








