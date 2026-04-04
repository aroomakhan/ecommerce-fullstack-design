import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  
  // Form State - Added 'stock' to match Week 2 requirements
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(10); // Added stock state
  
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const fetchProducts = () => {
    // fetch('http://localhost:5000/api/products')
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Include 'stock' in the data object sent to the backend
    const productData = { name, price, image, category, stock };
    // const url = isEditing 
    //   ? `http://localhost:5000/api/products/${editId}` 
    //   : 'http://localhost:5000/api/products';
      const url = isEditing ? `${import.meta.env.VITE_API_URL}/api/products/${editId}` : `${import.meta.env.VITE_API_URL}/api/products`;
    
    const method = isEditing ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert(isEditing ? "Product Updated!" : "Product Added!");
        resetForm();
        fetchProducts();
      } else {
        const errorData = await response.json();
        alert("Server error: " + errorData.message);
      }
    } catch (err) {
      console.error("Connection Error:", err);
      alert("Backend is not responding.");
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setEditId(null);
    setName('');
    setPrice('');
    setImage('');
    setCategory('');
    setStock(10);
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
    setName(product.name);
    setPrice(product.price);
    setImage(product.image);
    setCategory(product.category);
    setStock(product.stock || 0); // Load existing stock
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4">
          {isEditing ? "Edit Product" : "Add New Product"}
        </h3>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-4">
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 border rounded flex-1 min-w-[200px]" />
          <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required className="p-2 border rounded w-32" />
          
          {/* Week 2 requirement: Category selection via dropdown to ensure matching filters */}
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
            className="p-2 border rounded w-48"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Laptops">Laptops</option>
            <option value="Watches">Watches</option>
            <option value="Clothes">Clothes</option>
          </select>

          <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} required className="p-2 border rounded w-24" />
          <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required className="p-2 border rounded flex-1 min-w-[200px]" />
          
          <button type="submit" className={`px-6 py-2 rounded text-white font-medium ${isEditing ? 'bg-yellow-500' : 'bg-green-600'}`}>
            {isEditing ? "Update Product" : "Add Product"}
          </button>

          {isEditing && (
            <button type="button" onClick={resetForm} className="px-6 py-2 bg-gray-500 text-white rounded">
              Cancel
            </button>
          )}
        </form>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-4">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id} className="border-b hover:bg-gray-50">
                <td className="p-4"><img src={p.image} alt="" className="w-12 h-12 object-cover rounded" /></td>
                <td className="p-4 font-medium">{p.name}</td>
                <td className="p-4 text-gray-600">{p.category}</td>
                <td className="p-4">${p.price}</td>
                <td className="p-4">{p.stock}</td>
                <td className="p-4">
                  <button onClick={() => handleEditClick(p)} className="text-blue-600 hover:underline mr-4">Edit</button>
                  <button onClick={() => deleteProduct(p._id)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;