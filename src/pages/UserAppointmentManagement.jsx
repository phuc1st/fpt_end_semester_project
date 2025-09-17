import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import UserDashboardSidebar from '../components/layout/UserDashboardSidebar';

const UserAppointmentManagement = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showRebookModal, setShowRebookModal] = useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState(null);
  const [rebookProperty, setRebookProperty] = useState('');
  const [rebookDate, setRebookDate] = useState('');
  const [rebookTime, setRebookTime] = useState('');

  const upcomingAppointments = [
    {
      id: 1,
      title: "Phòng trọ cao cấp gần ĐH Kinh Tế",
      address: "123 Nguyễn Tri Phương, P.5, Q.10",
      time: "14:00 - Thứ Bảy, 13/09/2025",
      status: "confirmed",
      image: "https://placehold.co/120x90/EBF8FF/3182CE?text=Trọ"
    },
    {
      id: 2,
      title: "Nhà nguyên căn full nội thất Q.Phú Nhuận",
      address: "45 Phan Xích Long, P.2, Q.Phú Nhuận",
      time: "10:30 - Chủ Nhật, 14/09/2025",
      status: "pending",
      image: "https://placehold.co/120x90/FEFBEB/D69E2E?text=Trọ"
    }
  ];

  const pastAppointments = [
    {
      id: 3,
      title: "Phòng trọ giá sinh viên Quận 3",
      address: "789 Cách Mạng Tháng 8, P.11, Q.3",
      time: "09:00 - Thứ Hai, 01/09/2025",
      status: "completed",
      image: "https://placehold.co/120x90/E2E8F0/4A5568?text=Trọ"
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return (
          <span className="font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
            <i className="fas fa-check-circle"></i>Đã xác nhận
          </span>
        );
      case 'pending':
        return (
          <span className="font-semibold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs flex items-center gap-1.5">
            <i className="fas fa-clock"></i>Chờ xác nhận
          </span>
        );
      case 'completed':
        return (
          <span className="font-semibold bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs">
            Đã hoàn thành
          </span>
        );
      default:
        return null;
    }
  };

  const handleCancelAppointment = (appointment) => {
    setAppointmentToCancel(appointment);
    setShowCancelModal(true);
  };

  const handleConfirmCancel = () => {
    // Logic to cancel appointment
    console.log('Cancelling appointment:', appointmentToCancel);
    setShowCancelModal(false);
    setAppointmentToCancel(null);
  };

  const handleRebookAppointment = (appointment) => {
    setRebookProperty(appointment.title);
    setShowRebookModal(true);
  };

  const handleConfirmRebook = () => {
    // Logic to rebook appointment
    console.log('Rebooking appointment:', rebookProperty, rebookDate, rebookTime);
    alert('Yêu cầu đặt lại lịch hẹn đã được gửi thành công!');
    setShowRebookModal(false);
    setRebookProperty('');
    setRebookDate('');
    setRebookTime('');
  };

  const AppointmentCard = ({ appointment, isPast = false }) => (
    <div className={`appointment-card bg-white p-4 border rounded-lg shadow-sm flex flex-col sm:flex-row gap-4 items-start ${isPast ? 'opacity-70' : ''}`}>
      <Link to={`/room/${appointment.id}`} className="flex flex-col sm:flex-row gap-4 items-start flex-grow cursor-pointer group">
        <img 
          src={appointment.image} 
          className="w-full sm:w-32 h-32 sm:h-24 object-cover rounded-md flex-shrink-0" 
          alt="Phòng trọ"
        />
        <div className="flex-grow">
          <h3 className={`font-bold text-lg group-hover:text-blue-600 transition-colors ${isPast ? 'text-gray-600' : ''}`}>
            {appointment.title}
          </h3>
          <p className={`text-sm mt-1 ${isPast ? 'text-gray-500' : 'text-gray-600'}`}>
            <i className="fas fa-map-marker-alt w-4"></i> {appointment.address}
          </p>
          <p className={`text-sm font-semibold mt-2 ${isPast ? 'text-gray-500' : 'text-blue-600'}`}>
            <i className="fas fa-calendar-alt w-4"></i> {appointment.time}
          </p>
        </div>
      </Link>
      <div className="w-full sm:w-auto flex flex-row sm:flex-col items-center justify-between sm:justify-start gap-2 text-sm text-right flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0">
        {getStatusBadge(appointment.status)}
        {isPast ? (
          <button 
            onClick={() => handleRebookAppointment(appointment)}
            className="rebook-btn text-blue-500 font-semibold hover:underline mt-0 sm:mt-2 text-xs"
          >
            Đặt lại
          </button>
        ) : (
          <button 
            onClick={() => handleCancelAppointment(appointment)}
            className="cancel-btn text-red-500 font-semibold hover:underline mt-0 sm:mt-2 text-xs"
          >
            Hủy lịch
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header 
        createButtonText="Tạo tin đăng"
        user={{ avatar: "https://placehold.co/40x40/E2E8F0/4A5568?text=U" }}
      />
      
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <UserDashboardSidebar />
          <div className="lg:col-span-9">
        <h1 className="text-3xl font-bold mb-8">Lịch hẹn xem trọ</h1>
        
        <div className="bg-white rounded-lg shadow-md">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6 px-6">
              <button 
                onClick={() => setActiveTab('upcoming')}
                className={`font-medium whitespace-nowrap py-4 px-1 border-b-2 transition-colors ${
                  activeTab === 'upcoming' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-blue-600'
                }`}
              >
                Sắp tới
              </button>
              <button 
                onClick={() => setActiveTab('past')}
                className={`font-medium whitespace-nowrap py-4 px-1 border-b-2 transition-colors ${
                  activeTab === 'past' 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-blue-600'
                }`}
              >
                Đã qua
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="space-y-6">
              {activeTab === 'upcoming' ? (
                upcomingAppointments.map(appointment => (
                  <AppointmentCard key={appointment.id} appointment={appointment} />
                ))
              ) : (
                pastAppointments.map(appointment => (
                  <AppointmentCard key={appointment.id} appointment={appointment} isPast={true} />
                ))
              )}
            </div>
          </div>
        </div>
        </div>
        </div>
      </main>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm text-center p-6 transform scale-95 animate-in zoom-in-95">
            <h3 className="text-xl font-bold mb-2">Xác nhận hủy lịch hẹn</h3>
            <p className="text-gray-600 mb-6">Bạn có chắc chắn muốn hủy lịch hẹn này không?</p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setShowCancelModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Không
              </button>
              <button 
                onClick={handleConfirmCancel}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Hủy lịch
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Rebook Modal */}
      {showRebookModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 transform scale-95 animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Đặt lại lịch hẹn</h3>
              <button 
                onClick={() => setShowRebookModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl transition-colors"
              >
                &times;
              </button>
            </div>
            <p className="mb-2 text-sm text-gray-600">Bạn đang đặt lại lịch hẹn cho:</p>
            <p className="font-semibold text-blue-600 mb-6">{rebookProperty}</p>
            
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="rebook-date" className="block text-sm font-medium text-gray-700">Chọn ngày</label>
                  <input 
                    type="date" 
                    id="rebook-date" 
                    value={rebookDate}
                    onChange={(e) => setRebookDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  />
                </div>
                <div>
                  <label htmlFor="rebook-time" className="block text-sm font-medium text-gray-700">Chọn giờ</label>
                  <input 
                    type="time" 
                    id="rebook-time" 
                    value={rebookTime}
                    onChange={(e) => setRebookTime(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-4 mt-8">
                <button 
                  type="button" 
                  onClick={() => setShowRebookModal(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Hủy
                </button>
                <button 
                  type="button" 
                  onClick={handleConfirmRebook}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  Gửi yêu cầu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAppointmentManagement;
