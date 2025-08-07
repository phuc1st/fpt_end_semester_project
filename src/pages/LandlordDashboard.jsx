import React, { useState } from 'react';
import { Header, DashboardSidebar } from '../components/layout';
import { StatCard, ListingTable } from '../components/ui';
import { ViewsChart } from '../components/features';

const LandlordDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log('Tab changed to:', tab);
  };

  const handleNewPost = () => {
    console.log('Create new post');
    // Navigate to create listing page
  };

  return (
    <div className="text-neutral">
      <Header 
        activeTab="dashboard" 
        onCreatePost={handleNewPost}
        user={landlordData}
        createButtonText="Đăng tin mới"
      />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          
          {/* Left Sidebar - Navigation */}
          <DashboardSidebar 
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          {/* Main Dashboard Content */}
          <div className="col-span-12 lg:col-span-9">
            {/* Welcome Message */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Chào mừng trở lại, {landlordData.name}!
            </h1>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
              {statsData.map((stat, index) => (
                <StatCard
                  key={index}
                  icon={`fa-solid ${stat.icon}`}
                  iconColor={stat.iconColor}
                  label={stat.label}
                  value={stat.value}
                  onClick={() => handleStatClick(stat.label)}
                />
              ))}
            </div>

            {/* Chart */}
            <ViewsChart 
              data={chartData}
              title="Thống kê lượt xem 7 ngày qua"
            />

            {/* Recent Listings Table */}
            <ListingTable 
              listings={recentListings}
              onManageListing={handleManageListing}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandlordDashboard;