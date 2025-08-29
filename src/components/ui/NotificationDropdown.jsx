import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NotificationItem = ({ 
  icon, 
  iconBgColor, 
  iconColor, 
  content, 
  timestamp, 
  isUnread = false,
  onClick,
  linkTo 
}) => {
  const contentElement = linkTo ? (
    <Link to={linkTo} className="block">
      <div className={`notification-item ${isUnread ? 'unread' : ''} cursor-pointer`}>
        <div className="flex items-start gap-4 p-4 sm:p-6">
          <div className={`w-12 h-12 rounded-full ${iconBgColor} flex-shrink-0 flex items-center justify-center`}>
            <i className={`${icon} text-2xl ${iconColor}`}></i>
          </div>
          <div className="flex-grow">
            <p className="text-gray-800">{content}</p>
            <p className={`text-sm font-semibold mt-1 ${isUnread ? 'text-blue-600' : 'text-gray-500'}`}>
              {timestamp}
            </p>
          </div>
          {isUnread && (
            <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
          )}
        </div>
      </div>
    </Link>
  ) : (
    <div 
      className={`notification-item ${isUnread ? 'unread' : ''} cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4 p-4 sm:p-6">
        <div className={`w-12 h-12 rounded-full ${iconBgColor} flex-shrink-0 flex items-center justify-center`}>
          <i className={`${icon} text-2xl ${iconColor}`}></i>
        </div>
        <div className="flex-grow">
          <p className="text-gray-800">{content}</p>
          <p className={`text-sm font-semibold mt-1 ${isUnread ? 'text-blue-600' : 'text-gray-500'}`}>
            {timestamp}
          </p>
        </div>
        {isUnread && (
          <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
        )}
      </div>
    </div>
  );

  return contentElement;
};

const NotificationDropdown = ({ 
  isOpen, 
  onClose, 
  onMarkAllAsRead,
  onNotificationClick 
}) => {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = {
    new: [
      {
        id: 1,
        icon: 'fa-solid fa-comment-dots',
        iconBgColor: 'bg-blue-100',
        iconColor: 'text-blue-500',
        content: (
          <span>
            <span className="font-bold">Chủ trọ: Anh Minh</span> đã trả lời tin nhắn của bạn: "Chào bạn, phòng vẫn còn nhé. Bạn muốn xem lúc nào?"
          </span>
        ),
        timestamp: '15 phút trước',
        isUnread: true,
        linkTo: '/messages'
      },
      {
        id: 2,
        icon: 'fa-solid fa-calendar-check',
        iconBgColor: 'bg-green-100',
        iconColor: 'text-green-500',
        content: (
          <span>
            Lịch hẹn xem <span className="font-bold">Phòng trọ gần ĐH Bách Khoa</span> của bạn đã được chấp nhận.
          </span>
        ),
        timestamp: '1 giờ trước',
        isUnread: true,
        linkTo: '/saved-listings'
      }
    ],
    earlier: [
      {
        id: 3,
        icon: 'fa-solid fa-tags',
        iconBgColor: 'bg-yellow-100',
        iconColor: 'text-yellow-500',
        content: (
          <span>
            <span className="font-bold">Căn hộ studio gần Cầu Rồng</span> mà bạn đã lưu vừa được cập nhật giá mới.
          </span>
        ),
        timestamp: 'Hôm qua',
        isUnread: false,
        linkTo: '/saved-listings'
      },
      {
        id: 4,
        icon: 'fa-solid fa-heart',
        iconBgColor: 'bg-pink-100',
        iconColor: 'text-pink-500',
        content: (
          <span>
            <span className="font-bold">Minh An</span> và <span className="font-bold">2 người khác</span> đã thích bài viết tìm người ở ghép của bạn.
          </span>
        ),
        timestamp: '2 ngày trước',
        isUnread: false,
        linkTo: '/roommate-finder'
      }
    ]
  };

  const allNotifications = [...notifications.new, ...notifications.earlier];
  const unreadNotifications = allNotifications.filter(n => n.isUnread);

  const filteredNotifications = activeTab === 'all' ? allNotifications : unreadNotifications;

  const handleNotificationClick = (notification) => {
    if (onNotificationClick) {
      onNotificationClick(notification);
    }
  };

  const handleMarkAllAsRead = () => {
    if (onMarkAllAsRead) {
      onMarkAllAsRead();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute top-full right-0 mt-2 w-80 md:w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
      style={{ maxHeight: 'calc(100vh - 80px)', minHeight: '400px', display: 'flex', flexDirection: 'column' }}
    >
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Thông báo</h1>
          <button 
            onClick={handleMarkAllAsRead}
            className="text-sm text-blue-600 hover:underline"
          >
            Đánh dấu tất cả là đã đọc
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Tất cả
          </button>
          <button 
            onClick={() => setActiveTab('unread')}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
              activeTab === 'unread' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Chưa đọc
          </button>
        </div>
      </div>
      
      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNotifications.length > 0 ? (
          <div>
            {/* New Notifications */}
            {notifications.new.filter(n => 
              activeTab === 'all' || (activeTab === 'unread' && n.isUnread)
            ).length > 0 && (
              <div>
                <h2 className="font-bold p-4 sm:px-6 text-gray-600">Mới</h2>
                <ul>
                  {notifications.new
                    .filter(n => activeTab === 'all' || (activeTab === 'unread' && n.isUnread))
                    .map((notification) => (
                    <li key={notification.id}>
                      <NotificationItem
                        {...notification}
                        onClick={() => handleNotificationClick(notification)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Earlier Notifications */}
            {notifications.earlier.filter(n => 
              activeTab === 'all' || (activeTab === 'unread' && n.isUnread)
            ).length > 0 && (
              <div>
                <h2 className="font-bold p-4 sm:px-6 text-gray-600">Trước đó</h2>
                <ul>
                  {notifications.earlier
                    .filter(n => activeTab === 'all' || (activeTab === 'unread' && n.isUnread))
                    .map((notification) => (
                    <li key={notification.id}>
                      <NotificationItem
                        {...notification}
                        onClick={() => handleNotificationClick(notification)}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="p-6 text-center text-gray-500">
            <i className="fa-regular fa-bell text-3xl mb-2"></i>
            <p>Không có thông báo nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDropdown;
