import React, { useState } from 'react';
import { Header, DashboardSidebar } from '../components/layout';
import { AppointmentCard, FilterTabs } from '../components/ui';

const AppointmentManagement = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Sample data
  const landlordData = {
    name: "Anh Minh",
    avatar: "https://placehold.co/40x40/A7F3D0/065F46?text=M"
  };

  const appointments = [
    {
      id: 1,
      tenant: {
        name: "Minh An",
        avatar: "https://placehold.co/48x48/93C5FD/1E40AF?text=A"
      },
      property: {
        title: "Phòng trọ gần ĐH Bách Khoa"
      },
      time: "15:00",
      date: "Thứ Bảy, 02/08",
      status: "pending",
      message: "Chào anh, mình muốn đến xem phòng cùng một người bạn ạ."
    },
    {
      id: 2,
      tenant: {
        name: "Thanh Lan",
        avatar: "https://placehold.co/48x48/FBCFE8/9D27B0?text=L"
      },
      property: {
        title: "Căn hộ studio gần Cầu Rồng"
      },
      time: "10:00",
      date: "Chủ Nhật, 03/08",
      status: "confirmed",
      message: "Mình sẽ đến đúng giờ."
    },
    {
      id: 3,
      tenant: {
        name: "Quốc Bảo",
        avatar: "https://placehold.co/48x48/A7F3D0/065F46?text=B"
      },
      property: {
        title: "Phòng trọ gần ĐH Bách Khoa"
      },
      time: "18:30",
      date: "Thứ Hai, 04/08",
      status: "pending",
      message: ""
    },
    {
      id: 4,
      tenant: {
        name: "Hồng Nhung",
        avatar: "https://placehold.co/48x48/FED7E2/9F1239?text=N"
      },
      property: {
        title: "Nhà nguyên căn KĐT FPT"
      },
      time: "14:00",
      date: "Thứ Ba, 05/08",
      status: "confirmed",
      message: "Cảm ơn anh đã xác nhận."
    },
    {
      id: 5,
      tenant: {
        name: "Tuấn Anh",
        avatar: "https://placehold.co/48x48/DBEAFE/3730A3?text=T"
      },
      property: {
        title: "Phòng trọ có ban công"
      },
      time: "16:30",
      date: "Thứ Tư, 06/08",
      status: "rejected",
      message: "Mình có thể xem vào cuối tuần được không ạ?"
    }
  ];

  // Filter tabs configuration
  const filterTabs = [
    { id: 'all', label: 'Tất cả', count: appointments.length },
    { id: 'pending', label: 'Đang chờ xử lý', count: appointments.filter(a => a.status === 'pending').length },
    { id: 'confirmed', label: 'Đã xác nhận', count: appointments.filter(a => a.status === 'confirmed').length },
    { id: 'history', label: 'Lịch sử', count: appointments.filter(a => ['rejected', 'cancelled'].includes(a.status)).length }
  ];

  // Filter appointments based on active tab
  const getFilteredAppointments = () => {
    switch (activeTab) {
      case 'pending':
        return appointments.filter(a => a.status === 'pending');
      case 'confirmed':
        return appointments.filter(a => a.status === 'confirmed');
      case 'history':
        return appointments.filter(a => ['rejected', 'cancelled'].includes(a.status));
      case 'all':
      default:
        return appointments;
    }
  };

  const filteredAppointments = getFilteredAppointments();

  // Event handlers
  const handleConfirm = (appointmentId) => {
    console.log('Confirm appointment:', appointmentId);
    // Update appointment status logic here
  };

  const handleReject = (appointmentId) => {
    console.log('Reject appointment:', appointmentId);
    // Update appointment status logic here
  };

  const handleSuggestTime = (appointmentId) => {
    console.log('Suggest new time for appointment:', appointmentId);
    // Open time suggestion modal/form
  };

  const handleCancel = (appointmentId) => {
    console.log('Cancel appointment:', appointmentId);
    // Update appointment status logic here
  };

  const handleMessage = (appointmentId) => {
    console.log('Message tenant for appointment:', appointmentId);
    // Navigate to messaging
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleDashboardTabChange = (tab) => {
    console.log('Dashboard tab change:', tab);
    // Handle dashboard navigation
  };

  const handleNewPost = () => {
    console.log('Create new post');
  };

  return (
    <div className="text-neutral">
      <Header 
        activeTab="appointments" 
        onCreatePost={handleNewPost}
        user={landlordData}
        createButtonText="Đăng tin mới"
      />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          
          {/* Left Sidebar - Navigation */}
          <DashboardSidebar 
            activeTab="appointments"
            onTabChange={handleDashboardTabChange}
          />

          {/* Main Content Area */}
          <div className="col-span-12 lg:col-span-9">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Quản lý Lịch hẹn</h1>
            
            {/* Filter Tabs */}
            <FilterTabs 
              tabs={filterTabs}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />

            {/* Appointments List */}
            <div className="space-y-4">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onConfirm={handleConfirm}
                    onReject={handleReject}
                    onSuggestTime={handleSuggestTime}
                    onCancel={handleCancel}
                    onMessage={handleMessage}
                  />
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <i className="fa-solid fa-calendar-xmark text-4xl mb-4"></i>
                  <p className="text-lg font-medium">Không có lịch hẹn nào</p>
                  <p className="text-sm">Chưa có lịch hẹn nào trong danh mục này.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppointmentManagement;