import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo-colored.svg';
import profileIcon from '../assets/icon/profile_icon.svg';
import messageIcon from '../assets/icon/message_icon.svg';
import ordersIcon from '../assets/icon/orders_icon.svg';
import cartIcon from '../assets/icon/cart_icon.svg';

// 1. Move HeaderAction to the top (Before Header) so it is initialized first
const HeaderAction = ({ icon, label, isCart, count, hideLabelOnMobile }) => (
  <div className="flex flex-col items-center justify-center cursor-pointer group">
    <div className="relative">
      <img src={icon} alt={label} className="w-[20px] h-auto mb-[2px] md:mb-[5px] group-hover:opacity-70" />
      {isCart && count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#FA3434] text-white text-[10px] rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-[4px] font-bold">
          {count}
        </span>
      )}
    </div>
    {/* Label hides on mobile if hideLabelOnMobile is true */}
    <span className={`${hideLabelOnMobile ? 'hidden md:block' : 'block'} text-[12px] text-[#8B96A5] font-normal leading-tight group-hover:text-[#1C1C1C]`}>
      {label}
    </span>
  </div>
);

const Header = ({ onSearch, cartCount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [tempInput, setTempInput] = useState('');

  const handleInputChange = (e) => {
    setTempInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (tempInput.trim() !== "") {
      navigate(`/products?search=${encodeURIComponent(tempInput)}`);
    } else {
      navigate("/products");
    }
    setTempInput(''); 
  };

  return (
    <header className="w-full bg-white border-b border-[#E3E8EE] sticky top-0 z-50">
      <div className="max-w-[1180px] w-[95%] mx-auto h-[86px] flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="Brand Logo" className="w-[120px] md:w-[150px] h-auto cursor-pointer" />
        </Link>

        {/* Search Bar */}
        <form 
          onSubmit={handleSearchSubmit}
          className="hidden md:flex flex-grow max-w-[665px] h-[40px] border-2 border-[#0D6EFD] rounded-[6px] overflow-hidden"
        >
          <input 
            type="text" 
            placeholder="Search" 
            className="flex-grow px-[10px] outline-none text-[16px] text-[#1C1C1C]"
            value={tempInput}
            onChange={handleInputChange}
          />
          
          <div className="relative flex items-center px-[10px] border-l border-[#0D6EFD] bg-white cursor-pointer hover:bg-gray-50">
            <span className="hidden lg:block text-[16px] text-[#1C1C1C] mr-[5px] whitespace-nowrap">
              All category
            </span>
            
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="#1C1C1C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <select 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                const cat = e.target.value;
                navigate(cat === "" ? "/products" : `/products?category=${encodeURIComponent(cat)}`);
              }}
            >
              <option value="">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Laptops">Laptops</option>
              <option value="Watches">Watches</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>

          <button 
            type="submit"
            className="bg-[#0D6EFD] px-[25px] text-white font-medium text-[16px] hover:bg-[#0b5ed7] transition-colors"
          >
            Search
          </button>
        </form>

        {/* Action Icons */}
        <div className="flex items-center gap-[10px] md:gap-[20px]">
          <HeaderAction icon={profileIcon} label="Profile" hideLabelOnMobile />
          <HeaderAction icon={messageIcon} label="Message" hideLabelOnMobile />
          <HeaderAction icon={ordersIcon} label="Orders" hideLabelOnMobile />
          
          <Link to="/cart">
            <HeaderAction 
              icon={cartIcon} 
              label="My cart" 
              isCart={true} 
              count={cartCount} 
              hideLabelOnMobile
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;