import React from 'react';

const PromoBanner = () => {
  return (
    <section 
      className="w-[1180px] mx-auto h-[120px] rounded-[8px] my-[20px] relative overflow-hidden flex items-center px-[30px] font-['Inter'] shadow-sm"
      style={{
        background: 'linear-gradient(250deg, #0067FF 45%, #237CFF 45%)'
       
      }}
    >
      {/*  Left Content: Text & Info */}
      <div className="flex flex-col z-10">
        <h2 className="text-white text-[24px] font-semibold leading-tight tracking-[-0.2px]">
          Super deals on selected items
        </h2>
        <p className="text-white text-[16px] opacity-90 mt-[4px] font-normal">
          Save up to 50% off on your first order. Limited time only!
        </p>
      </div>

      {/*  Right Content: Action Button */}
      <div className="ml-auto z-10">
        <button className="bg-[#FF9017] text-white px-[24px] py-[10px] rounded-[6px] font-bold text-[16px] hover:bg-[#e68215] transition-all shadow-md active:scale-95">
          Shop now
        </button>
      </div>

      {/* Subtle Glossy Overlay */}
      <div className="absolute inset-0 bg-white opacity-[0.03] pointer-events-none"></div>
    </section>
  );
};

export default PromoBanner;