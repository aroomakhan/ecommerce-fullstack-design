import React from 'react';
import expandMoreIcon from '../assets/icon/icon_expand_more.svg';
import chevronLeft from '../assets/icon/icon_chevron_left.svg';
import chevronRight from '../assets/icon/icon_chevron_right.svg';

const Pagination = () => {
  return (
    <div className="flex items-center gap-[10px] font-['Inter']">
      
      {/*  Show Items Count Selector */}
      <div className="flex items-center gap-[10px] mr-[10px]">
        <span className="text-[#1C1C1C] text-[16px]">Show</span>
        <div className="relative">
          <select className="appearance-none border border-[#E3E8EE] rounded-[6px] px-[12px] py-[8px] pr-[35px] bg-white text-[16px] outline-none cursor-pointer hover:border-[#BDC4CD] transition-colors">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
          <img 
            src={expandMoreIcon} 
            alt="" 
            className="absolute right-[10px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] pointer-events-none opacity-60" 
          />
        </div>
      </div>

      {/*  Page Navigation Buttons */}
      <div className="flex border border-[#E3E8EE] rounded-[6px] bg-white overflow-hidden shadow-sm">
        
        {/* Previous Button */}
        <button className="p-[10px] border-r border-[#E3E8EE] hover:bg-gray-50 transition-colors flex items-center justify-center">
          <img src={chevronLeft} alt="Previous" className="w-[18px] h-[18px]" />
        </button>
        
        {/* Page Numbers */}
        <button className="px-[15px] py-[8px] border-r border-[#E3E8EE] bg-[#EEEEEE] font-semibold text-[#1C1C1C]">
          1
        </button>
        <button className="px-[15px] py-[8px] border-r border-[#E3E8EE] hover:bg-gray-50 text-[#505050] transition-colors">
          2
        </button>
        <button className="px-[15px] py-[8px] border-r border-[#E3E8EE] hover:bg-gray-50 text-[#505050] transition-colors">
          3
        </button>
        
        {/* Next Button */}
        <button className="p-[10px] hover:bg-gray-50 transition-colors flex items-center justify-center">
          <img src={chevronRight} alt="Next" className="w-[18px] h-[18px]" />
        </button>

      </div>
    </div>
  );
};

export default Pagination;