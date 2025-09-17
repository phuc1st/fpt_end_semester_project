import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';

const AdminReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('Mới');
  const [notes, setNotes] = useState('');

  const report = useMemo(() => ({
    id: id || 'RP175',
    reporter: 'user_123',
    reportedType: 'Tài khoản',
    reportedSubject: 'Tài khoản "Chủ trọ X"',
    dateTime: '12/09/2025 - 10:30',
    reason: '"Tài khoản này liên tục đăng tin lừa đảo, yêu cầu người thuê chuyển cọc trước khi xem phòng nhưng sau đó không liên lạc được. Đã có nhiều người bị lừa."',
  }), [id]);

  return (
    <AdminLayout title={`Chi tiết Báo cáo #${report.id}`}> 
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - details */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3 mb-4">Thông tin Báo cáo</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p className="text-gray-500">Người báo cáo:</p>
              <button onClick={() => navigate(`/admin/users/${report.reporter}`)} className="font-medium text-indigo-600 hover:underline text-left">{report.reporter}</button>

              <p className="text-gray-500">Ngày báo cáo:</p>
              <p className="font-medium text-gray-700">{report.dateTime}</p>

              <p className="text-gray-500">Loại báo cáo:</p>
              <p className="font-medium text-gray-700">{report.reportedType}</p>

              <p className="text-gray-500">Nội dung bị báo cáo:</p>
              <button onClick={() => navigate('/admin/users/chutrox')} className="font-medium text-indigo-600 hover:underline text-left">{report.reportedSubject}</button>
            </div>
            <div className="mt-4 border-t pt-4">
              <p className="text-gray-500 text-sm">Lý do báo cáo:</p>
              <p className="mt-1 text-gray-700">{report.reason}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Nội dung bị báo cáo (Xem trước)</h3>
            <div className="border p-4 rounded-lg bg-gray-50">
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src="https://i.pravatar.cc/150?u=chutrox" alt="Reported User Avatar" />
                <div>
                  <p className="font-bold text-gray-800">Chủ trọ X</p>
                  <p className="text-sm text-gray-500">@chutrox</p>
                </div>
                <button onClick={() => navigate('/admin/users/chutrox')} className="ml-auto px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200">Xem hồ sơ</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right - actions */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Xử lý Báo cáo</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Trạng thái</label>
                <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option className="text-red-600">Mới</option>
                  <option>Đang xử lý</option>
                  <option>Đã giải quyết</option>
                </select>
              </div>
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-700 mb-2">Hành động nhanh</h4>
                <div className="flex flex-col space-y-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-lg"><i className="fas fa-user-lock w-6"></i> Khóa tài khoản bị báo cáo</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-white bg-yellow-600 hover:bg-yellow-700 rounded-lg"><i className="fas fa-exclamation-triangle w-6"></i> Gửi cảnh cáo cho tài khoản</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg"><i className="fas fa-check w-6"></i> Bỏ qua (Báo cáo không hợp lệ)</button>
                </div>
              </div>
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Ghi chú nội bộ</label>
                <textarea id="notes" name="notes" rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Thêm ghi chú về quá trình xử lý..." />
              </div>
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700">
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReportDetail;




