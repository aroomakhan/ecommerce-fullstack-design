import React, { useState } from 'react';
import checkIcon from '../assets/icon/check_icon.svg'; 

const ProductTabs = ({ description }) => {
  const [activeTab, setActiveTab] = useState('Description');
  
 const displayDescription = description || "No detailed description available for this item.";

  const tabs = ['Description', 'Reviews', 'Shipping', 'About seller'];

  const specs = [
    { label: "Design", value: "Modern style" },
    { label: "Material", value: "Premium Quality" },
    { label: "Certificate", value: "ISO-9001" },
    { label: "Size", value: "Standard Fit" },
  ];

  const features = [
    "Authentic and original material",
    "Strict quality control system",
    "Professional manufacturing team",
  ];

  return (
    <div className="bg-white border border-[#E3E8EE] rounded-[6px] shadow-sm overflow-hidden font-['Inter']">
      {/* Tab Headers */}
      <div className="flex border-b border-[#E3E8EE] px-[20px] bg-white overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-[15px] px-[20px] text-[16px] font-medium transition-all border-b-2 whitespace-nowrap -mb-[1px] ${
              activeTab === tab
                ? "border-[#0D6EFD] text-[#0D6EFD]"
                : "border-transparent text-[#8B96A5] hover:text-[#1C1C1C]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-[25px] md:p-[30px] min-h-[400px]">
        
        {/* DESCRIPTION TAB */}
        {activeTab === 'Description' && (
  <div className="animate-fadeIn">
    <div className="text-[#505050] text-[16px] leading-[24px] space-y-6 mb-8">
      <p>{displayDescription}</p> 
    </div>

            {/* Technical Table */}
            <div className="max-w-[560px] mt-8 mb-8 border border-[#E3E8EE] rounded-[4px] overflow-hidden">
              <table className="w-full border-collapse">
                <tbody>
                  {specs.map((spec, index) => (
                    <tr key={index} className="border-b border-[#E3E8EE] last:border-0">
                      <td className="w-[200px] bg-[#F7F8FA] p-[10px_15px] text-[#505050] text-[16px] border-r border-[#E3E8EE]">
                        {spec.label}
                      </td>
                      <td className="p-[10px_15px] text-[#505050] bg-white text-[16px]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-[12px]">
                  <img src={checkIcon} alt="check" className="w-[18px] h-[18px] opacity-70" />
                  <span className="text-[#505050] text-[16px] font-normal">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* OTHER TABS */}
        {activeTab === 'Reviews' && <div className="text-[#505050]">No reviews yet for this product.</div>}
        {activeTab === 'Shipping' && <div className="text-[#505050]">Standard shipping: 3-5 business days.</div>}
        {activeTab === 'About seller' && <div className="text-[#505050]">Verified supplier with 5 years experience.</div>}
      </div>
    </div>
  );
};

export default ProductTabs;