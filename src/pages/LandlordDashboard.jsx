import React from 'react';
import { Header, DashboardSidebar } from '../components/layout';
import { StatCard, ListingTable } from '../components/ui';
import { ViewsChart } from '../components/features';

const LandlordDashboard = () => {
  // Sample data
  const landlordData = {
    name: "Anh Minh",
    avatar: "https://placehold.co/40x40/A7F3D0/065F46?text=M"
  };

  const statsData = [
    {
      icon: 'fa-eye',
      iconColor: 'blue',
      label: 'Tổng lượt xem',
      value: '12,540'
    },
    {
      icon: 'fa-comments',
      iconColor: 'green',
      label: 'Tin nhắn mới',
      value: '8'
    },
    {
      icon: 'fa-calendar-plus',
      iconColor: 'yellow',
      label: 'Yêu cầu xem phòng',
      value: '3'
    },
    {
      icon: 'fa-house-circle-check',
      iconColor: 'red',
      label: 'Phòng đang cho thuê',
      value: '4/5'
    }
  ];

  const chartData = {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'],
    values: [120, 190, 150, 250, 220, 300, 280]
  };

  const recentListings = [
    {
      id: 1,
      title: 'Phòng trọ gần ĐH Bách Khoa',
      status: 'active',
      views: 1280
    },
    {
      id: 2,
      title: 'Căn hộ studio gần Cầu Rồng',
      status: 'active',
      views: 3450
    },
    {
      id: 3,
      title: 'Nhà nguyên căn KĐT FPT',
      status: 'rented',
      views: 5120
    }
  ];

  const handleStatClick = (statType) => {
    console.log('Stat clicked:', statType);
    // Navigate to relevant section
  };

  const handleManageListing = (listingId) => {
    console.log('Manage listing:', listingId);
    // Navigate to listing management
  };

  return (
    <div className="text-neutral">
      <Header 
        activeTab="dashboard" 
        user={landlordData}
        createButtonText="Đăng tin mới"
      />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          
          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsData.map((stat, index) => (
                  <StatCard
                    key={index}
                    icon={stat.icon}
                    iconColor={stat.iconColor}
                    label={stat.label}
                    value={stat.value}
                    onClick={() => handleStatClick(stat.label)}
                  />
                ))}
              </div>

              {/* Chart */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Lượt xem tin đăng</h2>
                <ViewsChart data={chartData} />
              </div>

              {/* Recent Listings */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Tin đăng gần đây</h2>
                  <button className="text-primary hover:text-primary-700 font-medium">
                    Xem tất cả
                  </button>
                </div>
                <ListingTable 
                  listings={recentListings}
                  onManage={handleManageListing}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandlordDashboard;