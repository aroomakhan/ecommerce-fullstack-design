import React from 'react';
import visaIcon from '../assets/logo/logo_Card_Visa.svg';
import mastercardIcon from '../assets/logo/logo_Card.svg';
import paypalIcon from '../assets/logo/logo_Card_Paypal.svg';
import amexIcon from '../assets/logo/logo_Card_American.svg';
import applepayIcon from '../assets/logo/logo_Card_Pay.png';

const OrderSummary = ({ cartItems = [] }) => {
  
  //  CALCULATE DYNAMIC TOTALS 
  const subtotal = cartItems.reduce((acc, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1; 
    return acc + (price * qty);
  }, 0);
  
  //  DYNAMIC TAX & DISCOUNT
  const discount = subtotal > 0 ? 60.00 : 0; 
  const tax = subtotal > 0 ? 14.00 : 0;
  
  // Ensure total doesn't go below 0 if discount is larger than subtotal
  const total = Math.max(0, subtotal - discount + tax);

  const summaryData = [
    { 
      label: "Subtotal:", 
      value: `$${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 
      color: "#505050" 
    },
    { 
      label: "Discount:", 
      value: `- $${discount.toFixed(2)}`, 
      color: "#FA3434" 
    },
    { 
      label: "Tax:", 
      value: `+ $${tax.toFixed(2)}`, 
      color: "#00B517" 
    },
  ];

  return (
    <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] w-[280px] font-['Inter'] shadow-sm">
      <div className="flex flex-col gap-[12px] mb-[17px]">
        {summaryData.map((item, index) => (
          <div key={index} className="flex justify-between text-[16px]">
            <span className="text-[#505050]">{item.label}</span>
            <span style={{ color: item.color }} className="font-normal">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="border-t border-[#E3E8EE] pt-[17px] mb-[20px]">
        <div className="flex justify-between items-center">
          <span className="text-[#1C1C1C] font-semibold text-[16px]">Total:</span>
          <span className="text-[#1C1C1C] font-bold text-[20px]">
            ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      {/* Checkout Button */}
      <button 
        disabled={cartItems.length === 0}
        className={`w-full py-[14px] rounded-[8px] font-medium text-[18px] transition-all shadow-md active:scale-[0.98] 
          ${cartItems.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#00B517] text-white hover:bg-[#00a014]'}`}
      >
        Checkout
      </button>

      {/* Payment Icons */}
      <div className="flex justify-center items-center gap-[8px] mt-[20px]">
        {[visaIcon, mastercardIcon, paypalIcon, amexIcon, applepayIcon].map((icon, index) => (
          <div 
            key={index} 
            className="w-[34px] h-[22px] border border-[#EEEEEE] rounded-[2px] bg-white flex items-center justify-center p-[2px]"
          >
            <img 
              src={icon} 
              alt="payment method" 
              className="w-full h-full object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
