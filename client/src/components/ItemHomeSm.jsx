import React from 'react';

const ItemHomeSm = ({ image, title, info }) => {
  return (
    /* BG (vector) properties applied here */
    <div className="bg-white border border-[#E0E0E0] rounded-[6px] p-[16px] flex flex-col hover:shadow-sm transition-all h-full cursor-pointer">
      
      {/* Image/instance & Bitmap/image Container */}
      <div className="w-full h-[150px] flex items-center justify-center mb-[14px] overflow-hidden">
        <img 
          src={image} 
          alt={info} 
          className="max-h-full max-w-full object-contain mix-blend-multiply" 
        />
      </div>

      {/* Text Group */}
      <div className="flex flex-col gap-[4px]">
        {/* title (text) - The Price */}
        <span className="font-['Inter'] font-medium text-[16px] text-[#1C1C1C]">
          {title}
        </span>
        
        {/* info (text) - The Description */}
        <p className="font-['Inter'] font-normal text-[14px] text-[#8B96A5] leading-[20px] line-clamp-2">
          {info}
        </p>
      </div>
    </div>
  );
};

export default ItemHomeSm;