import React, { useState } from 'react';

const PropertyCard = ({ 
  image, 
  title, 
  price, 
  location, 
  area, 
  rating, 
  reviewCount,
  onSave,
  onCardClick 
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = (e) => {
    e.stopPropagation(); // Prevent card click when saving
    setIsSaved(!isSaved);
    if (onSave) onSave();
  };

  return (
    <div 
      className="result-card cursor-pointer transition-transform hover:transform hover:scale-[1.02] hover:shadow-lg"
      onClick={onCardClick}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 md:h-48 object-cover rounded-t-lg"
        />
        <button 
          onClick={handleSaveClick}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <i className={`${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark text-gray-800`}></i>
        </button>
      </div>
      <div className="p-3 md:p-4">
        <h3 className="font-bold text-base md:text-lg truncate mb-1">{title}</h3>
        <p className="text-red-500 font-bold text-lg my-1">{price}</p>
        <p className="text-gray-600 text-sm mb-2">
          <i className="fa-solid fa-location-dot mr-1"></i> 
          {location}
        </p>
        <div className="text-xs text-gray-500 flex items-center gap-4">
          {area && (
            <span>
              <i className="fa-solid fa-ruler-combined mr-1"></i> 
              {area}
            </span>
          )}
          {rating && (
            <span>
              <i className="fa-solid fa-star text-yellow-400 mr-1"></i> 
              {rating} ({reviewCount})
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;