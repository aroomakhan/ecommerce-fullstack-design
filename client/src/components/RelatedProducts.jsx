import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProducts = ({ products }) => {
  
  const relatedItems = products?.slice(0, 6);

  return (
    <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] w-[280px] font-['Inter']">
      <h3 className="text-[16px] font-semibold text-[#1C1C1C] mb-[16px]">
        Related products
      </h3>

      <div className="flex flex-col gap-[16px]">
        {relatedItems?.map((item) => (
          <Link 
            to={`/product/${item._id}`} 
            key={item._id} 
            className="flex gap-[12px] items-start group"
          >
            {/* Image Box */}
            <div className="w-[80px] h-[80px] flex-shrink-0 border border-[#E3E8EE] rounded-[6px] p-[8px] flex items-center justify-center overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform" 
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-[3px]">
              <h4 className="text-[#1C1C1C] text-[14px] leading-[20px] font-normal line-clamp-2 group-hover:text-[#0D6EFD]">
                {item.name}
              </h4>
              <p className="text-[#8B96A5] text-[14px]">
                ${item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;