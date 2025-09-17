import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const UserDashboardSidebar = () => {
  const location = useLocation();

  const items = [
    { id: 'appointments', path: '/user/appointments', icon: 'fa-calendar-check', label: 'Lịch hẹn xem trọ' },
    { id: 'contracts', path: '/user/contracts', icon: 'fa-file-contract', label: 'Hợp đồng thuê trọ' },
    { id: 'bills', path: '/user/bills', icon: 'fa-file-invoice', label: 'Hóa đơn thanh toán' },
    { id: 'rental', path: '/user/rental-history', icon: 'fa-house-user', label: 'Trọ đã/đang ở' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20 bg-white p-4 rounded-lg shadow-sm">
        <nav className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-3 py-2.5 font-semibold rounded-md transition-colors ${
                isActive(item.path) ? 'bg-primary-100 text-primary-700' : 'text-gray-700 hover:bg-gray-100'
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

export default UserDashboardSidebar;
