import React from 'react';
import gridIcon from '../assets/icon/icon_gridview.svg'; 
import listIcon from '../assets/icon/icon_listview.svg';
import expandMoreIcon from '../assets/icon/icon_expand_more.svg';

const TopControlBar = ({ itemCount, setViewMode, currentView, onSortChange }) => {
  return (
    <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[10px_20px] flex justify-between items-center mb-[20px] font-['Inter'] shadow-sm">
      
      {/* Left Side: Item Count */}
      <div className="text-[#1C1C1C] text-[16px]">
        <span className="font-semibold">{itemCount}</span>
        <span className="text-[#8B96A5]"> items found</span>
      </div>

      {/* Right Side: Controls */}
      <div className="flex items-center gap-[15px]">
        
        {/* 1. Verified Checkbox */}
        <label className="flex items-center gap-[10px] cursor-pointer mr-[10px] group">
          <input 
            type="checkbox" 
            className="w-[20px] h-[20px] border-[#BDBDBD] rounded-[5px] accent-[#0D6EFD] cursor-pointer" 
          />
          <span className="text-[#1C1C1C] text-[16px]">Verified only</span>
        </label>

        {/* Sort Dropdown */}
        <div className="relative">
          <select 
            className="appearance-none border border-[#E3E8EE] rounded-[6px] px-[12px] py-[8px] pr-[40px] text-[16px] outline-none bg-white cursor-pointer hover:border-[#BDBDBD] transition-colors"
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest items</option>
          </select>
          {/* Custom Arrow Icon */}
          <img 
            src={expandMoreIcon} 
            alt="expand" 
            className="absolute right-[12px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] pointer-events-none opacity-60" 
          />
        </div>

        {/* View Switcher Buttons */}
        <div className="flex border border-[#E3E8EE] rounded-[6px] overflow-hidden bg-white">
          {/* Grid Button */}
          <button 
            onClick={() => setViewMode('grid')}
            className={`p-[10px] transition-colors border-r border-[#E3E8EE] ${
              currentView === 'grid' ? 'bg-[#EEEEEE]' : 'hover:bg-gray-50'
            }`}
            title="Grid View"
          >
            <img src={gridIcon} alt="Grid" className="w-[18px] h-[18px]" />
          </button>
          
          {/* List Button */}
          <button 
            onClick={() => setViewMode('list')}
            className={`p-[10px] transition-colors ${
              currentView === 'list' ? 'bg-[#EEEEEE]' : 'hover:bg-gray-50'
            }`}
            title="List View"
          >
            <img src={listIcon} alt="List" className="w-[18px] h-[18px]" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopControlBar;