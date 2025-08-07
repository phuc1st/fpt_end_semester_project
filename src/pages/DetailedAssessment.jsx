import React, { useState } from 'react';
import { Header } from '../components/layout';
import { ReviewItem } from '../components/ui';
import { ReviewSummary, AISummary } from '../components/features';

const DetailedAssessment = () => {
  const [sortBy, setSortBy] = useState('newest');
  const [showWriteReview, setShowWriteReview] = useState(false);

  // Sample data
  const reviewsData = [
    {
      id: 1,
      reviewer: {
        name: "Minh Anh",
        avatar: "https://placehold.co/48x48/93C5FD/1E40AF?text=A"
      },
      rating: 4,
      timeAgo: "2 tuần trước",
      stayDuration: "Đã ở 3 tháng",
      content: "Phòng sạch sẽ, chủ nhà siêu dễ tính và thân thiện. An ninh ở đây cũng rất tốt, có camera 24/7. Điểm trừ duy nhất là wifi hơi yếu vào buổi tối, mong chủ nhà sớm khắc phục.",
      likeCount: 5
    },
    {
      id: 2,
      reviewer: {
        name: "Thanh Lan",
        avatar: "https://placehold.co/48x48/FBCFE8/9D27B0?text=L"
      },
      rating: 5,
      timeAgo: "1 tháng trước",
      stayDuration: "Đã ở 6 tháng",
      content: "Vị trí quá tuyệt vời, đi bộ 5 phút là tới trạm xe buýt. Phòng ốc y như hình, đầy đủ tiện nghi. Chủ nhà hỗ trợ nhiệt tình. Mình đăng kèm ảnh ban công cho mọi người xem, rất thoáng!",
      likeCount: 12,
      image: "https://images.unsplash.com/photo-1585672749533-363c4ac493de?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      reviewer: {
        name: "Đức Minh",
        avatar: "https://placehold.co/48x48/DBEAFE/3730A3?text=M"
      },
      rating: 5,
      timeAgo: "1 tháng trước",
      stayDuration: "Đã ở 8 tháng",
      content: "Mình đã ở đây gần 1 năm rồi và rất hài lòng. Chủ nhà rất có trách nhiệm, sửa chữa đồ hỏng ngay lập tức. Khu vực yên tĩnh, phù hợp cho việc làm việc tại nhà. Giá cả hợp lý so với chất lượng.",
      likeCount: 8
    },
    {
      id: 4,
      reviewer: {
        name: "Thu Hương",
        avatar: "https://placehold.co/48x48/FDE68A/92400E?text=H"
      },
      rating: 3,
      timeAgo: "2 tháng trước",
      stayDuration: "Đã ở 2 tháng",
      content: "Phòng khá ổn nhưng cách âm không tốt lắm. Nhà hàng xóm có tiếng động buổi tối. Tuy nhiên vị trí thuận lợi và giá cả phù hợp với sinh viên như mình.",
      likeCount: 3
    }
  ];

  const handleBackToDetail = () => {
    console.log('Navigate back to property detail');
  };

  const handleWriteReview = () => {
    setShowWriteReview(true);
    console.log('Open write review modal');
  };

  const handleLikeReview = (reviewId, isLiked) => {
    console.log('Like review:', reviewId, isLiked);
  };

  const handleCommentReview = (reviewId) => {
    console.log('Comment on review:', reviewId);
  };

  const sortedReviews = [...reviewsData].sort((a, b) => {
    switch (sortBy) {
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      case 'newest':
      default:
        return 0; // Keep original order
    }
  });

  return (
    <div className="text-neutral">
      <Header activeTab="assessment" />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        {/* Back Navigation */}
        <div className="flex items-center mb-4">
          <button 
            onClick={handleBackToDetail}
            className="text-primary hover:underline font-semibold text-sm md:text-base"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            Quay lại trang chi tiết
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          
          {/* Left Column: Reviews Feed */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b pb-4 mb-6 gap-4">
                <h1 className="text-xl md:text-2xl font-bold">
                  Tất cả đánh giá ({reviewsData.length})
                </h1>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="newest">Sắp xếp: Mới nhất</option>
                    <option value="highest">Điểm cao nhất</option>
                    <option value="lowest">Điểm thấp nhất</option>
                  </select>
                  <button 
                    onClick={handleWriteReview}
                    className="bg-primary hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
                  >
                    Viết đánh giá
                  </button>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-6 md:space-y-8">
                {sortedReviews.map((review) => (
                  <ReviewItem
                    key={review.id}
                    review={review}
                    onLike={handleLikeReview}
                    onComment={handleCommentReview}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <ReviewSummary
                averageRating={4.5}
                // totalReviews={reviewsData.length}
                ratingDistribution={{
                  5: 9,
                  4: 2,
                  3: 1,
                  2: 0,
                  1: 0
                }}
              />
              
              <AISummary isLoading={true} />
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default DetailedAssessment;