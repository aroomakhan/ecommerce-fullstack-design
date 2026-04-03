import React from 'react';
import countryFlag from '../assets/flags/DE.svg'; 
import verifiedIcon from '../assets/icon/shield.svg'; 
import globeIcon from '../assets/icon/globe.svg'; 

const SellerCard = () => {
  return (
    <div className="flex flex-col">
      {/* THE MAIN WHITE BOX (The Card) */}
      <div className="w-[280px] bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] font-['Inter'] shadow-sm">
        
        {/* Header: Avatar and Name */}
        <div className="flex gap-[12px] mb-[20px]">
          <div className="w-[48px] h-[48px] bg-[#E3F0FF] rounded-[4px] flex items-center justify-center text-[#4CA7FF] font-semibold text-[28px]">
            R
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#1C1C1C] text-[16px] font-normal leading-[24px]">Supplier</h4>
            <p className="text-[#1C1C1C] text-[16px] font-normal">Guanjhou Trading Co.</p>
          </div>
        </div>

        <hr className="border-[#E3E8EE] mb-[20px]" />

        {/* Seller Details */}
        <div className="flex flex-col gap-[12px] mb-[25px]">
          <div className="flex items-center gap-[12px]">
            <img src={countryFlag} alt="DE" className="w-[21px] h-[15px] object-cover rounded-[2px]" />
            <span className="text-[#8B96A5] text-[16px]">Germany, Berlin</span>
          </div>

          <div className="flex items-center gap-[12px]">
            <img src={verifiedIcon} alt="verified" className="w-[20px] opacity-60" />
            <span className="text-[#8B96A5] text-[16px]">Verified Seller</span>
          </div>

          <div className="flex items-center gap-[12px]">
            <img src={globeIcon} alt="shipping" className="w-[20px] opacity-60" />
            <span className="text-[#8B96A5] text-[16px]">Worldwide shipping</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-[8px]">
          <button className="w-full bg-[#0D6EFD] text-white py-[11px] rounded-[6px] font-medium text-[16px] hover:bg-[#0b5ed7] transition-colors shadow-sm">
            Send inquiry
          </button>
          <button className="w-full border border-[#E3E8EE] bg-white text-[#0D6EFD] py-[11px] rounded-[6px] font-medium text-[16px] hover:bg-gray-50 transition-colors">
            Seller's profile
          </button>
        </div>
      </div>

      {/* SAVE FOR LATER  */}
      <button className="w-[280px] flex items-center justify-center gap-[8px] py-[15px] group bg-transparent border-none outline-none cursor-pointer">
        
        <svg 
          width="22"  // Bumped up slightly from 20 to accommodate the shift
          height="20" // Bumped up slightly from 18 to accommodate the shift
          viewBox="-2 -2 24 22" // TWEAK: Added negative offset to the left/top to prevent clipping
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M17.4167 2.58332C16.9455 2.11187 16.3859 1.73789 15.77 1.48283C15.154 1.22777 14.4939 1.09662 13.8271 1.09662C13.1603 1.09662 12.5001 1.22777 11.8842 1.48283C11.2683 1.73789 10.7087 2.11187 10.2375 2.58332L9.16668 3.65415L8.09585 2.58332C7.14381 1.63128 5.85289 1.09712 4.50668 1.09712C3.16047 1.09712 1.86955 1.63128 0.917512 2.58332C-0.0345242 3.53535 -0.568652 4.82627 -0.568652 6.17248C-0.568652 7.5187 -0.0345242 8.80961 0.917512 9.76165L2.01251 10.8567L9.16668 18L16.3217 10.8567L17.4167 9.76165C17.8881 9.29045 18.2621 8.73088 18.5172 8.11496C18.7722 7.49903 18.9034 6.83885 18.9034 6.17207C18.9034 5.50529 18.7722 4.8451 18.5172 4.22918C18.2621 3.61326 17.8881 3.05369 17.4167 2.58332V2.58332Z" 
            stroke="#0D6EFD" 
            strokeWidth="1.6" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:fill-[#0D6EFD] transition-all"
          />
        </svg>
        <span className="text-[#0D6EFD] text-[16px] font-medium group-hover:underline">
          Save for later
        </span>
      </button>
    </div>
  );
};

export default SellerCard;