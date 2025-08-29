import React from 'react';
import { Header, DashboardSidebar } from '../components/layout';
import { AppointmentCard, FilterTabs } from '../components/ui';

const AppointmentManagement = () => {
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

  const handleAppointmentAction = (appointmentId, action) => {
    console.log(`${action} appointment:`, appointmentId);
    // Handle appointment actions
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
              {/* Header */}
              <div className="flex justify-between items-center">
                <h1 className="text-2xl md:text-3xl font-bold">Quản lý lịch hẹn</h1>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <i className="fa-solid fa-download mr-2"></i>
                    Xuất báo cáo
                  </button>
                </div>
              </div>

              {/* Filter Tabs */}
              <FilterTabs tabs={filterTabs} />

              {/* Appointments List */}
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <AppointmentCard
                    key={appointment.id}
                    appointment={appointment}
                    onConfirm={() => handleAppointmentAction(appointment.id, 'confirm')}
                    onReject={() => handleAppointmentAction(appointment.id, 'reject')}
                    onReschedule={() => handleAppointmentAction(appointment.id, 'reschedule')}
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

export default AppointmentManagement;