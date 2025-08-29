import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: '🏠' },
    { path: '/search', label: 'Tìm kiếm', icon: '🔍' },
    { path: '/roommate-finder', label: 'Tìm bạn ở ghép', icon: '👥' },
    { path: '/saved-listings', label: 'Tin đã lưu', icon: '❤️' },
    { path: '/messages', label: 'Tin nhắn', icon: '💬' },
    { path: '/profile', label: 'Hồ sơ', icon: '👤' },
    { path: '/landlord', label: 'Quản lý', icon: '⚙️' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
              isActive(item.path)
                ? 'text-primary bg-blue-50'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            <span className="text-lg mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
