import React from 'react';
import logo from '../assets/logo-colored.svg';
import facebook from '../assets/icon/social/facebook3.svg';
import twitter from '../assets/icon/social/twitter3.svg';
import linkedin from '../assets/icon/social/linkedin3.svg';
import instagram from '../assets/icon/social/instagram3.svg';
import youtube from '../assets/icon/social/youtube3.svg';


const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      links: ["About Us", "Find store", "Categories", "Blogs"]
    },
    {
      title: "Partnership",
      links: ["About Us", "Find store", "Categories", "Blogs"]
    },
    {
      title: "Information",
      links: ["Help Center", "Money Refund", "Shipping", "Contact us"]
    },
    {
      title: "For users",
      links: ["Login", "Register", "Settings", "My Orders"]
    }
  ];

  return (
    <footer className="w-full bg-white mt-[40px] border-t border-[#E3E8EE] font-['Inter']">
      
      {/* 1. Footer Top Section */}
      <div className="w-[1180px] mx-auto pt-[40px] pb-[60px] flex justify-between">
        
        {/* Brand Block */}
        <div className="flex flex-col w-[276px]">
          <img src={logo} alt="Brand Logo" className="w-[150px] mb-[15px]" />
          <p className="text-[16px] text-[#505050] leading-[24px] mb-[16px]">
            Best information about the company gies here but now lorem ipsum is
          </p>
          {/* Social Icons */}
          <div className="flex gap-[10px]">
            {[facebook, twitter, linkedin, instagram, youtube].map((icon, i) => (
              <a key={i} href="#" className="w-[32px] h-[32px] bg-[#BDC4CD] rounded-full flex items-center justify-center hover:bg-[#0D6EFD] transition-all group">
                <img src={icon} alt="social" className="w-[18px] h-[18px] invert group-hover:brightness-200" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Blocks */}
        <div className="flex gap-[60px]">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col w-[150px]">
              <h4 className="font-medium text-[16px] text-[#1C1C1C] mb-[10px]">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-[8px]">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-[16px] text-[#8B96A5] hover:text-[#0D6EFD] transition-colors leading-[24px]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Get App Section */}
<div className="flex flex-col w-[124px]">
  <h4 className="font-medium text-[16px] text-[#1C1C1C] mb-[15px]">
    Get app
  </h4>
  <div className="flex flex-col gap-[10px]">
    
    {/* App Store Button */}
    <a href="#" className="block hover:opacity-80 transition-opacity">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
        alt="Download on App Store" 
        className="w-[124px] h-auto object-contain"
      />
    </a>

    {/* Google Play Button */}
    <a href="#" className="block hover:opacity-80 transition-opacity">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
        alt="Get it on Google Play" 
        className="w-[124px] h-auto object-contain"
      />
    </a>

  </div>
</div>
      </div>

      {/* 2. Footer Bottom Bar (Full Width Gray) */}
      <div className="w-full bg-[#EFF2F4] border-t border-[#E3E8EE] py-[23px]">
        <div className="w-[1180px] mx-auto flex justify-between items-center">
          <p className="text-[16px] text-[#606060]">
            © 2026 Ecommerce.
          </p>
          
          {/* Language/Region Dropdown */}
          <div className="flex items-center gap-[6px] cursor-pointer hover:text-[#1C1C1C] group">
            <span className="text-[16px] text-[#606060] group-hover:text-[#1C1C1C]">English</span>
            {/* Custom arrow icon to match design better */}
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L11 1" stroke="#8B96A5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;