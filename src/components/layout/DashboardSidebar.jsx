import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      id: 'dashboard',
      path: '/landlord',
      icon: 'fa-chart-line',
      label: 'Bảng điều khiển'
    },
    {
      id: 'listings',
      path: '/landlord/listings',
      icon: 'fa-list-check',
      label: 'Quản lý tin đăng'
    },
    {
      id: 'appointments',
      path: '/landlord/appointments',
      icon: 'fa-calendar-check',
      label: 'Lịch hẹn'
    },
    {
      id: 'revenue',
      path: '/landlord/revenue',
      icon: 'fa-wallet',
      label: 'Doanh thu'
    },
    {
      id: 'contracts',
      path: '/landlord/contracts',
      icon: 'fa-file-contract',
      label: 'Hợp đồng'
    },
    {
      id: 'reviews',
      path: '/landlord/assessments',
      icon: 'fa-star',
      label: 'Đánh giá'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20 bg-white p-4 rounded-lg shadow-sm">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-3 py-2.5 font-semibold rounded-md transition-colors ${
                isActive(item.path)
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-6 text-center text-lg`}></i>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;