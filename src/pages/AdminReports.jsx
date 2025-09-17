import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';

const StatCard = ({ label, value, icon, color }) => (
  <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className={`text-3xl font-bold ${color}`}>{value}</p>
    </div>
    <div className={`p-3 rounded-full ${color.includes('red') ? 'bg-red-100' : color.includes('yellow') ? 'bg-yellow-100' : color.includes('green') ? 'bg-green-100' : 'bg-gray-100'}`}>
      <i className={`fas ${icon} text-2xl ${color.replace('text-', '')}`}></i>
    </div>
  </div>
);

const statusBadge = (status) => {
  if (status === 'Mới') return 'bg-red-100 text-red-800';
  if (status === 'Đang xử lý') return 'bg-yellow-100 text-yellow-800';
  return 'bg-green-100 text-green-800';
};

const typeBadge = (type) => {
  if (type === 'Tài khoản') return 'bg-red-100 text-red-800';
  if (type === 'Tin đăng') return 'bg-yellow-100 text-yellow-800';
  return 'bg-blue-100 text-blue-800';
};

const AdminReports = () => {
  const navigate = useNavigate();

  const reports = [
    { id: 'RP175', subject: 'Tài khoản "Chủ trọ X"', type: 'Tài khoản', reporter: 'user_123', date: '12/09/2025', status: 'Mới' },
    { id: 'RP174', subject: 'Tin đăng ID #5678', type: 'Tin đăng', reporter: 'user_456', date: '12/09/2025', status: 'Đang xử lý' },
    { id: 'RP173', subject: 'Đánh giá của "user_789"', type: 'Đánh giá', reporter: 'user_101', date: '11/09/2025', status: 'Đã giải quyết' },
  ];

  return (
    <AdminLayout title="Báo cáo & Khiếu nại">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard label="Báo cáo mới" value="8" icon="fa-flag" color="text-red-600" />
        <StatCard label="Đang xử lý" value="12" icon="fa-hourglass-half" color="text-yellow-600" />
        <StatCard label="Đã giải quyết" value="156" icon="fa-check-circle" color="text-green-600" />
        <StatCard label="Tổng số báo cáo" value="176" icon="fa-archive" color="text-gray-800" />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="relative w-full md:w-1/3 mb-2 md:mb-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-search text-gray-400"></i>
            </span>
            <input type="text" placeholder="Tìm theo ID, nội dung, người báo cáo..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="flex items-center space-x-2">
            <select className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Loại: Tất cả</option>
              <option>Tài khoản</option>
              <option>Tin đăng</option>
              <option>Đánh giá</option>
            </select>
            <select className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Trạng thái: Tất cả</option>
              <option>Mới</option>
              <option>Đang xử lý</option>
              <option>Đã giải quyết</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Nội dung bị báo cáo</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Loại</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Người báo cáo</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Ngày báo cáo</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="py-3 px-6 text-center font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {reports.map((r) => (
                <tr key={r.id} className={`border-b hover:bg-gray-50 ${r.id === 'RP175' ? 'font-semibold text-gray-900' : ''}`}>
                  <td className="py-4 px-6">#{r.id}</td>
                  <td className="py-4 px-6">
                    <button onClick={() => navigate(`/admin/reports/${r.id}`)} className="text-indigo-600 hover:underline">
                      {r.subject}
                    </button>
                  </td>
                  <td className="py-4 px-6"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${typeBadge(r.type)}`}>{r.type}</span></td>
                  <td className="py-4 px-6">
                    <button onClick={() => navigate(`/admin/users/${r.reporter}`)} className="text-indigo-600 hover:underline">{r.reporter}</button>
                  </td>
                  <td className="py-4 px-6">{r.date}</td>
                  <td className="py-4 px-6"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusBadge(r.status)}`}>{r.status}</span></td>
                  <td className="py-4 px-6 text-center">
                    {r.status === 'Mới' ? (
                      <button onClick={() => navigate(`/admin/reports/${r.id}`)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">Xử lý ngay</button>
                    ) : (
                      <button onClick={() => navigate(`/admin/reports/${r.id}`)} className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm">Xem chi tiết</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-700">Hiển thị 1 đến 10 của 176 kết quả</span>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">Trước</button>
            <button className="px-3 py-1 border rounded-lg bg-indigo-500 text-white">1</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">...</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">18</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">Sau</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReports;




