import React from 'react';
import closeIcon from '../assets/icon/icon_close.svg';

//  the filters and the clearing functions as props
const AppliedFilters = ({ category, searchQuery, onClearCategory, onClearSearch }) => {
  
  // If nothing is selected and nothing is searched, don't show the bar at all
  if (!category && !searchQuery) return null;

  return (
    <div className="flex flex-wrap items-center gap-[10px] mb-[20px] font-['Inter']">
      
      {/* Category Tag (Only shows if a category is selected) */}
      {category && (
        <div 
          onClick={onClearCategory}
          className="flex items-center gap-[8px] px-[10px] py-[6px] bg-white border border-[#E3E8EE] rounded-[5px] group hover:border-[#0D6EFD] cursor-pointer"
        >
          <span className="text-[#505050] text-[16px] group-hover:text-[#0D6EFD]">
            Category: {category}
          </span>
          <button className="flex items-center justify-center opacity-60 group-hover:opacity-100">
            <img src={closeIcon} alt="remove" className="w-[12px] h-[12px]" />
          </button>
        </div>
      )}

      {/*  Search Tag (Only shows if user typed in the header) */}
      {searchQuery && (
        <div 
          onClick={onClearSearch}
          className="flex items-center gap-[8px] px-[10px] py-[6px] bg-white border border-[#E3E8EE] rounded-[5px] group hover:border-[#0D6EFD] cursor-pointer"
        >
          <span className="text-[#505050] text-[16px] group-hover:text-[#0D6EFD]">
            Search: "{searchQuery}"
          </span>
          <button className="flex items-center justify-center opacity-60 group-hover:opacity-100">
            <img src={closeIcon} alt="remove" className="w-[12px] h-[12px]" />
          </button>
        </div>
      )}

      {/*  Clear All Button */}
      <button 
        onClick={() => { onClearCategory(); onClearSearch(); }}
        className="text-[#0D6EFD] text-[16px] font-medium hover:underline ml-[5px]"
      >
        Clear all filters
      </button>
      
    </div>
  );
};

export default AppliedFilters;