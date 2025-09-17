import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';

const AdminUsers = () => {
  const navigate = useNavigate();
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [lockModalOpen, setLockModalOpen] = useState(false);
  const [selectedUserName, setSelectedUserName] = useState('');
  const [selectedAction, setSelectedAction] = useState('lock'); // 'lock' | 'unlock'
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenuIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const users = [
    { id: 1, name: 'Nguyễn Văn 1', email: 'user1@email.com', role: 'Chủ Trọ', status: 'Đã xác thực', joined: '10/05/2024' },
    { id: 2, name: 'Nguyễn Văn 2', email: 'user2@email.com', role: 'Người Tìm Trọ', status: 'Đang hoạt động', joined: '12/06/2024' },
    { id: 3, name: 'Nguyễn Văn 3', email: 'user3@email.com', role: 'Chủ Trọ', status: 'Bị khóa', joined: '01/02/2024' }
  ];

  const handleViewDetail = (id) => {
    setOpenMenuIndex(null);
    navigate(`/admin/users/${id}`);
  };

  const handleToggleLock = (name, action) => {
    setSelectedUserName(name);
    setSelectedAction(action);
    setOpenMenuIndex(null);
    setLockModalOpen(true);
  };

  const closeModal = () => setLockModalOpen(false);

  return (
    <AdminLayout title="Quản lý Người dùng">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Tổng Người Dùng</p>
            <p className="text-3xl font-bold text-gray-800">1,257</p>
          </div>
          <div className="bg-indigo-100 p-3 rounded-full">
            <i className="fas fa-users text-2xl text-indigo-600"></i>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Chủ Trọ</p>
            <p className="text-3xl font-bold text-gray-800">421</p>
          </div>
          <div className="bg-green-100 p-3 rounded-full">
            <i className="fas fa-house-user text-2xl text-green-600"></i>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Người Tìm Trọ</p>
            <p className="text-3xl font-bold text-gray-800">836</p>
          </div>
          <div className="bg-blue-100 p-3 rounded-full">
            <i className="fas fa-user-check text-2xl text-blue-600"></i>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">Tài Khoản Bị Khóa</p>
            <p className="text-3xl font-bold text-gray-800">12</p>
          </div>
          <div className="bg-red-100 p-3 rounded-full">
            <i className="fas fa-user-slash text-2xl text-red-600"></i>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="relative w-full md:w-1/3 mb-2 md:mb-0">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <i className="fas fa-search text-gray-400"></i>
            </span>
            <input type="text" placeholder="Tìm theo tên, email, SĐT..." className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="flex items-center space-x-2">
            <select className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Lọc theo vai trò</option>
              <option>Chủ Trọ</option>
              <option>Người Tìm Trọ</option>
            </select>
            <select className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Lọc theo trạng thái</option>
              <option>Đang hoạt động</option>
              <option>Bị khóa</option>
              <option>Chờ xác thực</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Người dùng</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Vai trò</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                <th className="py-3 px-6 text-left font-medium text-gray-500 uppercase tracking-wider">Ngày tham gia</th>
                <th className="py-3 px-6 text-center font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {users.map((u, idx) => (
                <tr key={u.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center">
                      <img className="w-10 h-10 rounded-full mr-4" src={`https://i.pravatar.cc/150?u=user${u.id}`} alt="Avatar" />
                      <div>
                        <p className="font-semibold user-name">{u.name}</p>
                        <p className="text-sm text-gray-500">{u.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.role === 'Chủ Trọ' ? 'bg-green-100 text-green-800' : 'bg-indigo-100 text-indigo-800'}`}>{u.role}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.status === 'Bị khóa' ? 'bg-red-100 text-red-800' : u.status === 'Đang hoạt động' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{u.status}</span>
                  </td>
                  <td className="py-4 px-6">{u.joined}</td>
                  <td className="py-4 px-6 text-center relative">
                    <button
                      className="text-gray-500 hover:text-indigo-600 focus:outline-none action-button"
                      onClick={() => setOpenMenuIndex(openMenuIndex === idx ? null : idx)}
                    >
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    {openMenuIndex === idx && (
                      <div ref={menuRef} className="action-menu absolute right-10 z-10 w-44 bg-white rounded-md shadow-lg border text-left">
                        <button onClick={() => handleViewDetail(u.id)} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Xem chi tiết</button>
                        <button onClick={() => handleToggleLock(u.name, u.status === 'Bị khóa' ? 'unlock' : 'lock')} className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-gray-100">{u.status === 'Bị khóa' ? 'Mở khóa' : 'Khóa tài khoản'}</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-700">Hiển thị 1 đến 10 của 50 kết quả</span>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">Trước</button>
            <button className="px-3 py-1 border rounded-lg bg-indigo-500 text-white">1</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">2</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">3</button>
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-100">Sau</button>
          </div>
        </div>
      </div>
      {lockModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <i className="fas fa-exclamation-triangle text-red-600"></i>
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedAction === 'unlock' ? 'Xác nhận mở khóa tài khoản' : 'Xác nhận khóa tài khoản'}</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {selectedAction === 'unlock'
                      ? (<span>Bạn có chắc chắn muốn mở khóa tài khoản của người dùng <strong>{selectedUserName}</strong>? Hành động này sẽ cho phép tài khoản hoạt động trở lại.</span>)
                      : (<span>Bạn có chắc chắn muốn khóa tài khoản của người dùng <strong>{selectedUserName}</strong>? Hành động này không thể hoàn tác ngay lập tức.</span>)}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${selectedAction === 'unlock' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`}
                onClick={closeModal}
              >
                {selectedAction === 'unlock' ? 'Mở khóa tài khoản' : 'Khóa tài khoản'}
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm" onClick={closeModal}>
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminUsers;

