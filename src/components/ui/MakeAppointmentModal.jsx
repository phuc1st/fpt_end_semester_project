import React, { useState } from 'react';

const timeSlots = [
  { id: 'morning', label: 'Sáng', time: '8:00 - 12:00' },
  { id: 'afternoon', label: 'Chiều', time: '13:00 - 17:00' },
  { id: 'evening', label: 'Tối', time: '18:00 - 20:00' },
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const MakeAppointmentModal = ({ open, onClose, onSuccess }) => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(now.getMonth());
  const [calendarYear, setCalendarYear] = useState(now.getFullYear());

  if (!open) return null;

  // Calendar logic
  const daysOfWeek = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  const monthNames = [
    'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'
  ];
  const daysInMonth = getDaysInMonth(calendarYear, calendarMonth);
  const firstDay = new Date(calendarYear, calendarMonth, 1).getDay();
  const today = new Date();

  const isPast = (day) => {
    if (calendarYear < today.getFullYear()) return true;
    if (calendarYear === today.getFullYear() && calendarMonth < today.getMonth()) return true;
    if (calendarYear === today.getFullYear() && calendarMonth === today.getMonth() && day < today.getDate()) return true;
    return false;
  };

  const handleDateClick = (day) => {
    if (isPast(day)) return;
    setSelectedDate(new Date(calendarYear, calendarMonth, day));
  };

  const handlePrevMonth = () => {
    if (calendarMonth === 0) {
      setCalendarMonth(11);
      setCalendarYear(calendarYear - 1);
    } else {
      setCalendarMonth(calendarMonth - 1);
    }
  };
  const handleNextMonth = () => {
    if (calendarMonth === 11) {
      setCalendarMonth(0);
      setCalendarYear(calendarYear + 1);
    } else {
      setCalendarMonth(calendarMonth + 1);
    }
  };

  const handleSend = () => {
    if (!selectedDate || !selectedTime) {
      alert('Vui lòng chọn ngày và khung giờ xem phòng.');
      return;
    }
    setSuccess(true);
    if (onSuccess) onSuccess({ date: selectedDate, time: selectedTime, message });
  };

  const handleClose = () => {
    setSuccess(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setMessage('');
    if (onClose) onClose();
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
      <div className="modal-content relative bg-white rounded-lg shadow-xl w-full max-w-lg transform scale-100 opacity-100 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-5 border-b flex-shrink-0">
          <h3 className="text-xl font-bold">Đặt lịch xem phòng</h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
        </div>
        {!success ? (
          <div className="p-6 overflow-y-auto flex-1">
            {/* Calendar */}
            <div>
              <h4 className="font-semibold mb-3">1. Chọn ngày xem phòng</h4>
              <div className="select-none">
                <div className="flex justify-between items-center mb-3">
                  <button onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-800"><i className="fa-solid fa-chevron-left"></i></button>
                  <h5 className="font-bold">{monthNames[calendarMonth]} {calendarYear}</h5>
                  <button onClick={handleNextMonth} className="text-gray-500 hover:text-gray-800"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-500 font-medium">
                  {daysOfWeek.map((day, idx) => <div key={idx}>{day}</div>)}
                </div>
                <div className="grid grid-cols-7 gap-1 mt-2">
                  {Array.from({ length: firstDay }).map((_, i) => <div key={i}></div>)}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const selected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === calendarMonth && selectedDate.getFullYear() === calendarYear;
                    const isToday = day === today.getDate() && calendarMonth === today.getMonth() && calendarYear === today.getFullYear();
                    return (
                      <div
                        key={day}
                        className={`calendar-day w-10 h-10 flex items-center justify-center rounded-full cursor-pointer transition-all ${
                          isPast(day) ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-blue-100'
                        } ${selected ? 'selected bg-blue-600 text-white font-bold' : ''} ${
                          isToday && !selected ? 'bg-blue-100 text-blue-600 font-bold' : ''
                        }`}
                        onClick={() => handleDateClick(day)}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Time Slots */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">2. Chọn khung giờ</h4>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map(slot => (
                  <button
                    key={slot.id}
                    className={`time-slot border rounded-lg p-3 text-center hover:bg-gray-100 transition-all ${
                      selectedTime === slot.id ? 'selected bg-blue-100 border-blue-600 text-blue-700 font-semibold' : ''
                    }`}
                    onClick={() => setSelectedTime(slot.id)}
                  >
                    <p className="font-semibold">{slot.label}</p>
                    <p className="text-xs text-gray-500">{slot.time}</p>
                  </button>
                ))}
              </div>
            </div>
            {/* Message */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">3. Lời nhắn cho chủ trọ (tùy chọn)</h4>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows={2}
                placeholder="Ví dụ: Mình muốn đến xem phòng cùng một người bạn..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
        ) : (
          <div className="p-8 text-center overflow-y-auto flex-1">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <i className="fa-solid fa-check text-4xl text-green-500"></i>
            </div>
            <h3 className="text-2xl font-bold mt-6">Gửi yêu cầu thành công!</h3>
            <p className="text-gray-600 mt-2">Chủ trọ sẽ sớm phản hồi yêu cầu của bạn. Vui lòng kiểm tra thông báo và tin nhắn nhé.</p>
          </div>
        )}
        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t flex justify-end flex-shrink-0">
          {!success ? (
            <button
              onClick={handleSend}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg"
            >
              Gửi yêu cầu
            </button>
          ) : (
            <button
              onClick={handleClose}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg"
            >
              Đóng
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeAppointmentModal;
