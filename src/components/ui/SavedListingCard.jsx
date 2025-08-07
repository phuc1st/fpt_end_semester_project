import React from 'react';

const SavedListingCard = ({
  image,
  title,
  price,
  location,
  onUnsave,
  onMessage,
  href = '#'
}) => (
  <div className="listing-card flex flex-col">
    <div className="relative">
      <a href={href}>
        <img src={image} alt={title} className="w-full h-52 object-cover rounded-t-lg" />
      </a>
      <button
        className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm w-9 h-9 rounded-full flex items-center justify-center text-red-500 hover:bg-white"
        title="Bỏ lưu"
        onClick={onUnsave}
      >
        <i className="fa-solid fa-bookmark text-lg"></i>
      </button>
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <a href={href} className="flex-grow">
        <h3 className="font-bold text-lg leading-tight hover:text-blue-600">{title}</h3>
        <p className="text-red-500 font-bold text-lg my-2">{price}</p>
        <p className="text-gray-600 text-sm"><i className="fa-solid fa-location-dot mr-1"></i> {location}</p>
      </a>
      <div className="mt-3 pt-3 border-t">
        <button
          className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-md text-sm"
          onClick={onMessage}
        >
          Gửi tin nhắn
        </button>
      </div>
    </div>
  </div>
);

export default SavedListingCard;
