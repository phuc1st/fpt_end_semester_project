import React, { useState } from 'react';
import { Header } from '../components/layout';
import { RoommateFilter } from '../components/features';
import { ProfileCard, Pagination } from '../components/ui';

const RoommateFinder = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const profiles = [
    {
      id: 1,
      name: "Minh An",
      occupation: "Sinh viên ĐH Bách Khoa",
      description: "Mình đang tìm một bạn nữ ở ghép phòng gần trường. Mình khá hiền, thích nấu ăn và mong muốn tìm được bạn ở sạch sẽ, vui vẻ.",
      location: "Liên Chiểu",
      budget: "~1.5 triệu",
      avatar: "https://placehold.co/96x96/93C5FD/1E40AF?text=A",
      coverImage: "https://images.unsplash.com/photo-1516557070061-c3d1653fa646?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Quốc Bảo",
      occupation: "Nhân viên văn phòng",
      description: "Mình đã đi làm, cần tìm bạn ở ghép chung cư khu vực Sơn Trà. Mình tôn trọng không gian riêng, không tụ tập bạn bè ồn ào.",
      location: "Sơn Trà",
      budget: "~3 triệu",
      avatar: "https://placehold.co/96x96/A7F3D0/065F46?text=B",
      coverImage: "https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Thanh Lan",
      occupation: "Sinh viên ĐH Kinh tế",
      description: "Tìm bạn nữ ở ghép khu An Hải Bắc, gần cầu sông Hàn. Mình có nuôi một bé mèo Anh lông ngắn hiền khô :)",
      location: "Sơn Trà",
      budget: "~2 triệu",
      avatar: "https://placehold.co/96x96/FBCFE8/9D27B0?text=L",
      coverImage: "https://images.unsplash.com/photo-1506784983877-45594efa4c85?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Đức Minh",
      occupation: "Lập trình viên",
      description: "Dev fullstack đang tìm bạn ở ghép khu vực gần IT Park. Mình làm việc tại nhà nhiều, cần môi trường yên tĩnh để tập trung code.",
      location: "Ngũ Hành Sơn",
      budget: "~2.8 triệu",
      avatar: "https://placehold.co/96x96/DBEAFE/3730A3?text=M",
      coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Thu Hương",
      occupation: "Y tá bệnh viện C",
      description: "Mình làm ca đêm thường xuyên nên cần tìm bạn ở ghép hiểu được tính chất công việc. Mình rất sạch sẽ và có trách nhiệm.",
      location: "Hải Châu",
      budget: "~2.2 triệu",
      avatar: "https://placehold.co/96x96/FDE68A/92400E?text=H",
      coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Văn Toàn",
      occupation: "Sinh viên ĐH Sư phạm",
      description: "Tìm bạn nam ở ghép khu vực gần trường. Mình thích đọc sách, nghe nhạc và rất coi trọng việc học tập.",
      location: "Liên Chiểu",
      budget: "~1.8 triệu",
      avatar: "https://placehold.co/96x96/D1FAE5/166534?text=T",
      coverImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const handleMessage = (profileId) => {
    console.log('Send message to profile:', profileId);
    // In a real app, this would open a chat or message modal
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

  return (
    <div className="text-neutral">
      <Header activeTab="roommate" />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          
          {/* Left Sidebar - Filters */}
          <RoommateFilter />

          {/* Main Results Feed */}
          <div className="col-span-12 lg:col-span-9">
            {/* Header */}
            <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm mb-4">
              <h1 className="text-xl md:text-2xl font-bold">
                Tìm thấy {profiles.length} bạn ở ghép tiềm năng
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                Các hồ sơ phù hợp nhất với bạn sẽ được hiển thị đầu tiên.
              </p>
            </div>

            {/* Profiles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {profiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onMessage={handleMessage}
                />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RoommateFinder;