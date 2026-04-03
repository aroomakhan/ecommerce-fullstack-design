
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Breadcrumb from '../components/Breadcrumb';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import SellerCard from '../components/SellerCard';
import ProductTabs from '../components/ProductTabs';
import RelatedProducts from '../components/RelatedProducts';
import PromoBanner from '../components/PromoBanner';
import RecomendedBlock from '../components/RecomendedBlock';
import Footer from '../components/Footer';


const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ADDED: The flexible API link
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // UPDATED: Now uses the base URL for both calls
        const [prodRes, allRes] = await Promise.all([
          fetch(`${API_BASE_URL}/api/products/${id}`),
          fetch(`${API_BASE_URL}/api/products`)
        ]);
        const prodData = await prodRes.json();
        const allData = await allRes.json();
        
        setProduct(prodData);
        setAllProducts(allData);
      } catch (err) {
        console.error("Layout Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, API_BASE_URL]);

  if (loading) return <div className="p-20 text-center font-['Inter']">Loading...</div>;

  return (
    <div className="bg-[#F7F8FA] min-h-screen font-['Inter']">
      <div className="max-w-[1180px] mx-auto py-[20px] px-[10px]">
        
        <Breadcrumb name={product?.name} />

        {/* THE TOP SECTION */}
        <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] flex gap-[20px] mb-[20px]">
          {/* Left: Gallery */}
          <div className="w-[380px] flex-shrink-0">
            <ProductGallery image={product?.image} name={product?.name} />
          </div>

          {/* Middle: Info */}
          <div className="flex-1">
            
            <ProductInfo product={product} addToCart={addToCart} />
          </div>

          {/* Right: Seller Card */}
          <div className="w-[280px] flex-shrink-0">
            <SellerCard />
          </div>
        </div>

        {/* THE BOTTOM SECTION */}
        <div className="flex gap-[20px] items-start">
          <div className="flex-1">
            <ProductTabs description={product?.description} />
          </div>

          <div className="w-[280px] flex-shrink-0">
            <RelatedProducts products={allProducts} />
          </div>
        </div>

        <RecomendedBlock products={allProducts} />
        <PromoBanner />
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;