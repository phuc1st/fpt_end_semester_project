import React, { useState, useEffect, useRef } from 'react';
import { NotificationDropdown } from '../ui';

const Header = ({ 
  searchValue = "", 
  activeTab = "home", 
  onCreatePost,
  user,
  createButtonText = "Tạo bài viết"
}) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2); // Sample unread count
  const notificationRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNotificationToggle = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleNotificationClick = (notification) => {
    console.log('Notification clicked:', notification);
    // Handle notification click - navigate to relevant page
    setIsNotificationOpen(false);
  };

  const handleMarkAllAsRead = () => {
    setUnreadCount(0);
    console.log('Mark all notifications as read');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 flex justify-between items-center h-14">
        {/* Left Section */}
        <div className="flex items-center space-x-2 flex-1 lg:flex-none">
          <a href="#" className="text-xl md:text-2xl font-bold text-primary">TìmTrọ</a>
          <div className="relative hidden md:block">
            <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-3 -translate-y-1/2 text-gray-500"></i>
            <input 
              type="text" 
              placeholder="Tìm kiếm trên TìmTrọ" 
              defaultValue={searchValue}
              className="bg-gray-100 rounded-full py-2 pl-9 pr-4 w-48 lg:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        
        {/* Center Section - Main Nav */}
        <div className="hidden lg:flex items-center space-x-2">
          <a 
            href="#" 
            className={`w-28 h-12 flex items-center justify-center ${
              activeTab === 'home' 
                ? 'border-b-4 border-primary' 
                : 'rounded-lg hover:bg-gray-100'
            }`}
            title="Trang chủ"
          >
            <i className={`fa-solid fa-house text-2xl ${
              activeTab === 'home' ? 'text-primary' : 'text-gray-600'
            }`}></i>
          </a>
          <a 
            href="#" 
            className={`w-28 h-12 flex items-center justify-center ${
              activeTab === 'roommate' 
                ? 'border-b-4 border-primary' 
                : 'rounded-lg hover:bg-gray-100'
            }`}
            title="Bạn ở ghép"
          >
            <i className={`fa-solid fa-users text-2xl ${
              activeTab === 'roommate' ? 'text-primary' : 'text-gray-600'
            }`}></i>
          </a>
          <a 
            href="#" 
            className="w-28 h-12 flex items-center justify-center rounded-lg hover:bg-gray-100" 
            title="Tin nhắn"
          >
            <i className="fa-solid fa-comments text-2xl text-gray-600"></i>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-1 md:space-x-2">
          <button 
            onClick={onCreatePost}
            className="bg-primary hover:bg-primary-700 text-white font-semibold px-3 md:px-4 py-2 rounded-full flex items-center gap-2"
          >
            <i className="fa-solid fa-plus"></i>
            <span className="hidden sm:block">{createButtonText}</span>
          </button>
          
          {/* Notification Button with Badge */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={handleNotificationToggle}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 relative" 
              title="Thông báo"
            >
              <i className="fa-solid fa-bell text-sm md:text-base"></i>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            
            {/* Notification Dropdown */}
            <NotificationDropdown
              isOpen={isNotificationOpen}
              onClose={() => setIsNotificationOpen(false)}
              onMarkAllAsRead={handleMarkAllAsRead}
              onNotificationClick={handleNotificationClick}
            />
          </div>
          
          <img 
            src={user?.avatar || "https://placehold.co/40x40/E2E8F0/4A5568?text=V"} 
            alt="User Avatar" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;