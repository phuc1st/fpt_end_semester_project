import React from 'react';

const ProfileCard = ({ 
  profile,
  onMessage 
}) => {
  const { 
    id,
    name, 
    occupation, 
    description, 
    location, 
    budget, 
    avatar, 
    coverImage 
  } = profile;

  return (
    <div className="profile-card flex flex-col">
      {/* Cover Image */}
      <div 
        className="h-28 md:h-32 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url('${coverImage}')` }}
      ></div>
      
      {/* Profile Content */}
      <div className="p-3 md:p-4 flex flex-col items-center flex-grow -mt-10 md:-mt-12">
        {/* Avatar */}
        <img 
          src={avatar} 
          alt={name} 
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white mb-2"
        />
        
        {/* Basic Info */}
        <h3 className="font-bold text-base md:text-lg text-center">{name}</h3>
        <p className="text-xs md:text-sm text-gray-500 mb-2">{occupation}</p>
        
        {/* Description */}
        <p className="text-center text-xs md:text-sm text-gray-700 my-2 md:my-3 flex-grow leading-relaxed">
          "{description}"
        </p>
        
        {/* Details */}
        <div className="w-full border-t pt-3 mt-2 text-xs md:text-sm text-gray-600 space-y-1">
          <p className="flex items-center">
            <i className="fa-solid fa-location-dot w-5 text-center mr-1"></i>
            Khu vực: <strong className="ml-1">{location}</strong>
          </p>
          <p className="flex items-center">
            <i className="fa-solid fa-wallet w-5 text-center mr-1"></i>
            Ngân sách: <strong className="ml-1">{budget}</strong>
          </p>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="p-3 md:p-4 border-t">
        <button 
          onClick={() => onMessage(id)}
          className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors"
        >
          Gửi tin nhắn
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;