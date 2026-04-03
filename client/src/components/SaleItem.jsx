import React from 'react';

const SaleItem = ({ title, discount, image, showLine }) => {
  return (
    <div className="relative w-[179px] h-[235px] bg-white flex flex-col items-center pt-[8px] cursor-pointer hover:bg-gray-50 transition-colors">
      
      {/* Product Image */}
      <div className="w-[140px] h-[140px] flex items-center justify-center mb-[11px]">
        <img 
          src={image} 
          alt={title} 
          className="w-[101px] h-[121px] object-contain" 
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center gap-[7px]">
        <p className="w-[112px] h-[24px] font-['Inter'] font-normal text-[16px] leading-[24px] tracking-[-0.2px] text-[#1C1C1C] text-center">
          {title}
        </p>

        {/* Discount Badge */}
        <div className="w-[61px] h-[28px] bg-[#FFE3E3] rounded-[29px] flex items-center justify-center px-[13px]">
          <span className="font-['Inter'] font-medium text-[14px] tracking-[-0.2px] text-[#EB001B]">
            {discount}
          </span>
        </div>
      </div>

      {/* Vertical Divider (Line 63) */}
      {showLine && (
        <div className="absolute right-0 top-0 w-[1px] h-[235px] bg-[#E0E0E0]" />
      )}
    </div>
  );
};

export default SaleItem;