import React from 'react';

// The Individual Item (Instance)
const SingleItem = ({ title, price, image }) => (
  <div className="relative w-full h-[127px] bg-white border-r border-b border-[#E0E0E0] p-[16px] flex justify-between cursor-pointer hover:bg-gray-50 transition-colors">
    <div className="flex flex-col z-10">
      <h4 className="font-['Inter'] font-normal text-[16px] text-[#1C1C1C] leading-[20px] mb-[9px]">
        {title}
      </h4>
      <p className="font-['Inter'] font-normal text-[13px] text-[#8B96A5] leading-[100%]">
        From <br /> USD {price}
      </p>
    </div>
    <div className="w-[82px] h-[82px] flex items-center justify-center self-end">
      {image ? (
        <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
      ) : (
        <div className="w-10 h-10 bg-gray-100" />
      )}
    </div>
  </div>
);


const BlockItemsGroup = ({ categoryTitle, bannerImage, itemsData }) => {
  return (
    
    <section className="w-[1180px] h-[257px] mx-auto bg-[#FFFFFF] border border-[#E0E0E0] rounded-[6px] flex overflow-hidden">
      
      {/* left-aside (group) */}
      <div className="w-[280px] h-full relative p-[20px]">
        {bannerImage && (
          <img 
            src={bannerImage} 
            alt="Banner" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        )}
        <div className="relative z-10">
          <h2 className="font-['Inter'] font-semibold text-[20px] leading-[26px] text-[#1C1C1C] w-[150px] mb-[18px]">
            {categoryTitle}
          </h2>
          <button className="bg-white text-[#1C1C1C] font-['Inter'] font-medium text-[16px] py-[10px] px-[16px] rounded-[6px] shadow-[0px_1px_2px_0px_rgba(56,56,56,0.08)] border border-white">
            Source now
          </button>
        </div>
      </div>

      {/* Grid of 8 items */}
      <div className="flex-1 grid grid-cols-4 grid-rows-2">
        {itemsData.map((item, index) => (
          <SingleItem 
            key={index}
            title={item.title}
            price={item.price}
            image={item.img}
          />
        ))}
      </div>
    </section>
  );
};

export default BlockItemsGroup;