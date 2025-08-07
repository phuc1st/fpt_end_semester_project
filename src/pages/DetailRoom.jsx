import React, { useState } from 'react';
import { Header } from '../components/layout';
import { ReviewItem, MakeAppointmentModal } from '../components/ui';

const DetailRoom = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);

  // Sample data
  const propertyData = {
    id: 1,
    title: "Phòng trọ full nội thất gần ĐH Bách Khoa",
    location: "123 Nguyễn Lương Bằng, P. Hòa Khánh Bắc, Q. Liên Chiểu, Đà Nẵng",
    price: "3.500.000đ/tháng",
    area: "25 m²",
    bedrooms: 1,
    bathrooms: 1,
    description: "Phòng trọ mới xây, sạch sẽ, thoáng mát với đầy đủ nội thất cơ bản, chỉ cần xách vali vào ở. Vị trí thuận lợi, cách cổng sau Đại học Bách Khoa chỉ 500m, gần chợ Hòa Khánh và các quán ăn. Khu vực an ninh, yên tĩnh, có camera giám sát 24/7, giờ giấc tự do. Chủ nhà thân thiện, dễ tính, luôn sẵn sàng hỗ trợ.",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585672749533-363c4ac493de?q=80&w=1974&auto=format&fit=crop"
    ],
    amenities: [
      { icon: "fa-wifi", name: "Wifi tốc độ cao" },
      { icon: "fa-snowflake", name: "Điều hòa" },
      { icon: "fa-temperature-arrow-up", name: "Nóng lạnh" },
      { icon: "fa-motorcycle", name: "Chỗ để xe" },
      { icon: "fa-shield-halved", name: "An ninh 24/7" },
      { icon: "fa-paw", name: "Cho nuôi thú cưng" }
    ],
    landlord: {
      name: "Chủ trọ: Anh Minh",
      avatar: "https://placehold.co/80x80/A7F3D0/065F46?text=M",
      joinDate: "Đã tham gia 2 năm trước"
    },
    reviews: [
      {
        id: 1,
        reviewer: {
          name: "Minh Anh",
          avatar: "https://placehold.co/40x40/93C5FD/1E40AF?text=A"
        },
        rating: 4,
        timeAgo: "2 tuần trước",
        content: "Phòng sạch sẽ, chủ nhà siêu dễ tính và thân thiện. An ninh ở đây cũng rất tốt. Điểm trừ duy nhất là wifi hơi yếu vào buổi tối."
      },
      {
        id: 2,
        reviewer: {
          name: "Thanh Lan",
          avatar: "https://placehold.co/40x40/FBCFE8/9D27B0?text=L"
        },
        rating: 5,
        timeAgo: "1 tháng trước",
        content: "Vị trí quá tuyệt vời, đi bộ 5 phút là tới trạm xe buýt. Phòng ốc y như hình, đầy đủ tiện nghi. Chủ nhà hỗ trợ nhiệt tình. Sẽ giới thiệu cho bạn bè."
      }
    ]
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    console.log('Save property:', propertyData.id);
  };

  const handleShare = () => {
    console.log('Share property:', propertyData.id);
  };

  const handleMessageLandlord = () => {
    console.log('Message landlord:', propertyData.landlord.name);
  };

  const handleScheduleViewing = () => {
    setShowAppointmentModal(true);
  };

  const handleViewLandlordProfile = () => {
    console.log('View landlord profile:', propertyData.landlord.name);
  };

  const handleViewAllReviews = () => {
    console.log('View all reviews for property:', propertyData.id);
  };

  return (
    <div className="text-neutral">
      <Header activeTab="detail" />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Image Gallery */}
              <div>
                <img 
                  src={propertyData.images[0]} 
                  alt={propertyData.title} 
                  className="w-full h-96 object-cover"
                />
              </div>
              
              <div className="p-4 md:p-6">
                {/* Title & Basic Info */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold">{propertyData.title}</h1>
                    <p className="text-gray-600 mt-2">
                      <i className="fa-solid fa-location-dot mr-2"></i>
                      {propertyData.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleSave}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" 
                      title="Lưu tin"
                    >
                      <i className={`${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark text-xl`}></i>
                    </button>
                    <button 
                      onClick={handleShare}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" 
                      title="Chia sẻ"
                    >
                      <i className="fa-solid fa-share-nodes text-xl"></i>
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-center my-6 border-y py-4">
                  <div>
                    <p className="text-gray-500 text-sm">Mức giá</p>
                    <p className="font-bold text-lg text-red-500">{propertyData.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Diện tích</p>
                    <p className="font-bold text-lg">{propertyData.area}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phòng ngủ</p>
                    <p className="font-bold text-lg">{propertyData.bedrooms}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phòng tắm</p>
                    <p className="font-bold text-lg">{propertyData.bathrooms}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-xl font-bold mb-3">Mô tả chi tiết</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {propertyData.description}
                  </p>
                </div>
                
                {/* Amenities */}
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4">Tiện ích</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {propertyData.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <i className={`fa-solid ${amenity.icon} text-blue-500 w-6 text-center text-lg`}></i>
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Community Reviews */}
              <div className="p-4 md:p-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Đánh giá từ cộng đồng ({propertyData.reviews.length})</h2>
                  <button 
                    onClick={handleViewAllReviews}
                    className="text-primary hover:underline font-semibold text-sm"
                  >
                    Xem tất cả
                  </button>
                </div>
                <div className="space-y-6">
                  {propertyData.reviews.map((review) => (
                    <ReviewItem
                      key={review.id}
                      review={{
                        ...review,
                        stayDuration: "Đã ở 3 tháng",
                        likeCount: 0
                      }}
                      onLike={(reviewId, isLiked) => console.log('Like review:', reviewId, isLiked)}
                      onComment={(reviewId) => console.log('Comment on review:', reviewId)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Landlord Info Card */}
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm text-center">
                <img 
                  src={propertyData.landlord.avatar} 
                  alt="Chủ trọ" 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-3 ring-4 ring-blue-200"
                />
                <h3 className="font-bold text-lg">{propertyData.landlord.name}</h3>
                <p className="text-sm text-gray-500">{propertyData.landlord.joinDate}</p>
                <button 
                  onClick={handleViewLandlordProfile}
                  className="mt-4 w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-md text-sm transition-colors"
                >
                  Xem trang cá nhân
                </button>
              </div>

              {/* Action Card */}
              <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-red-500">
                  {propertyData.price}
                  <span className="text-base font-normal text-gray-500">/tháng</span>
                </p>
                <div className="space-y-3 mt-4">
                  <button 
                    onClick={handleMessageLandlord}
                    className="w-full bg-primary hover:bg-primary-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Nhắn tin cho chủ trọ
                  </button>
                  <button 
                    onClick={handleScheduleViewing}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                  >
                    Đặt lịch xem phòng
                  </button>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="https://placehold.co/400x300/E2E8F0/4A5568?text=Bản+đồ+ở+đây" 
                  alt="Map" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </aside>

        </div>
        {/* Make Appointment Modal */}
        <MakeAppointmentModal
          open={showAppointmentModal}
          onClose={() => setShowAppointmentModal(false)}
          onSuccess={() => setShowAppointmentModal(false)}
        />
      </main>
    </div>
  );
};

export default DetailRoom; 