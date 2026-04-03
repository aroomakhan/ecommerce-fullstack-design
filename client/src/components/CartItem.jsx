import React from 'react';

const CartItem = ({ cartItems, removeFromCart, updateQuantity, addToSaved }) => {
  
  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="py-10 text-center">
        <p className="text-[#8B96A5] text-[18px]">Your cart is currently empty.</p>
      </div>
    );
  }

  // Handle Save for Later click
  const handleSaveForLater = (item) => {
    addToSaved(item);       // Save it
    removeFromCart(item._id); // Remove it from the active cart
  };

  return (
    <>
      {cartItems.map((item) => (
        <div key={item._id} className="flex gap-[16px] py-[20px] border-b border-[#E3E8EE] last:border-0 items-start font-['Inter']">
          
          {/* Image Container */}
          <div className="w-[80px] h-[80px] border border-[#E3E8EE] rounded-[6px] p-[8px] flex-shrink-0 bg-white flex items-center justify-center overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-contain mix-blend-multiply" 
            />
          </div>

          {/* Product Info Section */}
          <div className="flex-1">
            <h4 className="text-[#1C1C1C] text-[16px] font-medium leading-[22px] mb-[6px]">
              {item.name}
            </h4>
            <div className="text-[#8B96A5] text-[14px] flex flex-col gap-[2px] font-normal">
              <p>Category: {item.category || 'General'}</p>
              <p>Seller: {item.seller || 'Alibaba Supplier'}</p>
            </div>
            
            <div className="flex gap-[10px] mt-[12px]">
              <button 
                onClick={() => removeFromCart(item._id)}
                className="text-[#FA3434] border border-[#E3E8EE] px-[12px] py-[6px] rounded-[6px] text-[13px] font-medium hover:bg-red-50 hover:border-[#FA3434] transition-all"
              >
                Remove
              </button>

              {/*  CONNECT Save for Later */}
              <button 
                onClick={() => handleSaveForLater(item)}
                className="text-[#0D6EFD] border border-[#E3E8EE] px-[12px] py-[6px] rounded-[6px] text-[13px] font-medium hover:bg-blue-50 transition-all"
              >
                Save for later
              </button>
            </div>
          </div>

          {/* Price & Qty Section */}
          <div className="flex flex-col items-end gap-[12px]">
            <p className="text-[#1C1C1C] font-medium text-[16px]">
              ${(item.price * (item.quantity || 1)).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
            
            <div className="relative">
              <select 
                value={item.quantity || 1} 
                onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                className="border border-[#E3E8EE] rounded-[6px] p-[5px] bg-white outline-none focus:border-[#0D6EFD]"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;