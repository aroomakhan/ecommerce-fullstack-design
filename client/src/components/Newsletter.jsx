import React from 'react';
import mailIcon from '../assets/icon/email.svg'; 

const Newsletter = () => {
  return (
    <section className="w-full bg-[#EEEEEE] py-[40px] mt-[40px]">
      <div className="w-[1180px] mx-auto flex flex-col items-center text-center">
        
        {/* Title (text) */}
        <h3 className="font-['Inter'] font-semibold text-[20px] leading-[28px] text-[#1C1C1C] mb-[4px]">
          Subscribe on our newsletter
        </h3>
        
        {/* Info (text) */}
        <p className="font-['Inter'] font-normal text-[16px] leading-[24px] text-[#606060] mb-[21px]">
          Get daily news on incoming offers from the world of expo and trade
        </p>

        {/* Input Group */}
        <div className="flex gap-[8px] w-[388px]">
          <div className="relative flex-1">
            {/* Email Icon/instance */}
            <div className="absolute inset-y-0 left-0 pl-[11px] flex items-center pointer-events-none">
              <img src={mailIcon} alt="mail" className="w-[20px] h-[20px] opacity-40" />
            </div>
            
            {/* Input (vector/mask) */}
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full h-[40px] pl-[40px] pr-[12px] bg-white border border-[#E0E0E0] rounded-[6px] focus:outline-none focus:border-[#0D6EFD] font-['Inter'] text-[16px]"
            />
          </div>

          {/* Subscribe Button (component) */}
          <button className="h-[40px] px-[16px] bg-[#0D6EFD] text-white font-['Inter'] font-medium text-[16px] rounded-[6px] hover:bg-[#0b5ed7] transition-colors shadow-sm">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;