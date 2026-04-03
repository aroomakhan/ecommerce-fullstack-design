import React from 'react';
import cartIconBlue from '../assets/icon/icon_shopping_cart.svg';

const SavedForLater = ({ savedItems, addToCart, moveToCart }) => {
  
  //  If there are no saved items there is a message
  if (!savedItems || savedItems.length === 0) {
    return (
      <section className="w-full bg-white border border-[#E3E8EE] rounded-[6px] p-[40px] mt-[20px] text-center">
        <p className="text-[#8B96A5] text-[18px]">Your "Saved for later" list is empty.</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-white border border-[#E3E8EE] rounded-[6px] p-[20px] mt-[20px] font-['Inter']">
      <h3 className="text-[#1C1C1C] text-[20px] font-semibold mb-[20px]">
        Saved for later ({savedItems.length})
      </h3>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-4 gap-[20px]">
        {savedItems.map((item) => (
          <div key={item._id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="w-full aspect-square bg-white border border-[#EEEEEE] rounded-[6px] flex items-center justify-center p-[15px] mb-[12px] overflow-hidden group-hover:border-[#BDC4CD] transition-all">
              <img 
                src={item.image} // Using the real image from your database
                alt={item.name} 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-[8px]">
              <p className="text-[#1C1C1C] text-[18px] font-semibold">
                ${item.price}
              </p>
              <p className="text-[#505050] text-[16px] leading-[24px] line-clamp-2 min-h-[48px]">
                {item.name}
              </p>
              
              {/* Move to Cart Button Logic */}
              <button 
            onClick={() => moveToCart(item)} // <--- Triggers the move logic
            className="flex items-center justify-center gap-[8px] w-fit border border-[#E3E8EE] px-[12px] py-[8px] rounded-[6px] text-[#0D6EFD] font-medium text-[16px] hover:bg-blue-50 transition-colors"
          >
            <img src={cartIconBlue} alt="cart" className="w-[18px] h-[18px]" />
            Move to cart
          </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavedForLater;