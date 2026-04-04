import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ category, name }) => {
  // 1. FIXED: Home points to "/" and Products points to "/products"
  const paths = [
    { name: "Home", url: "/" },           // Your main landing page
    { name: "Products", url: "/products" }, // Your listing page
  ];

  // 2. Add Category if it exists
  if (category) {
    // If we are on a details page (name exists), make category clickable
    // If we are just on the listing page, the category is the last item (not a link)
    const categoryUrl = name ? `/products?category=${category}` : "#";
    paths.push({ name: category, url: categoryUrl });
  }

  // 3. Add Product Name if it exists (Last item)
  if (name) {
    paths.push({ name: name, url: "#" });
  }

  return (
    // Changed w-[1180px] to max-w + w-[95%] for responsiveness
    <nav className="max-w-[1180px] w-[95%] mx-auto pt-[20px] pb-[10px] flex items-center">
      <ul className="flex items-center gap-[10px] flex-wrap">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center gap-[10px]">
            {index === paths.length - 1 || path.url === "#" ? (
              // Last item OR current category: Not a link
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