import React from 'react';

const DashboardSidebar = ({ activeTab = 'dashboard', onTabChange }) => {
  const menuItems = [
    {
      id: 'dashboard',
      icon: 'fa-chart-line',
      label: 'Bảng điều khiển'
    },
    {
      id: 'listings',
      icon: 'fa-list-check',
      label: 'Quản lý tin đăng'
    },
    {
      id: 'appointments',
      icon: 'fa-calendar-check',
      label: 'Lịch hẹn'
    },
    {
      id: 'revenue',
      icon: 'fa-wallet',
      label: 'Doanh thu'
    },
    {
      id: 'reviews',
      icon: 'fa-star',
      label: 'Đánh giá'
    }
  ];

  const handleTabClick = (tabId) => {
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20 bg-white p-4 rounded-lg shadow-sm">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 font-semibold rounded-md transition-colors ${
                activeTab === item.id
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-6 text-center text-lg`}></i>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;