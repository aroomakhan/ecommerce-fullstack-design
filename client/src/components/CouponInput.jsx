import React from 'react';

const CouponInput = () => {
  return (
    <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] w-[280px] font-['Inter']">
      <p className="text-[#505050] text-[16px] mb-[12px]">Have a coupon?</p>
      <div className="flex border border-[#E3E8EE] rounded-[6px] overflow-hidden">
        <input 
          type="text" 
          placeholder="Add coupon" 
          className="w-full px-[12px] py-[10px] text-[16px] outline-none placeholder-[#8B96A5] text-[#1C1C1C]"
        />
        <button className="bg-white border-l border-[#E3E8EE] text-[#0D6EFD] px-[12px] py-[10px] font-medium text-[16px] hover:bg-[#f8f9fa] transition-colors">
          Apply
        </button>
      </div>
    </div>
  );
};

export default CouponInput;