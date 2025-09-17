import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdminLayout from '../components/layout/AdminLayout';

const TabLink = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`${active ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
  >
    {children}
  </button>
);

const AdminUserDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('listings');
  const [modalOpen, setModalOpen] = useState(false);
  const [action, setAction] = useState('lock');

  const user = useMemo(() => ({
    id,
    fullName: 'Nguyễn Văn An',
    username: 'nguyenvanan',
    email: 'an.nguyen@email.com',
    phone: '0987 654 321',
    joined: '10/05/2024',
    role: 'Chủ Trọ',
    verified: true,
    status: 'Đã xác thực CCCD'
  }), [id]);

  const listings = [
    { id: 1, title: 'Cho thuê phòng trọ full nội thất Quận 1', date: '11/09/2025', status: 'Đang hoạt động' },
    { id: 2, title: 'Nhà nguyên căn 3 lầu Hẻm XH Bùi Viện', date: '05/08/2025', status: 'Đang hoạt động' },
    { id: 3, title: 'Căn hộ mini mới xây gần Bitexco', date: '01/06/2025', status: 'Đã hết hạn' },
  ];

  const reviews = [
    { id: 1, author: 'Trần Thị Bình', date: '10/09/2025', rating: 4, text: 'Chủ trọ thân thiện, phòng sạch sẽ. Sẽ giới thiệu cho bạn bè.' },
    { id: 2, author: 'Phạm Hùng', date: '01/09/2025', rating: 5, text: 'Rất tuyệt vời, chủ nhà hỗ trợ nhiệt tình.' },
  ];

  const activities = [
    { id: 1, icon: 'fa-sign-in-alt', color: 'bg-blue-500', text: 'Đã đăng nhập vào hệ thống', time: '12/09/2025 08:30' },
    { id: 2, icon: 'fa-plus', color: 'bg-green-500', text: 'Đã đăng tin mới: "Cho thuê phòng trọ full nội thất Quận 1"', time: '11/09/2025 15:00' },
    { id: 3, icon: 'fa-edit', color: 'bg-yellow-500', text: 'Cập nhật thông tin cá nhân', time: '10/09/2025 10:20' },
  ];

  const openModal = (nextAction) => { setAction(nextAction); setModalOpen(true); };
  const closeModal = () => setModalOpen(false);

  return (
    <AdminLayout title="Chi tiết Người dùng">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img className="w-24 h-24 rounded-full mx-auto mb-4" src={`https://i.pravatar.cc/150?u=user${id}`} alt="User Avatar" />
            <h2 className="text-xl font-bold">{user.fullName}</h2>
            <p className="text-gray-500">@{user.username}</p>
            <span className="mt-2 inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
              <i className="fas fa-house-user mr-2"></i>{user.role}
            </span>
            <div className="mt-4 text-left space-y-2">
              <p><i className="fas fa-envelope text-gray-400 w-6"></i> {user.email}</p>
              <p><i className="fas fa-phone text-gray-400 w-6"></i> {user.phone}</p>
              <p><i className="fas fa-calendar-alt text-gray-400 w-6"></i> Tham gia: {user.joined}</p>
              <p><i className="fas fa-check-circle text-blue-500 w-6"></i> Trạng thái: {user.status}</p>
            </div>
            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold text-gray-700 mb-2">Hành động</h3>
              <div className="flex flex-col space-y-2">
                <button onClick={() => openModal('lock')} className="w-full text-left px-4 py-2 text-sm text-white bg-red-600 hover:bg-red-700 rounded-lg"><i className="fas fa-user-lock w-6"></i> Khóa tài khoản</button>
                <button className="w-full text-left px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg"><i className="fas fa-shield-alt w-6"></i> Gỡ xác thực</button>
                <button className="w-full text-left px-4 py-2 text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-lg"><i className="fas fa-paper-plane w-6"></i> Gửi thông báo</button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <TabLink active={activeTab==='listings'} onClick={() => setActiveTab('listings')}>Tin đã đăng ({listings.length})</TabLink>
                <TabLink active={activeTab==='reviews'} onClick={() => setActiveTab('reviews')}>Đánh giá đã nhận ({reviews.length})</TabLink>
                <TabLink active={activeTab==='activity'} onClick={() => setActiveTab('activity')}>Lịch sử hoạt động</TabLink>
              </nav>
            </div>

            <div className="mt-4">
              {activeTab === 'listings' && (
                <ul className="space-y-4">
                  {listings.map(item => (
                    <li key={item.id} className="p-4 border rounded-lg flex items-center justify-between hover:bg-gray-50">
                      <div>
                        <p className="font-semibold text-gray-800">{item.title}</p>
                        <p className="text-sm text-gray-500">Ngày đăng: {item.date} - <span className={`font-medium ${item.status === 'Đã hết hạn' ? 'text-red-600' : 'text-green-600'}`}>{item.status}</span></p>
                      </div>
                      <button className="text-indigo-600 hover:underline text-sm font-medium">Xem tin <i className="fas fa-arrow-right ml-1"></i></button>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'reviews' && (
                <ul className="space-y-4">
                  {reviews.map(r => (
                    <li key={r.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold">{r.author}</p>
                        <span className="text-sm text-gray-500">{r.date}</span>
                      </div>
                      <div className="flex items-center mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <i key={i} className={`${i < r.rating ? 'fas' : 'far'} fa-star text-yellow-400`}></i>
                        ))}
                        <span className="ml-2 text-sm font-medium">{r.rating.toFixed(1)}/5.0</span>
                      </div>
                      <p className="mt-2 text-gray-600">"{r.text}"</p>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === 'activity' && (
                <ul className="space-y-4">
                  {activities.map(a => (
                    <li key={a.id} className="flex items-center">
                      <div className={`${a.color} h-8 w-8 rounded-full flex items-center justify-center text-white mr-4`}><i className={`fas ${a.icon}`}></i></div>
                      <p className="text-gray-600">{a.text} - <span className="text-sm text-gray-500">{a.time}</span></p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <i className="fas fa-exclamation-triangle text-red-600"></i>
              </div>
              <div className="ml-4 text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">{action === 'unlock' ? 'Xác nhận mở khóa tài khoản' : 'Xác nhận khóa tài khoản'}</h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {action === 'unlock' ? 'Bạn có chắc chắn muốn mở khóa tài khoản?' : 'Bạn có chắc chắn muốn khóa tài khoản? Hành động này không thể hoàn tác ngay lập tức.'}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button type="button" className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none sm:ml-3 sm:w-auto sm:text-sm ${action === 'unlock' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}`} onClick={closeModal}>
                {action === 'unlock' ? 'Mở khóa tài khoản' : 'Khóa tài khoản'}
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

export default AdminUserDetail;




