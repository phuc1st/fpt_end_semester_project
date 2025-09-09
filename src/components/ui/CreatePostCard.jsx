import React from 'react';
import { Link } from 'react-router-dom';

const CreatePostCard = () => {
  return (
    <div className="post-card p-3 md:p-4">
      <div className="flex items-center gap-2 md:gap-3">
        <img 
          src="https://placehold.co/40x40/E2E8F0/4A5568?text=V" 
          alt="User Avatar" 
          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
        />
        <div className="w-full bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full py-2 md:py-3 px-3 md:px-4 cursor-pointer text-sm md:text-base">
          Toàn ơi, bạn đang tìm gì thế?
        </div>
      </div>
      <div className="border-t mt-3 pt-3 flex flex-col sm:flex-row sm:justify-around gap-2 sm:gap-0">
        <button 
          type="button"
          title="Tính năng sắp ra mắt"
          className="action-button font-medium text-gray-600 py-2 px-2 md:px-4 rounded-lg flex items-center justify-center gap-2 w-full text-sm md:text-base hover:bg-gray-100 transition-colors"
          onClick={(e) => e.preventDefault()}
        >
          <i className="fa-solid fa-pen-to-square text-green-500"></i> 
          <span className="hidden sm:inline">Đăng bài</span> tìm trọ
        </button>
        <Link 
          to="/create-listing" 
          className="action-button font-medium text-gray-600 py-2 px-2 md:px-4 rounded-lg flex items-center justify-center gap-2 w-full text-sm md:text-base hover:bg-gray-100 transition-colors"
        >
          <i className="fa-solid fa-image text-blue-500"></i> 
          <span className="hidden sm:inline">Đăng tin</span> cho thuê
        </Link>
      </div>
    </div>
  );
};

export default CreatePostCard;