import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ category, name }) => {
 
  const paths = [
    { name: "Home", url: "/" },           // main landing page
    { name: "Products", url: "/products" }, // listing page
  ];

  if (category) {
    
    const categoryUrl = name ? `/products?category=${category}` : "#";
    paths.push({ name: category, url: categoryUrl });
  }

  if (name) {
    paths.push({ name: name, url: "#" });
  }

  return (
    
    <nav className="max-w-[1180px] w-[95%] mx-auto pt-[20px] pb-[10px] flex items-center">
      <ul className="flex items-center gap-[10px] flex-wrap">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center gap-[10px]">
            {index === paths.length - 1 || path.url === "#" ? (
              
              <span className="text-[14px] md:text-[16px] font-['Inter'] text-[#1C1C1C] font-medium capitalize">
                {path.name}
              </span>
            ) : (
              // Clickable links
              <Link 
                to={path.url}
                className="text-[14px] md:text-[16px] font-['Inter'] text-[#8B96A5] hover:text-[#0D6EFD] transition-colors capitalize"
              >
                {path.name}
              </Link>
            )}

            {/* Separator */}
            {index !== paths.length - 1 && (
              <span className="text-[#8B96A5] text-[12px] md:text-[14px]">
                {'>'}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;