import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
  const [sortBy, setSortBy] = useState('price-low');

  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Get category from the URL (e.g., ?category=Electronics)
        const params = new URLSearchParams(location.search);
        const urlCategory = params.get('category') || ""; 
        
        // Use URL category if it exists, otherwise fall back to Sidebar state
        const categoryToUse = urlCategory || activeCategory;

        // Build the API URL
        let url = `http://localhost:5000/api/products?sort=${sortBy}`;
        
        if (searchQuery && searchQuery.trim() !== "") {
          // If user typed in search bar, prioritize search
          url += `&search=${encodeURIComponent(searchQuery)}`;
        } else if (categoryToUse) {
          // Otherwise use category
          url += `&category=${encodeURIComponent(categoryToUse)}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery, sortBy, activeCategory, location.search]); // Listens to all changes

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-xl font-medium text-gray-600">Loading products...</p>
      </div>
    );
  }

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
      
      <Breadcrumb category={activeCategory} />

      <div className="pb-[28px]"> 
        <div className="w-[1180px] mx-auto flex gap-[28px] items-start">
          
          {/* <SidebarFilter onCategorySelect={setActiveCategory} activeCategory={activeCategory} /> */}
          <SidebarFilter 
          onCategorySelect={(category) => {
          setActiveCategory(category); 
          onSearch("");                
  }} 
  activeCategory={activeCategory} 
/>

          <div className="flex-1">
            <TopControlBar 
              itemCount={products.length} 
              setViewMode={setViewMode} 
              currentView={viewMode}
              onSortChange={setSortBy} 
            />
            
            <AppliedFilters category={activeCategory} onClear={() => setActiveCategory('')} />

            {products.length === 0 ? (
              <div className="bg-white p-20 text-center rounded-lg border border-gray-200">
                <p className="text-gray-500 text-lg">No products found for "{searchQuery}"</p>
              </div>
            ) : viewMode === 'list' ? (
              <div className="flex flex-col gap-[10px]">
                {/* SLICE(0,6) to show only 6 products and pass onSave prop */}
                {products.slice(0, 6).map((item) => (
                  <ProductListItem 
                    key={item._id} 
                    {...item} 
                    image={item.image} 
                    onSave={() => addToSaved(item)} 
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-[20px]">
                {/* SLICE(0,6) to show only 6 products and pass onSave prop */}
                {products.slice(0, 6).map((item) => (
                  <ProductGridItem 
                    key={item._id} 
                    {...item} 
                    image={item.image} 
                    onSave={() => addToSaved(item)} 
                  />
                ))}
              </div>
            )}
            
            <div className="flex justify-end mt-[20px]">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;