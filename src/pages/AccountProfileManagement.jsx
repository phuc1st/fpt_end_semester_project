import React, { useState } from 'react';
import { Header } from '../components/layout';

const navItems = [
  { id: 'profile', icon: 'fa-user-edit', label: 'Chỉnh sửa hồ sơ' },
  { id: 'security', icon: 'fa-shield-halved', label: 'Bảo mật' },
  { id: 'notifications', icon: 'fa-bell', label: 'Thông báo' },
];

const AccountProfileManagement = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    fullName: 'Văn Toàn',
    email: 'vantoan@email.com',
    phone: '0905123456',
    bio: '',
    avatar: 'https://placehold.co/96x96/E2E8F0/4A5568?text=V',
  });
  const [security, setSecurity] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [notificationSettings, setNotificationSettings] = useState({
    message: true,
    post: true,
    ai: false,
  });

  // Handlers
  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleSecurityChange = (e) => {
    setSecurity({ ...security, [e.target.name]: e.target.value });
  };
  const handleNotificationToggle = (key) => {
    setNotificationSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Panels
  const renderPanel = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div>
            <h2 className="text-xl font-bold border-b pb-4 mb-6">Hồ sơ cá nhân</h2>
            <div className="flex items-center gap-6 mb-8">
              <img src={profile.avatar} alt="User Avatar" className="w-24 h-24 rounded-full" />
              <div>
                <button className="bg-primary hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg text-sm">Tải ảnh mới</button>
                <p className="text-xs text-gray-500 mt-2">Chấp nhận ảnh JPG, PNG. Kích thước tối đa 5MB.</p>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleProfileChange}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Giới thiệu ngắn</label>
                <textarea
                  name="bio"
                  rows={3}
                  value={profile.bio}
                  onChange={handleProfileChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Hãy chia sẻ một chút về bạn..."
                />
              </div>
              <div className="text-right pt-4">
                <button type="submit" className="bg-primary hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg">Lưu thay đổi</button>
              </div>
            </form>
          </div>
        );
      case 'security':
        return (
          <div>
            <h2 className="text-xl font-bold border-b pb-4 mb-6">Bảo mật & Mật khẩu</h2>
            <form className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm font-medium text-gray-700">Mật khẩu hiện tại</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={security.currentPassword}
                  onChange={handleSecurityChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Mật khẩu mới</label>
                <input
                  type="password"
                  name="newPassword"
                  value={security.newPassword}
                  onChange={handleSecurityChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Xác nhận mật khẩu mới</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={security.confirmPassword}
                  onChange={handleSecurityChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="text-right pt-4">
                <button type="submit" className="bg-primary hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg">Cập nhật mật khẩu</button>
              </div>
            </form>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2 className="text-xl font-bold border-b pb-4 mb-6">Cài đặt thông báo</h2>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Tin nhắn mới</p>
                  <p className="text-sm text-gray-500">Nhận thông báo khi có người nhắn tin cho bạn.</p>
                </div>
                <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    checked={notificationSettings.message}
                    onChange={() => handleNotificationToggle('message')}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Tương tác bài viết</p>
                  <p className="text-sm text-gray-500">Khi có người thích hoặc bình luận bài viết của bạn.</p>
                </div>
                <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    checked={notificationSettings.post}
                    onChange={() => handleNotificationToggle('post')}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
                </label>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Gợi ý từ AI</p>
                  <p className="text-sm text-gray-500">Nhận gợi ý phòng trọ hoặc bạn ở ghép phù hợp.</p>
                </div>
                <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    checked={notificationSettings.ai}
                    onChange={() => handleNotificationToggle('ai')}
                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                  />
                  <span className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></span>
                </label>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={{ avatar: profile.avatar }} />
      <main className="container mx-auto px-4 pt-8 pb-12">
        <h1 className="text-3xl font-bold mb-6">Cài đặt tài khoản</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <nav className="space-y-1">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`settings-nav-link flex items-center gap-3 px-3 py-2.5 rounded-md w-full text-left transition-colors ${
                      activeTab === item.id
                        ? 'active bg-primary-50 text-primary font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <i className={`fa-solid ${item.icon} w-6 text-center text-lg`}></i>
                    <span>{item.label}</span>
                  </button>
                ))}
                <div className="border-t my-2"></div>
                <button className="settings-nav-link flex items-center gap-3 px-3 py-2.5 rounded-md w-full text-left text-red-600 hover:bg-red-50">
                  <i className="fa-solid fa-arrow-right-from-bracket w-6 text-center text-lg"></i>
                  <span>Đăng xuất</span>
                </button>
              </nav>
            </div>
          </aside>
          {/* Main Content */}
          <div className="md:col-span-9">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              {renderPanel()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountProfileManagement;
