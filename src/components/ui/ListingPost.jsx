import React from 'react';

const ListingPost = ({ 
  landlord, 
  isSponsored = false, 
  description, 
  image, 
  title, 
  price,
  onSave,
  onComment,
  onMessage 
}) => {
  return (
    <div className="post-card">
      <div className="p-3 md:p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 md:gap-3 mb-3">
            <img 
              src={landlord.avatar} 
              alt={landlord.name} 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full"
            />
            <div>
              <p className="font-bold text-sm md:text-base">{landlord.name}</p>
              {isSponsored && <p className="text-xs text-gray-500">Được tài trợ</p>}
            </div>
          </div>
          <button className="text-gray-500 hover:text-gray-800 p-1">...</button>
        </div>
        <p className="mb-3 text-sm md:text-base leading-relaxed">{description}</p>
      </div>
      
      {image && (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto max-h-[500px] object-cover"
        />
      )}
      
      <div className="p-3 md:p-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <h3 className="font-bold text-base md:text-lg pr-2">{title}</h3>
          <p className="text-red-500 font-bold text-lg md:text-xl whitespace-nowrap">{price}</p>
        </div>
      </div>
      
      <div className="border-t grid grid-cols-3">
        <button 
          className="action-button font-medium text-gray-600 py-2 rounded-bl-lg flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm"
          onClick={onSave}
        >
          <i className="fa-solid fa-heart text-red-500"></i> 
          <span className="hidden sm:inline">Lưu</span> tin
        </button>
        <button 
          className="action-button font-medium text-gray-600 py-2 flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm"
          onClick={onComment}
        >
          <i className="fa-solid fa-comment"></i> 
          <span className="hidden sm:inline">Bình luận</span>
        </button>
        <button 
          className="action-button font-medium text-gray-600 py-2 rounded-br-lg flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm"
          onClick={onMessage}
        >
          <i className="fa-solid fa-paper-plane"></i> 
          <span className="hidden sm:inline">Nhắn tin</span>
        </button>
      </div>
    </div>
  );
};

export default ListingPost;