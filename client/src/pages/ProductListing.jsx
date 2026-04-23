import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // 1. Added useNavigate
import axios from 'axios'; // 2. CRITICAL: Added missing axios import
import SidebarFilter from '../components/SidebarFilter';
import TopControlBar from '../components/TopControlBar';
import ProductListItem from '../components/ProductListItem';
import ProductGridItem from '../components/ProductGridItem';
import AppliedFilters from '../components/AppliedFilters';
import Pagination from '../components/Pagination';
import Breadcrumb from '../components/Breadcrumb';

const ProductListing = ({ searchQuery, onSearch, addToSaved }) => {
  const [viewMode, setViewMode] = useState('list');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(''); 
  
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
      
        console.log("API URL:", import.meta.env.VITE_API_URL);

const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products${location.search}`);

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [location.search]); 

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-xl font-medium text-gray-600">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F8FA] min-h-screen font-['Inter']">
      <Breadcrumb category={new URLSearchParams(location.search).get('category') || "All products"} />

      <div className="pb-[28px] mt-4 px-4"> 
        
        <div className="max-w-[1180px] mx-auto flex flex-col md:flex-row gap-[28px] items-start">
          
          <div className="w-full md:w-[240px] flex-shrink-0">
            <SidebarFilter 
              onCategorySelect={(category) => {
                setActiveCategory(category); 
                // Sync URL with category selection
                navigate(category ? `/products?category=${category}` : "/products");
              }} 
              activeCategory={activeCategory || new URLSearchParams(location.search).get('category')} 
            />
          </div>

          <div className="flex-1 w-full">
            <TopControlBar 
              itemCount={products.length} 
              setViewMode={setViewMode} 
              currentView={viewMode}
            />
            
            <AppliedFilters 
              category={new URLSearchParams(location.search).get('category')} 
              onClear={() => navigate("/products")} 
            />

            {products.length === 0 ? (
              <div className="bg-white p-20 text-center rounded-lg border border-gray-200">
                <p className="text-gray-500 text-lg">No products found.</p>
              </div>
            ) : viewMode === 'list' ? (
              <div className="flex flex-col gap-[10px]">
                {products.map((item) => (
                  <ProductListItem 
                    key={item._id} 
                    {...item} 
                    onSave={() => addToSaved(item)} 
                  />
                ))}
              </div>
            ) : (
              /* 4. RESPONSIVE GRID: grid-cols-1 to grid-cols-3 */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                {products.map((item) => (
                  <ProductGridItem 
                    key={item._id} 
                    {...item} 
                    onSave={() => addToSaved(item)} 
                  />
                ))}
              </div>
            )}
            
            <div className="flex justify-center md:justify-end mt-[20px]">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;