import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login'; 
import AdminPanel from './pages/AdminPanel'; 

function App() {

  // Guard for Admin Page
  const AdminRoute = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    // If no user or not admin, go to login
    if (!userInfo || !userInfo.isAdmin) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const [searchQuery, setSearchQuery] = useState('');

  // --- CART STATES ---
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('alibaba_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [savedItems, setSavedItems] = useState(() => {
    const saved = localStorage.getItem('alibaba_saved');
    return saved ? JSON.parse(saved) : [];
  });

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('alibaba_cart', JSON.stringify(cart));
    localStorage.setItem('alibaba_saved', JSON.stringify(savedItems));
  }, [cart, savedItems]);

  // --- FUNCTIONS ---
  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item._id === product._id);
    if (isAlreadyInCart) {
      alert("This item is already in your cart!");
    } else {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    }
  };
  
  const removeFromCart = (id) => setCart(cart.filter(item => item._id !== id));
  const clearCart = () => setCart([]);
  
  const addToSaved = (product) => {
    const isAlreadySaved = savedItems.find((item) => item._id === product._id);
    if (!isAlreadySaved) {
      setSavedItems([...savedItems, product]);
    }
  };

  const moveToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item._id === product._id);
    if (!isAlreadyInCart) setCart([...cart, product]);
    setSavedItems(savedItems.filter(item => item._id !== product._id));
    alert(`${product.name} moved to your cart!`);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart(cart.map(item => item._id === id ? { ...item, quantity: newQty } : item));
  };

  return (
    <Router>
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} cartCount={cart.length} />
      <Navbar />
      
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} /> {/* Set Home as the main page */}
        <Route path="/products" element={<ProductListing searchQuery={searchQuery} onSearch={setSearchQuery} addToSaved={addToSaved} />} />
        <Route path="/login" element={<Login />} /> {/* <--- ADD THIS ROUTE */}
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} addToSaved={addToSaved} />} />
        
        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cart} 
              removeFromCart={removeFromCart} 
              updateQuantity={updateQuantity} 
              clearCart={clearCart} 
              savedItems={savedItems} 
              moveToCart={moveToCart} 
              addToSaved={addToSaved}
            />
          } 
        />

        {/* Protected Admin Route */}
        <Route 
          path="/admin" 
          element={
            <AdminRoute>
              <AdminPanel />
            </AdminRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;