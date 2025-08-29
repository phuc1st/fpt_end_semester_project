import React from 'react';

const AppointmentCard = ({ 
  appointment,
  onConfirm,
  onReject,
  onReschedule
}) => {
  const getStatusConfig = (status) => {
    const configs = {
      'pending': {
        text: 'Đang chờ xử lý',
        classes: 'text-yellow-600'
      },
      'confirmed': {
        text: 'Đã xác nhận',
        classes: 'text-green-600'
      },
      'rejected': {
        text: 'Đã từ chối',
        classes: 'text-red-600'
      },
      'cancelled': {
        text: 'Đã hủy',
        classes: 'text-gray-600'
      }
    };
    return configs[status] || configs['pending'];
  };

  const statusConfig = getStatusConfig(appointment.status);

  const renderActionButtons = () => {
    switch (appointment.status) {
      case 'pending':
        return (
          <div className="flex gap-2 flex-shrink-0 flex-wrap">
            <button 
              onClick={() => onReject && onReject(appointment.id)}
              className="bg-red-100 text-red-700 hover:bg-red-200 font-semibold px-3 md:px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Từ chối
            </button>
            <button 
              onClick={() => onReschedule && onReschedule(appointment.id)}
              className="bg-blue-100 text-blue-700 hover:bg-blue-200 font-semibold px-3 md:px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Đề xuất giờ khác
            </button>
            <button 
              onClick={() => onConfirm && onConfirm(appointment.id)}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 md:px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Xác nhận
            </button>
          </div>
        );
      
      case 'confirmed':
        return (
          <div className="flex gap-2 flex-shrink-0 flex-wrap">
            <button 
              onClick={() => onReschedule && onReschedule(appointment.id)}
              className="bg-gray-200 hover:bg-gray-300 font-semibold px-3 md:px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Đổi lịch
            </button>
            <button 
              className="bg-primary hover:bg-primary-700 text-white font-semibold px-3 md:px-4 py-2 rounded-lg text-sm transition-colors"
            >
              Nhắn tin
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="appointment-card bg-white rounded-lg shadow-sm p-4 md:p-5 transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <img 
            src={appointment.tenant.avatar} 
            alt={appointment.tenant.name} 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full"
          />
          <div>
            <p className="font-bold text-sm md:text-base">{appointment.tenant.name}</p>
            <p className="text-xs md:text-sm text-gray-600">
              Muốn xem: <span className="font-semibold text-gray-800">{appointment.property.title}</span>
            </p>
          </div>
        </div>
        <div className="mt-3 sm:mt-0 text-left sm:text-right">
          <div className="flex items-center gap-2 mb-2">
            <i className="fa-solid fa-calendar text-gray-500"></i>
            <span className="text-sm font-medium">{appointment.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-clock text-gray-500"></i>
            <span className="text-sm font-medium">{appointment.time}</span>
          </div>
        </div>
      </div>

      {/* Status and Message */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${statusConfig.classes}`}>
              {statusConfig.text}
            </span>
          </div>
          {appointment.message && (
            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              "{appointment.message}"
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        {renderActionButtons()}
      </div>
    </div>
  );
};

export default AppointmentCard;