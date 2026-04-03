import React from 'react';
import messageIcon from '../assets/icon/message_small.svg';
import verifiedIcon from '../assets/icon/shopping_basket.svg';
import checkIcon from '../assets/icon/check_icon.svg'; 

const InfoRow = ({ label, value, isBlue }) => (
  <div className="flex items-center py-[10px] text-[16px]">
    <span className="text-[#8B96A5] w-[120px] flex-shrink-0 font-normal">{label}:</span>
    <span className={`${isBlue ? 'text-[#0D6EFD]' : 'text-[#505050]'} font-normal truncate`}>
      {value}
    </span>
  </div>
);

const Divider = () => <hr className="border-[#E3E8EE] my-[5px]" />;

const ProductInfo = ({ product, addToCart }) => {
  if (!product) return null;

  return (
    <div className="font-['Inter'] pr-[10px]">
      {/* Availability Header */}
      <div className="flex items-center gap-[6px] mb-[10px]">
        <img src={checkIcon} alt="check" className="w-[20px] h-[20px]" />
        <span className="text-[#00B517] font-medium">In stock</span>
      </div>

      {/* Product Title */}
      <h1 className="text-[24px] font-semibold text-[#1C1C1C] leading-[32px] mb-[15px]">
        {product.name}
      </h1>

      {/* Stats Row */}
      <div className="flex items-center gap-[12px] mb-[20px] text-[16px]">
        <div className="flex text-[#FF9017]">
          {"★".repeat(4)}
          <span className="text-[#D1D7DC]">★</span>
          <span className="ml-[8px] font-medium">{product.rating || '4.5'}</span>
        </div>
        <span className="w-[4px] h-[4px] bg-[#BDC4CD] rounded-full"></span>
        <div className="flex items-center gap-[6px] text-[#8B96A5]">
          <img src={messageIcon} alt="" className="w-[18px] opacity-50" />
          <span>32 reviews</span>
        </div>
        <span className="w-[4px] h-[4px] bg-[#BDC4CD] rounded-full"></span>
        <div className="flex items-center gap-[6px] text-[#8B96A5]">
          <img src={verifiedIcon} alt="" className="w-[18px] opacity-50" />
          <span>154 sold</span>
        </div>
      </div>

      {/* EXACT TRADE PRICE BOX */}
      <div className="bg-[#FFF0DF] rounded-[4px] p-[15px_20px] mb-[25px] flex">
        <div className="flex-1 border-r border-[#FFD3A2] pr-[20px]">
          <p className="text-[#FA3434] text-[18px] font-bold">${product.price}</p>
          <p className="text-[#505050] text-[13px]">50-100 pcs</p>
        </div>
        <div className="flex-1 border-r border-[#FFD3A2] px-[20px]">
          <p className="text-[#1C1C1C] text-[18px] font-bold">${(product.price * 0.9).toFixed(2)}</p>
          <p className="text-[#505050] text-[13px]">100-700 pcs</p>
        </div>
        <div className="flex-1 pl-[20px]">
          <p className="text-[#1C1C1C] text-[18px] font-bold">${(product.price * 0.8).toFixed(2)}</p>
          <p className="text-[#505050] text-[13px]">700+ pcs</p>
        </div>
      </div>

      {/* SHORT INFO / SPECS TABLE */}
      <div className="mb-[15px]">
        <InfoRow label="Price" value="Negotiable" />
      </div>
      
      <Divider />

      <div className="py-[10px]">
        <InfoRow label="Type" value={product.category || "Classic"} />
        <InfoRow label="Material" value="Plastic / Metal" />
        <InfoRow label="Design" value="Modern Trendy" />
      </div>

      <Divider />

      <div className="py-[10px]">
        <InfoRow label="Customized" value="Customized logo and design" isBlue />
        <InfoRow label="Protection" value="Refund Policy" isBlue />
        <InfoRow label="Warranty" value="2 years full warranty" />
      </div>

      <Divider />

      {/* ACTION BUTTONS */}
      <div className="mt-[25px] flex flex-col gap-[12px]">

        <div className="flex gap-[10px]">
          {/* Add to Cart Action */}
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 border border-[#E3E8EE] bg-white text-[#0D6EFD] py-[10px] rounded-[6px] font-medium text-[16px] hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;