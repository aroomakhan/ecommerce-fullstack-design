import React, { useState, useEffect } from 'react';

const ProductGallery = ({ image }) => {
  // track which image is currently displayed
  const [mainImage, setMainImage] = useState(image);

  // IMPORTANT: If the 'image' prop changes (when you switch products), 
  // update the main image state.
  useEffect(() => {
    setMainImage(image);
  }, [image]);

  // Using your database image 
  const thumbnails = [image, image, image, image]; 

  return (
    <div className="flex flex-col w-[380px] flex-shrink-0">
      
      {/*  Main Display Frame */}
      <div className="w-[380px] h-[380px] border border-[#E3E8EE] rounded-[6px] bg-white mb-[12px] flex items-center justify-center p-[20px] overflow-hidden">
        {mainImage ? (
          <img 
            src={mainImage} 
            alt="Main Product" 
            className="max-w-full max-h-full object-contain cursor-zoom-in transition-opacity duration-300" 
          />
        ) : (
          <div className="w-full h-full bg-gray-100 animate-pulse" />
        )}
      </div>

      {/*  Thumbnails List */}
      <div className="flex gap-[9px] overflow-x-auto pb-[5px] no-scrollbar">
        {thumbnails.map((thumb, index) => (
          <button 
            key={index} 
            onClick={() => setMainImage(thumb)} // Switch main image on click
            className={`w-[56px] h-[56px] flex-shrink-0 border rounded-[4px] bg-white cursor-pointer p-[3px] flex items-center justify-center overflow-hidden transition-all ${
              mainImage === thumb 
              ? "border-[#0D6EFD] ring-1 ring-[#0D6EFD]" 
              : "border-[#E3E8EE] hover:border-[#BDC4CD]" 
            }`}
          >
            <img 
              src={thumb} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;