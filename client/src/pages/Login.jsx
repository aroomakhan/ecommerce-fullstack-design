import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Send data to backend
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save info & token so the AdminRoute can see it
        localStorage.setItem('userInfo', JSON.stringify(data));
        
        // Redirect based on Admin status
        if (data.isAdmin) {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        setError(data.message || 'Invalid Email or Password');
      }
    } catch (err) {
      setError('Could not connect to server. Is your backend running?');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#f4f7f6'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>Sign In</h2>
        
        {error && (
          <div style={{ 
            backgroundColor: '#ffebee', 
            color: '#c62828', 
            padding: '10px', 
            borderRadius: '5px', 
            marginBottom: '20px',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="name@company.com"
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '5px', 
                border: '1px solid #ddd',
                boxSizing: 'border-box' 
              }}
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              style={{ 
                width: '100%', 
                padding: '12px', 
                borderRadius: '5px', 
                border: '1px solid #ddd',
                boxSizing: 'border-box' 
              }}
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" style={{ 
            width: '100%', 
            padding: '12px', 
            backgroundColor: '#ff6a00', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            fontSize: '16px', 
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}>
            Sign In
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
          New here? <span style={{ color: '#ff6a00', cursor: 'pointer' }}>Create an account</span>
        </p>
      </div>
    </div>
  );
};

export default Login;