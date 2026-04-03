const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');



// Helper function to generate a Token
const generateToken = (id) => {
  return jwt.sign({ id }, 'supersecret123', { expiresIn: '30d' });
};

// @route   POST /api/auth/register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } 
  
  catch (error) {
  console.error("DETAILED REGISTER ERROR:", error); // ADD THIS LINE
  res.status(500).json({ message: 'Server error', dev_error: error.message });
}
  
  
  // catch (error) {
  //   res.status(500).json({ message: 'Server error' });
  // }
});

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    
    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;