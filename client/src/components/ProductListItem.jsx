import React from 'react';
import { Link } from 'react-router-dom';
import favoriteIcon from '../assets/icon/favorite_border.svg';

const ProductListItem = ({ _id, name, price, description, image, rating, orders, shipping, onSave }) => {
  
  // handler for the heart click
  const handleSaveClick = () => {
    onSave(); // This calls addToSaved(item) in App.jsx
    alert(`${name} has been saved for later!`);
  };

  return (
    <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] flex gap-[20px] hover:shadow-sm transition-shadow font-['Inter'] mb-[10px]">
      
      {/* Left Side: Image Container */}
      <div className="w-[184px] h-[184px] flex-shrink-0 flex items-center justify-center border border-[#EEEEEE] rounded-[6px] bg-white">
        <img 
          src={image} 
          alt={name} 
          className="max-h-[150px] object-contain mix-blend-multiply" 
        />
      </div>

      {/* Right Side: Product Info */}
      <div className="flex-1 relative">
        
        {/* ATTACH THE ONCLICK TO THE HEART BUTTON */}
        <button 
          onClick={handleSaveClick}
          className="absolute right-0 top-0 w-[40px] h-[40px] border border-[#E3E8EE] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors active:bg-red-50"
          title="Save for later"
        >
          <img src={favoriteIcon} alt="Favorite" className="w-[20px] h-[20px]" />
        </button>

        {/* Title */}
        <div className="mb-[8px]">
          <Link to={`/product/${_id}`}>
            <h4 className="text-[18px] font-medium text-[#1C1C1C] pr-[50px] leading-[24px] hover:text-[#0D6EFD] cursor-pointer transition-colors">
              {name}
            </h4>
          </Link>
        </div>
        
        {/* Price and Stats */}
        <div className="flex items-center gap-[12px] mb-[12px]">
          <span className="text-[20px] font-semibold text-[#1C1C1C]">${price}</span>
          
          <div className="flex items-center gap-[4px]">
             <span className="text-[#FF9017]">★★★★</span>
             <span className="text-[#D1D7DC]">★</span>
             <span className="text-[#8B96A5] text-[14px] ml-[2px]">{rating || '4.5'}</span>
          </div>

          <span className="w-[4px] h-[4px] bg-[#BDC4CD] rounded-full"></span>
          <span className="text-[#8B96A5] text-[14px]">{orders || '0'} orders</span>
          
          <span className="w-[4px] h-[4px] bg-[#BDC4CD] rounded-full"></span>
          <span className="text-[#00B517] text-[14px] font-medium">{shipping || 'Free Shipping'}</span>
        </div>

        {/* Description */}
        <div className="mb-[16px]">
          <p className="text-[#505050] text-[16px] leading-[24px] line-clamp-2 max-w-[700px]">
            {description}
          </p>
        </div>

        <Link 
          to={`/product/${_id}`} 
          className="text-[#0D6EFD] font-medium text-[16px] hover:underline"
        >
          View details
        </Link>
      </div>
    </div>
  );
};

export default ProductListItem;