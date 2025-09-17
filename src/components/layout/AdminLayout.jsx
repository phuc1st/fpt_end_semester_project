import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminLayout = ({ title, children }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-md flex-shrink-0">
        <div className="p-6 text-2xl font-bold text-indigo-600">FindZ.Admin</div>
        <nav className="mt-10">
          <Link to="/admin" className={`flex items-center px-6 py-3 ${isActive('/admin') && !isActive('/admin/users') && !isActive('/admin/listings') && !isActive('/admin/reviews') && !isActive('/admin/reports') && !isActive('/admin/analytics') && !isActive('/admin/settings') ? 'text-white bg-indigo-500' : 'text-gray-600 hover:bg-gray-200'}`}>
            <i className="fas fa-tachometer-alt mr-3 w-6 text-center"></i> Bảng điều khiển
          </Link>
          <Link to="/admin/users" className={`flex items-center px-6 py-3 ${isActive('/admin/users') ? 'text-white bg-indigo-500' : 'text-gray-600 hover:bg-gray-200'}`}>
            <i className="fas fa-users mr-3 w-6 text-center"></i> Quản lý Người dùng
          </Link>
          <Link to="/admin/listings" className={`flex items-center px-6 py-3 ${isActive('/admin/listings') ? 'text-white bg-indigo-500' : 'text-gray-600 hover:bg-gray-200'}`}>
            <i className="fas fa-newspaper mr-3 w-6 text-center"></i> Quản lý Tin đăng
          </Link>
          <Link to="/admin/reviews" className={`flex items-center px-6 py-3 ${isActive('/admin/reviews') ? 'text-white bg-indigo-500' : 'text-gray-600 hover:bg-gray-200'}`}>
            <i className="fas fa-star mr-3 w-6 text-center"></i> Quản lý Đánh giá
          </Link>
          <Link to="/admin/reports" className={`flex items-center px-6 py-3 ${isActive('/admin/reports') ? 'text-white bg-indigo-500' : 'text-gray-600 hover:bg-gray-200'}`}>
            <i className="fas fa-flag mr-3 w-6 text-center"></i> Báo cáo & Khiếu nại
          </Link>
          <Link to="/admin/analytics" className={`flex items-center px-6 py-3 ${isActive('/admin/analytics') ? 'text-white bg-indigo-500' : 'text-gray-600 hover:bg-gray-200'}`}>
            <i className="fas fa-chart-line mr-3 w-6 text-center"></i> Phân tích & Thống kê
          </Link>
          <Link to="/admin/settings" className={`flex items-center px-6 py-3 ${isActive('/admin/settings') ? 'text-white bg-indigo-500' : 'text-gray-600 hover:bg-gray-200'}`}>
            <i className="fas fa-cog mr-3 w-6 text-center"></i> Cài đặt
          </Link>
          <Link to="/auth" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-200 mt-auto">
            <i className="fas fa-sign-out-alt mr-3 w-6 text-center"></i> Đăng xuất
          </Link>
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center p-4 bg-white border-b">
          <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
          <div className="flex items-center">
            <i className="fas fa-bell text-gray-600 text-lg mr-6 cursor-pointer"></i>
            <div className="flex items-center">
              <img className="w-10 h-10 rounded-full mr-3" src="https://i.pravatar.cc/150?u=admin" alt="Admin Avatar" />
              <div>
                <p className="font-semibold">Admin</p>
                <p className="text-sm text-gray-500">Quản trị viên hệ thống</p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

