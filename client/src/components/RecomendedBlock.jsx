import React from 'react';
import { Link } from 'react-router-dom';

const RecomendedBlock = ({ products }) => {
  // 6 items to fill the 1180px width
  const displayProducts = products?.slice(0, 6);

  return (
    <section className="w-[1180px] h-[350px] bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] font-['Inter'] mx-auto mt-[20px] mb-[20px]">
      {/* Header */}
      <h3 className="text-[20px] font-semibold text-[#1C1C1C] mb-[22px]">
        Recommended items
      </h3>

      {/* Grid Container */}
      <div className="flex justify-between gap-[18px]">
        {displayProducts?.map((item) => (
          <Link 
            to={`/product/${item._id}`} 
            key={item._id} 
            className="flex flex-col w-[172px] group"
          >
            {/* Image Square*/}
            <div className="w-[172px] h-[172px] bg-[#EEEEEE] rounded-[6px] p-[12px] flex items-center justify-center mb-[12px] group-hover:bg-[#E3E8EE] transition-colors">
              <img 
                src={item.image} 
                alt={item.name} 
                className="max-w-full max-h-full object-contain mix-blend-multiply" 
              />
            </div>

            {/* Text details */}
            <div className="flex flex-col gap-[4px]">
              <h4 className="text-[#505050] text-[16px] leading-[22px] line-clamp-2 font-normal group-hover:text-[#0D6EFD]">
                {item.name}
              </h4>
              <p className="text-[#8B96A5] text-[16px] font-medium mt-[2px]">
                ${item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecomendedBlock;