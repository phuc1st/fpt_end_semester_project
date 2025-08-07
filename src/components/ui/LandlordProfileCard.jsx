import React from 'react';

const LandlordProfileCard = ({ 
  landlord, 
  postCount, 
  onViewProfile 
}) => {
  return (
    <div className="result-card p-3 md:p-4 flex flex-col items-center text-center justify-between h-full">
      <div className="w-full">
        <img 
          src={landlord.avatar} 
          alt={landlord.name} 
          className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3"
        />
        <h3 className="font-bold text-base md:text-lg">{landlord.name}</h3>
        <p className="text-sm text-gray-500">
          {postCount} tin đăng gần đây
        </p>
      </div>
      <div className="mt-4 w-full">
        <button 
          onClick={onViewProfile}
          className="w-full bg-gray-100 hover:bg-gray-200 font-semibold py-2 px-4 rounded-md text-sm transition-colors"
        >
          Xem trang cá nhân
        </button>
      </div>
    </div>
  );
};

export default LandlordProfileCard;