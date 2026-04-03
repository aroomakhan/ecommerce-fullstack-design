const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product'); // Ensure this path is correct!

dotenv.config();


//  Product Data (The 6 products from your UI)
const products = [
  {
    name: "Canon EOS 2000D DSLR",
    price: 998,
    image: "/phones.png", // Added "/" for the public folder
    description: "24.1MP Digital SLR Camera with EF-S 18-55mm lens.",
    category: "Electronics",
    rating: 4.5,
    orders: 154,
    shipping: "Free Shipping",
    stock: 12
  },
  {
    name: "GoPro HERO6 Black",
    price: 450,
    image: "/tablets.png", // Added "/" for the public folder
    description: "4K Action Camera with high-quality stabilization.",
    category: "Electronics",
    rating: 4.8,
    orders: 89,
    shipping: "Free Shipping",
    stock: 8
  },
  {
    name: "Samsung Galaxy Watch 4",
    price: 249,
    image: "/watch.png", // Ensure this file is in /public
    description: "A timeless design with a rotating bezel and stainless steel.",
    category: "Wearables",
    rating: 4.2,
    orders: 210,
    shipping: "Paid Shipping",
    stock: 15
  },
  {
    name: "Samsung Galaxy Watch 4",
    price: 249,
    image: "/watch.png", // Ensure this file is in /public
    description: "A timeless design with a rotating bezel and stainless steel.",
    category: "Wearables",
    rating: 4.2,
    orders: 210,
    shipping: "Paid Shipping",
    stock: 15
  },
  {
    name: "Samsung Galaxy Watch 4",
    price: 249,
    image: "/watch.png", // Ensure this file is in /public
    description: "A timeless design with a rotating bezel and stainless steel.",
    category: "Wearables",
    rating: 4.2,
    orders: 210,
    shipping: "Paid Shipping",
    stock: 15
  },
  {
    name: "Microsoft Surface Laptop 4",
    price: 1299,
    image: "/laptop.png", // Ensure this file is in /public
    description: "Style and speed. Stand out on HD video calls.",
    category: "Laptops",
    rating: 4.7,
    orders: 45,
    shipping: "Free Shipping",
    stock: 5
  }
];

//  The Seeding Function
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    // This deletes EVERYTHING in the product collection first so you don't get duplicates
    await Product.deleteMany(); 
    
    // This inserts your array above
    await Product.insertMany(products);
    
    console.log("✅ Products added to the Cloud Database!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();