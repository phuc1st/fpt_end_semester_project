import React from 'react';

const UserPost = ({ user, timeAgo, content, showAISuggestion = false }) => {
  return (
    <div className="post-card">
      <div className="p-3 md:p-4">
        <div className="flex items-center gap-2 md:gap-3 mb-3">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
          />
          <div>
            <p className="font-bold text-sm md:text-base">{user.name}</p>
            <p className="text-xs text-gray-500">{timeAgo}</p>
          </div>
        </div>
        <p className="mb-4 text-sm md:text-base leading-relaxed">{content}</p>
      </div>
      <div className="border-t grid grid-cols-3">
        {showAISuggestion ? (
          <button className="action-button font-medium text-gray-600 py-2 rounded-bl-lg flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm">
            <i className="fa-solid fa-wand-magic-sparkles text-blue-500"></i> 
            <span className="hidden sm:inline">Xem gợi ý</span> AI
          </button>
        ) : (
          <button className="action-button font-medium text-gray-600 py-2 rounded-bl-lg flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm">
            <i className="fa-solid fa-heart text-red-500"></i> 
            Thích
          </button>
        )}
        <button className="action-button font-medium text-gray-600 py-2 flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm">
          <i className="fa-solid fa-comment"></i> 
          <span className="hidden sm:inline">Bình luận</span>
        </button>
        <button className="action-button font-medium text-gray-600 py-2 rounded-br-lg flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm">
          <i className="fa-solid fa-paper-plane"></i> 
          <span className="hidden sm:inline">Nhắn tin</span>
        </button>
      </div>
    </div>
  );
};

export default UserPost;