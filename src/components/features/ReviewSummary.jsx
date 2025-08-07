import React from 'react';

const ReviewSummary = ({ 
  averageRating = 4.5, 
  totalReviews = 12,
  ratingDistribution = {
    5: 9,
    4: 2,
    3: 1,
    2: 0,
    1: 0
  }
}) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const getPercentage = (count) => {
    return totalReviews > 0 ? (count / totalReviews) * 100 : 0;
  };

  return (
    <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
      <h3 className="font-bold text-lg mb-4">Tổng quan đánh giá</h3>
      
      {/* Average Rating */}
      <div className="flex items-center gap-3 mb-4">
        <p className="text-3xl md:text-4xl font-extrabold">{averageRating}</p>
        <div>
          <div className="text-yellow-400 text-lg md:text-xl">
            {renderStars(averageRating)}
          </div>
          <p className="text-sm text-gray-500">
            Dựa trên {totalReviews} đánh giá
          </p>
        </div>
      </div>
      
      {/* Rating Distribution */}
      <div className="space-y-2 text-sm">
        {[5, 4, 3, 2, 1].map((rating) => (
          <div key={rating} className="flex items-center gap-2">
            <span className="w-8 text-right">
              {rating} <i className="fa-solid fa-star text-yellow-400"></i>
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-yellow-400 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: `${getPercentage(ratingDistribution[rating] || 0)}%` }}
              ></div>
            </div>
            <span className="w-6 text-right">
              {ratingDistribution[rating] || 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSummary;