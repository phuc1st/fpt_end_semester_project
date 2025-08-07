import React from 'react';

const UserPostCard = ({ user, timeAgo, content, onMessage }) => {
  return (
    <div className="result-card p-3 md:p-4 flex flex-col justify-between h-full">
      <div>
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
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
          {content}
        </p>
      </div>
      <div className="mt-4">
        <button 
          onClick={onMessage}
          className="w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-md text-sm transition-colors"
        >
          Nhắn tin
        </button>
      </div>
    </div>
  );
};

export default UserPostCard;