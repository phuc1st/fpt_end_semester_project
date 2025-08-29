import React from 'react';
import { Header, DashboardSidebar } from '../components/layout';

// Card đánh giá hợp đồng thuê (Landlord review management)
const TenancyReviewCard = ({
  stayPeriod,
  roomTitle,
  tenantReview,
  landlordReview,
  onWriteReview
}) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="border-b pb-4 mb-4">
      <p className="text-sm text-gray-500">{stayPeriod}</p>
      <h3 className="text-lg font-bold">{roomTitle}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Đánh giá từ người thuê */}
      <div>
        <h4 className="font-semibold mb-2">Đánh giá từ người thuê:</h4>
        <div className="flex items-start gap-3">
          <img src={tenantReview.avatar} alt="Reviewer" className="w-12 h-12 rounded-full" />
          <div className="flex-1">
            <p className="font-bold">
              {tenantReview.name}
              <span className="ml-2 font-normal text-yellow-400">{tenantReview.stars}</span>
            </p>
            <p className="text-sm text-gray-700 mt-1">{tenantReview.content}</p>
          </div>
        </div>
      </div>
      {/* Đánh giá của chủ nhà */}
      <div>
        <h4 className="font-semibold mb-2">Đánh giá của bạn về {tenantReview.name}:</h4>
        {landlordReview ? (
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className="font-bold text-blue-600">
                Đã đánh giá <span className="ml-2 font-normal text-yellow-400">{landlordReview.stars}</span>
              </p>
              <p className="text-sm text-gray-700 mt-1">{landlordReview.content}</p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-bold text-green-600">Bạn chưa đánh giá người thuê này.</p>
            <p className="text-sm text-gray-600 mt-1">Hãy chia sẻ trải nghiệm của bạn để giúp cộng đồng thêm minh bạch.</p>
            <button
              className="mt-3 bg-white border border-gray-300 text-gray-800 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-100"
              onClick={onWriteReview}
            >
              Viết đánh giá
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

const sampleReviews = [
  {
    stayPeriod: 'Lượt thuê từ 01/01/2025 - 30/06/2025',
    roomTitle: 'Phòng trọ gần ĐH Bách Khoa',
    tenantReview: {
      avatar: 'https://placehold.co/48x48/93C5FD/1E40AF?text=A',
      name: 'Minh An',
      stars: '★★★★☆',
      content: '"Phòng sạch sẽ, chủ nhà siêu dễ tính và thân thiện. An ninh ở đây cũng rất tốt..."',
    },
    landlordReview: null,
  },
  {
    stayPeriod: 'Lượt thuê từ 15/11/2024 - 15/05/2025',
    roomTitle: 'Căn hộ studio gần Cầu Rồng',
    tenantReview: {
      avatar: 'https://placehold.co/48x48/FBCFE8/9D27B0?text=L',
      name: 'Thanh Lan',
      stars: '★★★★★',
      content: '"Vị trí quá tuyệt vời, đi bộ 5 phút là tới trạm xe buýt. Phòng ốc y như hình..."',
    },
    landlordReview: {
      stars: '★★★★★',
      content: '"Thanh Lan là một người thuê tuyệt vời, giữ gìn phòng ốc sạch sẽ và thanh toán đúng hạn. Rất mong được hợp tác lại."',
    },
  },
];

const AssessmentManagement = () => {
  const handleWriteReview = (tenantName) => {
    alert(`Viết đánh giá cho ${tenantName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab="dashboard" user={{ avatar: 'https://placehold.co/40x40/A7F3D0/065F46?text=M' }} />
      <main className="container mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <DashboardSidebar />
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold">Quản lý đánh giá</h1>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <i className="fa-solid fa-filter mr-2"></i>
                    Lọc đánh giá
                  </button>
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {sampleReviews.map((review, index) => (
                  <TenancyReviewCard
                    key={index}
                    stayPeriod={review.stayPeriod}
                    roomTitle={review.roomTitle}
                    tenantReview={review.tenantReview}
                    landlordReview={review.landlordReview}
                    onWriteReview={() => handleWriteReview(review.tenantReview.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AssessmentManagement;
