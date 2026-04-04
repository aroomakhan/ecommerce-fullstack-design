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
  const [searchQuery, setSearchQuery] = useState('');

  // Guard for Admin Page
  const AdminRoute = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (!userInfo || !userInfo.isAdmin) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  // --- CART & SAVED STATES ---
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('alibaba_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [savedItems, setSavedItems] = useState(() => {
    const saved = localStorage.getItem('alibaba_saved');
    return saved ? JSON.parse(saved) : [];
  });

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
      setCart([...cart, { ...product, quantity: 1 }]);
      alert(`${product.name} added to cart!`);
    }
  };
  
  const addToSaved = (product) => {
    const isAlreadySaved = savedItems.find((item) => item._id === product._id);
    if (!isAlreadySaved) {
      setSavedItems([...savedItems, product]);
    }
  };

  // ... (Keeping your other functions like removeFromCart, moveToCart, etc.)

  return (
    <Router>
      {/* Header updates the search state */}
      <Header onSearch={setSearchQuery} searchQuery={searchQuery} cartCount={cart.length} />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* FIX: We pass BOTH the query AND the function to change it */}
        <Route 
          path="/products" 
          element={
            <ProductListing 
      searchQuery={searchQuery} 
      onSearch={setSearchQuery} // <--- Check if this line exists!
      addToSaved={addToSaved} 
    />
          } 
        />
        
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} addToSaved={addToSaved} />} />
        
        <Route 
          path="/cart" 
          element={
            <Cart 
              cartItems={cart} 
              removeFromCart={(id) => setCart(cart.filter(item => item._id !== id))} 
              updateQuantity={(id, qty) => setCart(cart.map(item => item._id === id ? { ...item, quantity: qty } : item))} 
              clearCart={() => setCart([])} 
              savedItems={savedItems} 
              moveToCart={(p) => {
                if (!cart.find(i => i._id === p._id)) setCart([...cart, {...p, quantity: 1}]);
                setSavedItems(savedItems.filter(i => i._id !== p._id));
              }} 
              addToSaved={addToSaved}
            />
          } 
        />

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