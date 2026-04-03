import React, { useState } from 'react';
import expandIcon from '../assets/icon/icon_expand_less.svg';

const SidebarFilter = ({ onCategorySelect, activeCategory }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);

  const [openSections, setOpenSections] = useState({
    category: true,
    brands: true,
    features: true,
    price: true,
    condition: true,
    ratings: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const FilterHeader = ({ title, sectionKey }) => (
    <div 
      className="flex justify-between items-center mb-[14px] cursor-pointer group"
      onClick={() => toggleSection(sectionKey)}
    >
      <h3 className="text-[#1C1C1C] font-semibold text-[16px]">{title}</h3>
      <img 
        src={expandIcon} 
        alt="toggle" 
        className={`w-[24px] h-[24px] opacity-60 transition-transform duration-300 ${
          openSections[sectionKey] ? 'rotate-0' : 'rotate-180'
        }`} 
      />
    </div>
  );

  return (
    <aside className="w-[240px] flex flex-col gap-[20px] font-['Inter']">
      
      {/*  Category */}
<div className="border-t border-[#E3E8EE] pt-[14px]">
  <FilterHeader title="Category" sectionKey="category" />
  {openSections.category && (
    <ul className="flex flex-col gap-[12px] text-[#505050] text-[16px] animate-fadeIn">
      {/* Click to show ALL */}
      <li 
    className={`cursor-pointer ${activeCategory === '' ? 'text-[#0D6EFD] font-bold' : 'hover:text-[#0D6EFD]'}`} 
    onClick={() => onCategorySelect('')} 
  >
    All Categories
  </li>
      
      {/* Click for Electronics */}
      <li 
    className={`cursor-pointer ${activeCategory === 'Electronics' ? 'text-[#0D6EFD] font-bold' : 'hover:text-[#0D6EFD]'}`} 
    onClick={() => onCategorySelect('Electronics')}
  >
    Electronics
  </li>
{/*  Click for Laptops */}
  <li 
    className={`cursor-pointer ${activeCategory === 'Laptops' ? 'text-[#0D6EFD] font-bold' : 'hover:text-[#0D6EFD]'}`} 
    onClick={() => onCategorySelect('Laptops')}
  >
    Laptops
  </li>
    </ul>
  )}
</div>

      {/* Brands */}
      <div className="border-t border-[#E3E8EE] pt-[14px]">
        <FilterHeader title="Brands" sectionKey="brands" />
        {openSections.brands && (
          <div className="flex flex-col gap-[12px] animate-fadeIn">
            {['Samsung', 'Apple', 'Huawei', 'Pocco', 'Lenovo'].map((brand) => (
              <label key={brand} className="flex items-center gap-[10px] cursor-pointer group">
                <input type="checkbox" className="w-[20px] h-[20px] border-[#BDBDBD] rounded-[5px] accent-[#0D6EFD]" />
                <span className="text-[#1C1C1C] text-[16px] group-hover:text-[#0D6EFD]">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Features */}
      <div className="border-t border-[#E3E8EE] pt-[14px]">
        <FilterHeader title="Features" sectionKey="features" />
        {openSections.features && (
          <div className="flex flex-col gap-[12px] animate-fadeIn">
            {['Metallic', 'Plastic cover', '8GB RAM'].map((feat) => (
              <label key={feat} className="flex items-center gap-[10px] cursor-pointer group">
                <input type="checkbox" className="w-[20px] h-[20px] accent-[#0D6EFD] rounded-[5px]" />
                <span className="text-[#1C1C1C] text-[16px] group-hover:text-[#0D6EFD]">{feat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/*  Price Range */}
      <div className="border-t border-[#E3E8EE] pt-[14px]">
        <FilterHeader title="Price range" sectionKey="price" />
        {openSections.price && (
          <div className="flex flex-col gap-[20px] pt-4 animate-fadeIn">
            <div className="relative w-full h-[6px] bg-[#E3E8EE] rounded-full">
              <div 
                className="absolute h-full bg-[#AFD0FF] rounded-full"
                style={{ 
                  left: `${(minPrice / 10000) * 100}%`, 
                  right: `${100 - (maxPrice / 10000) * 100}%` 
                }}
              ></div>
              <input
                type="range" min="0" max="10000" value={minPrice}
                onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice - 500))}
                className="absolute w-full h-[6px] appearance-none bg-transparent pointer-events-none z-30 slider-thumb"
              />
              <input
                type="range" min="0" max="10000" value={maxPrice}
                onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice + 500))}
                className="absolute w-full h-[6px] appearance-none bg-transparent pointer-events-none z-30 slider-thumb"
              />
            </div>
            <div className="flex gap-[9px]">
              <div className="flex flex-col gap-[5px] flex-1">
                <label className="text-[14px] text-[#1C1C1C]">Min</label>
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="w-full border border-[#E3E8EE] rounded-[6px] p-[8px] outline-none text-[16px]" />
              </div>
              <div className="flex flex-col gap-[5px] flex-1">
                <label className="text-[14px] text-[#1C1C1C]">Max</label>
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full border border-[#E3E8EE] rounded-[6px] p-[8px] outline-none text-[16px]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Condition */}
      <div className="border-t border-[#E3E8EE] pt-[14px]">
        <FilterHeader title="Condition" sectionKey="condition" />
        {openSections.condition && (
          <div className="flex flex-col gap-[12px] animate-fadeIn">
            {['Any', 'Refurbished', 'Brand new', 'Old items'].map((item) => (
              <label key={item} className="flex items-center gap-[10px] cursor-pointer group">
                <input type="radio" name="condition" className="w-[20px] h-[20px] accent-[#0D6EFD] cursor-pointer" />
                <span className="text-[#1C1C1C] text-[16px] group-hover:text-[#0D6EFD]">{item}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Ratings */}
      <div className="border-t border-[#E3E8EE] pt-[14px]">
        <FilterHeader title="Ratings" sectionKey="ratings" />
        {openSections.ratings && (
          <div className="flex flex-col gap-[12px] animate-fadeIn">
            {[5, 4, 3, 2].map((stars) => (
              <label key={stars} className="flex items-center gap-[10px] cursor-pointer group">
                <input type="checkbox" className="w-[20px] h-[20px] border-[#BDBDBD] rounded-[5px] accent-[#0D6EFD]" />
                <div className="flex text-[#FF9017] text-[18px]">
                  {"★".repeat(stars)}
                  <span className="text-[#D1D7DC]">{"★".repeat(5-stars)}</span>
                </div>
              </label>
            ))}
          </div>
        )}
      </div>

    </aside>
  );
};

export default SidebarFilter;