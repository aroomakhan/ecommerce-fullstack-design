import React from 'react';
import menuIcon from '../assets/icon/menu.svg'; // The hamburger icon
import countryFlag from '../assets/flags/DE.svg'; // Small flag for shipping to

const Navbar = () => {
  const navLinks = [
    "Ready to ship",
    "Personal care",
    "Mainly used",
    "Latest items",
    "Store",
    "Help",
  ];

  return (
    <nav className="w-full bg-white border-b border-[#E3E8EE] h-[56px] flex items-center">
      <div className="w-[1180px] mx-auto flex justify-between items-center">
        
        {/* Left Side: Menu + Links */}
        <div className="flex items-center gap-[28px]">
          
          {/* All categories (group) */}
          <div className="flex items-center gap-[6px] cursor-pointer hover:opacity-70 transition-opacity">
            <img src={menuIcon} alt="menu" className="w-[18px] h-[12px]" />
            <span className="font-['Inter'] font-medium text-[16px] text-[#1C1C1C]">
              All categories
            </span>
          </div>

          {/* Navigation Links (list) */}
          <ul className="flex items-center gap-[28px]">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className="font-['Inter'] font-medium text-[16px] text-[#1C1C1C] hover:text-[#0D6EFD] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Language/Ship to (group) */}
        <div className="flex items-center gap-[32px]">
          
          {/* Currency/Language Dropdown */}
          <div className="flex items-center gap-[6px] cursor-pointer group">
            <span className="font-['Inter'] font-medium text-[16px] text-[#1C1C1C]">
              English, USD
            </span>
            <span className="text-[10px] text-[#8B96A5] group-hover:text-[#1C1C1C]">▼</span>
          </div>

          {/* Ship to (group) */}
          <div className="flex items-center gap-[6px] cursor-pointer group">
            <span className="font-['Inter'] font-medium text-[16px] text-[#1C1C1C]">
              Ship to
            </span>
            <img 
              src={countryFlag} 
              alt="flag" 
              className="w-[20px] h-[15px] rounded-[2px] object-cover" 
            />
            <span className="text-[10px] text-[#8B96A5] group-hover:text-[#1C1C1C]">▼</span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;