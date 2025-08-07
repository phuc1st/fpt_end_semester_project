import React, { useState } from 'react';

const ReviewItem = ({ 
  review,
  onLike,
  onComment 
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likeCount || 0);

  const { 
    id,
    reviewer, 
    rating, 
    timeAgo, 
    stayDuration, 
    content, 
    image 
  } = review;

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    if (onLike) onLike(id, !isLiked);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-start gap-3 md:gap-4">
      {/* Avatar */}
      <img 
        src={reviewer.avatar} 
        alt={reviewer.name} 
        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
      />
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <p className="font-bold text-sm md:text-base">{reviewer.name}</p>
            <p className="text-xs text-gray-500">{stayDuration}</p>
          </div>
          <div className="text-right">
            <div className="text-sm md:text-base">
              {renderStars(rating)}
            </div>
            <p className="text-xs text-gray-500 mt-1">{timeAgo}</p>
          </div>
        </div>
        
        {/* Review Content */}
        <p className="text-gray-800 mt-2 text-sm md:text-base leading-relaxed">
          {content}
        </p>
        
        {/* Review Image */}
        {image && (
          <img 
            src={image} 
            className="mt-3 rounded-lg w-full max-w-xs object-cover" 
            alt="Review photo"
          />
        )}
        
        {/* Actions */}
        <div className="mt-3 flex gap-4 text-xs md:text-sm text-gray-600">
          <button 
            onClick={handleLike}
            className={`action-button px-3 py-1 rounded-md font-semibold transition-colors ${
              isLiked ? 'bg-blue-50 text-blue-600' : ''
            }`}
          >
            <i className={`${isLiked ? 'fa-solid' : 'fa-regular'} fa-thumbs-up mr-2`}></i>
            Hữu ích ({likeCount})
          </button>
          <button 
            onClick={() => onComment && onComment(id)}
            className="action-button px-3 py-1 rounded-md font-semibold"
          >
            <i className="fa-regular fa-comment mr-2"></i>
            Bình luận
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;