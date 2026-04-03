import React from 'react';

const ItemCountry = ({ flag, name, site }) => {
  return (
    <div className="flex items-center gap-[11px] w-[220px] h-[36px] cursor-pointer hover:opacity-80 transition-opacity">
      {/* Flag Image (Ellipse/Circular) */}
      <div className="w-[28px] h-[20px] overflow-hidden rounded-[2px] flex-shrink-0">
        <img 
          src={flag} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Text Group */}
      <div className="flex flex-col">
        <span className="font-['Inter'] font-normal text-[16px] text-[#1C1C1C] leading-[24px]">
          {name}
        </span>
        <span className="font-['Inter'] font-normal text-[13px] text-[#8B96A5] leading-[16px]">
          {site}
        </span>
      </div>
    </div>
  );
};

export default ItemCountry;