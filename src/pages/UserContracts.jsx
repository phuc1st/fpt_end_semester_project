import React from 'react';
import Header from '../components/layout/Header';
import UserDashboardSidebar from '../components/layout/UserDashboardSidebar';

const ContractCard = ({ title, room, landlord, period, rent, deposit }) => (
  <div className="bg-white rounded-lg shadow-sm p-5">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">Trọ: {room}</p>
    <p className="text-sm text-gray-600">Chủ trọ: {landlord}</p>
    <p className="text-sm text-gray-600">Thời hạn: {period}</p>
    <p className="text-sm text-gray-600">Giá thuê: {rent}</p>
    <p className="text-sm text-gray-600 mb-3">Tiền cọc: {deposit}</p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 text-sm flex items-center gap-2">
      <i className="fas fa-download"></i>
      Tải hợp đồng (PDF)
    </button>
  </div>
);

const UserContracts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={{ avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=U' }} createButtonText="Tạo bài viết" />

      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <UserDashboardSidebar />
          <div className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContractCard
              title="Hợp đồng hiện tại"
              room="Phòng 101-gần ĐH Bách khoa"
              landlord="Anh Pu"
              period="01/07/2025 - 01/01/2026"
              rent="3.000.000 VND/tháng"
              deposit="3.000.000 VND/tháng"
            />
            <ContractCard
              title="Hợp đồng trọ đã ở"
              room="Phòng 101-gần ĐH FPT"
              landlord="Anh Pu"
              period="01/07/2025 - 01/01/2026"
              rent="3.000.000 VND/tháng"
              deposit="3.000.000 VND/tháng"
            />
          </div>
        </div>
        </div>
      </main>
    </div>
  );
};

export default UserContracts;
