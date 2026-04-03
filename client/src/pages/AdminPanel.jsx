import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  
  // Form State
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  
  // EDITING STATES 
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Function to fetch products from backend
  const fetchProducts = () => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // --- SMART SUBMIT (Handles both Add and Update) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const productData = { name, price, image, category };
    const url = isEditing 
      ? `http://localhost:5000/api/products/${editId}` 
      : 'http://localhost:5000/api/products';
    
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert(isEditing ? "Product Updated!" : "Product Added!");
        
        // Reset Form
        setIsEditing(false);
        setEditId(null);
        setName(''); setName(''); setPrice(''); setImage(''); setCategory('');
        
        // Refresh Table
        fetchProducts();
      } else {
        const errorData = await response.json();
        alert("Server error: " + errorData.message);
      }
    } catch (err) {
      console.error("Connection Error:", err);
      alert("Backend is not responding. Check your terminal!");
    }
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Delete this product?")) {
      await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE' });
      setProducts(products.filter(p => p._id !== id));
    }
  };

  const handleEditClick = (product) => {
    setIsEditing(true);
    setEditId(product._id);
    // Fill the inputs with product data
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setCategory(product.category);
    // Scroll up to the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center' }}>Admin Dashboard</h1>

      {/* --- DYNAMIC FORM (Changes title) --- */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', marginBottom: '40px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ marginBottom: '15px' }}>
          {isEditing ? "Edit Product" : "Add New Product"}
        </h3>
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required style={{ padding: '8px', flex: 1 }} />
          <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required style={{ padding: '8px', width: '100px' }} />
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required style={{ padding: '8px', flex: 1 }} />
          <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required style={{ padding: '8px', width: '150px' }} />
          
          <button type="submit" style={{ 
            padding: '8px 20px', 
            backgroundColor: isEditing ? '#ffc107' : '#28a745', 
            color: isEditing ? '#000' : 'white', 
            border: 'none', borderRadius: '4px', cursor: 'pointer' 
          }}>
            {isEditing ? "Update" : "Add"}
          </button>

          {isEditing && (
            <button type="button" onClick={() => { setIsEditing(false); setName(''); setPrice(''); setImage(''); setCategory(''); }} style={{ padding: '8px 20px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>
              Cancel
            </button>
          )}
        </form>
      </div>

      {/* --- PRODUCT LIST TABLE --- */}
      <table style={{ width: '100%', backgroundColor: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Image</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}><img src={p.image} alt="" width="50" /></td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{p.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>${p.price}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <button 
                  onClick={() => handleEditClick(p)} 
                  style={{ color: '#ffc107', border: 'none', background: 'none', cursor: 'pointer', marginRight: '10px', fontWeight: 'bold' }}
                >
                  Edit
                </button>
                {/* --- THE SEPARATOR LINE --- */}
        <span style={{ color: '#ccc', margin: '0 5px' }}>|</span>
                <button 
                  onClick={() => deleteProduct(p._id)} 
                  style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;