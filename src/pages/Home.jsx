import React from 'react';
import { Header, LeftSidebar, RightSidebar } from '../components/layout';
import { CreatePostCard, UserPost, ListingPost } from '../components/ui';

const Home = () => {
  // Sample data
  const userData = {
    name: "Minh An",
    avatar: "https://placehold.co/40x40/93C5FD/1E40AF?text=A"
  };

  const landlordData = {
    name: "Chủ trọ: Anh Minh",
    avatar: "https://placehold.co/40x40/A7F3D0/065F46?text=M"
  };

  const handleSave = () => {
    console.log('Saved listing');
  };

  const handleComment = () => {
    console.log('Comment clicked');
  };

  const handleMessage = () => {
    console.log('Message clicked');
  };

  return (
    <div className="text-neutral">
      <Header activeTab="home" />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-12 gap-2 md:gap-4 lg:gap-8">
          
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Main Feed */}
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-3 md:space-y-4">
              {/* Create Post Card */}
              <CreatePostCard />

              {/* User Post Card */}
              <UserPost
                user={userData}
                timeAgo="2 giờ trước"
                content="Chào mọi người, mình là sinh viên năm 2, đang cần tìm một phòng trọ gần trường Đại học Bách Khoa Đà Nẵng, giá khoảng 2-3 triệu. Mình cần phòng có điều hòa, an ninh tốt, giờ giấc tự do. Mình khá gọn gàng và thích yên tĩnh. Ai có phòng hoặc biết chỗ nào ổn chỉ mình với ạ!"
                showAISuggestion={true}
              />

              {/* Sponsored Listing Card */}
              <ListingPost
                landlord={landlordData}
                isSponsored={true}
                description="Phòng trọ mới xây, full nội thất cao cấp, vị trí đắc địa gần cầu Rồng. An ninh 24/7, có thang máy, hầm để xe rộng rãi. Ưu tiên người đi làm, sinh viên văn minh."
                image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop"
                title="Phòng trọ cao cấp gần Cầu Rồng"
                price="4.200.000đ/tháng"
                onSave={handleSave}
                onComment={handleComment}
                onMessage={handleMessage}
              />
            </div>
          </div>

          {/* Right Sidebar */}
          <RightSidebar />

        </div>
      </main>
    </div>
  );
};

export default Home;