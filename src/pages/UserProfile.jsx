import React, { useState } from 'react';
import { Header } from '../components/layout';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('about');

  // Sample data
  const userData = {
    name: "Minh An",
    avatar: "https://placehold.co/120x120/93C5FD/1E40AF?text=A",
    joinDate: "Đã tham gia 3 tháng trước",
    banner: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop",
    description: "Mình là sinh viên năm 2, khá hiền, thích nấu ăn và mong muốn tìm được bạn ở sạch sẽ, vui vẻ.",
    details: [
      { icon: "fa-graduation-cap", text: "Là Sinh viên tại Đại học Bách Khoa Đà Nẵng" },
      { icon: "fa-map-pin", text: "Đang tìm trọ tại Quận Liên Chiểu" },
      { icon: "fa-sack-dollar", text: "Ngân sách mong muốn: ~1.5 triệu/tháng" }
    ],
    isVerified: true,
    posts: [
      {
        id: 1,
        content: "Chào mọi người, mình là sinh viên năm 2, đang cần tìm một phòng trọ gần trường Đại học Bách Khoa Đà Nẵng, giá khoảng 2-3 triệu. Mình cần phòng có điều hòa, an ninh tốt, giờ giấc tự do. Ai có phòng hoặc biết chỗ nào ổn chỉ mình với ạ!",
        timeAgo: "2 giờ trước"
      },
      {
        id: 2,
        content: "Có bạn nữ nào đang tìm người ở ghép khu vực Hòa Khánh không ạ? Mình tìm được một phòng khá ổn nhưng ở một mình thì hơi cao so với ngân sách.",
        timeAgo: "1 tuần trước"
      }
    ],
    reviews: 3
  };

  const handleMessage = () => {
    console.log('Message user:', userData.name);
  };

  const handleMoreOptions = () => {
    console.log('More options for user:', userData.name);
  };

  const tabs = [
    { id: 'posts', label: 'Bài viết' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'reviews', label: `Đánh giá (${userData.reviews})` }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Profile Banner */}
      <div className="relative">
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${userData.banner})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <div className="flex items-end gap-6">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={userData.avatar} 
                  alt={userData.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              
              {/* User Info */}
              <div className="flex-1 flex items-end justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{userData.name}</h1>
                  <p className="text-white text-opacity-90">{userData.joinDate}</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={handleMessage}
                    className="bg-primary hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2"
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                    Nhắn tin
                  </button>
                  <button 
                    onClick={handleMoreOptions}
                    className="w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center text-white"
                  >
                    <i className="fa-solid fa-ellipsis"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - About */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-4">Giới thiệu</h2>
              
              {/* Description */}
              <div className="mb-6">
                <p className="text-gray-700 italic">"{userData.description}"</p>
              </div>
              
              {/* Details */}
              <div className="space-y-3">
                {userData.details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <i className={`fa-solid ${detail.icon} text-gray-500 w-5 text-center`}></i>
                    <span className="text-gray-700">{detail.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Verification Status */}
              {userData.isVerified && (
                <div className="mt-6 pt-4 border-t">
                  <div className="flex items-center gap-2 text-green-600">
                    <i className="fa-solid fa-check-circle"></i>
                    <span className="text-sm font-medium">Tài khoản đã được xác thực</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Posts */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {userData.posts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow-sm p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={userData.avatar} 
                        alt={userData.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold">{userData.name}</h3>
                        <p className="text-sm text-gray-500">{post.timeAgo}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Post Content */}
                  <p className="text-gray-700 leading-relaxed">{post.content}</p>
                  
                  {/* Post Actions */}
                  <div className="flex items-center gap-6 mt-4 pt-4 border-t">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-primary">
                      <i className="fa-regular fa-heart"></i>
                      <span className="text-sm">Thích</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-primary">
                      <i className="fa-regular fa-comment"></i>
                      <span className="text-sm">Bình luận</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-500 hover:text-primary">
                      <i className="fa-solid fa-share"></i>
                      <span className="text-sm">Chia sẻ</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
