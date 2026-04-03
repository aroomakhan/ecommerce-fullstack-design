import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import CouponInput from '../components/CouponInput';
import SavedForLater from '../components/SavedForLater';
import securitySvg from '../assets/icon/iconLock.svg';
import supportSvg from '../assets/icon/message_icon.svg';
import deliverySvg from '../assets/icon/iconTruck.svg';
import PromoBanner from '../components/PromoBanner';
import Footer from '../components/Footer';


const Cart = ({ cartItems, removeFromCart, clearCart, savedItems, moveToCart,updateQuantity, addToSaved }) => {
  const navigate = useNavigate();

  const handleRemoveAll = () => {
    if (cartItems.length > 0) {
      if (window.confirm("Are you sure you want to remove all items from your cart?")) {
        clearCart();
      }
    }
  };

  return (
    <div className="bg-[#F7F8FA] min-h-screen font-['Inter']">
      
      <main className="w-[1180px] mx-auto pt-[28px] pb-[60px]">
        <h2 className="text-[#1C1C1C] text-[24px] font-semibold mb-[23px]">
          My cart ({cartItems?.length || 0})
        </h2>

        <div className="flex gap-[20px] items-start">
          <div className="flex-1 flex flex-col gap-[20px]">
            <div className="bg-white border border-[#E3E8EE] rounded-[6px] p-[20px]">
              
              <CartItem cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} addToSaved={addToSaved} />
              
              <div className="flex justify-between mt-[20px] pt-[20px] border-t border-[#E3E8EE]">
                <button 
                  onClick={() => navigate('/')}
                  className="bg-[#0D6EFD] text-white px-[16px] py-[10px] rounded-[6px] flex items-center gap-[8px] font-medium hover:bg-[#0b5ed7] transition-colors"
                >
                  <span>←</span> Back to shop
                </button>
                
                {/* REMOVE ALL BUTTON */}
                <button 
                  onClick={handleRemoveAll}
                  className="text-[#0D6EFD] border border-[#E3E8EE] px-[16px] py-[10px] rounded-[6px] font-medium hover:bg-gray-50 transition-colors"
                >
                  Remove all
                </button>
              </div>
            </div>

            {/* Extra Features */}
            <div className="flex gap-[28px] mt-[30px] items-start">
              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] bg-[#E3E8EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={securitySvg} alt="Secure" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <p className="text-[#1C1C1C] font-medium text-[16px]">Secure payment</p>
                  <p className="text-[#8B96A5] text-[14px] leading-tight">Have you ever heard that?</p>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] bg-[#E3E8EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={supportSvg} alt="Support" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <p className="text-[#1C1C1C] font-medium text-[16px]">Customer support</p>
                  <p className="text-[#8B96A5] text-[14px] leading-tight">Have you ever heard that?</p>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                <div className="w-[48px] h-[48px] bg-[#E3E8EE] rounded-full flex items-center justify-center flex-shrink-0">
                  <img src={deliverySvg} alt="Delivery" className="w-[24px] h-[24px]" />
                </div>
                <div>
                  <p className="text-[#1C1C1C] font-medium text-[16px]">Free delivery</p>
                  <p className="text-[#8B96A5] text-[14px] leading-tight">Have you ever heard that?</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex flex-col gap-[20px]">
            <CouponInput />
            <OrderSummary cartItems={cartItems} />
          </div>
        </div>

        {/*PASS SAVED ITEMS TO THE SAVED SECTION */}
        <SavedForLater savedItems={savedItems} moveToCart={moveToCart} />
      </main>

      <PromoBanner />
      <Footer />
    </div>
  );
};

export default Cart;