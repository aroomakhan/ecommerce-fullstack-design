import React from 'react';
import favoriteIcon from '../assets/icon/favorite_border.svg';

const ProductGridItem = ({ name, price, rating, image }) => {
  return (
    <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[16px] flex flex-col hover:shadow-md transition-shadow font-['Inter'] h-full">
      
      {/*  Image Section (Top) */}
      
      <div className="h-[200px] flex items-center justify-center mb-[14px] bg-white">
        <img 
          src={image} 
          alt={name} 
          className="max-h-[160px] object-contain mix-blend-multiply transition-transform hover:scale-105 duration-300" 
        />
      </div>

      <div className="border-t border-[#EEEEEE] pt-[16px] flex flex-col flex-1">
        
        {/*  Price and Heart Section */}
        <div className="flex justify-between items-start mb-[8px]">
          <div>
            <span className="text-[18px] font-semibold text-[#1C1C1C]">{price}</span>
          </div>
          <button className="w-[40px] h-[40px] border border-[#E3E8EE] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors">
            <img src={favoriteIcon} alt="Favorite" className="w-[20px] h-[20px]" />
          </button>
        </div>

        {/*  Rating Section */}
        <div className="flex items-center gap-[4px] mb-[12px]">
          <div className="flex text-[#FF9017] text-[16px]">
            {"★".repeat(4)}
            <span className="text-[#D1D7DC]">★</span>
          </div>
          <span className="text-[#FF9017] text-[14px] ml-[2px] font-medium">{rating}</span>
        </div>

        {/*  Product Name Section */}
        <div className="mt-auto">
          <p className="text-[#505050] text-[16px] leading-[24px] line-clamp-2 hover:text-[#0D6EFD] cursor-pointer transition-colors">
            {name}
          </p>
        </div>

      </div>
    </div>
  );
};

export default ProductGridItem;