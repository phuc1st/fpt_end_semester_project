import React, { useMemo, useState } from 'react';
import Header from '../components/layout/Header';
import UserDashboardSidebar from '../components/layout/UserDashboardSidebar';

const UserBills = () => {
  const [showPayModal, setShowPayModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);

  const bills = useMemo(() => ([
    { id: 1, date: '2024-09-01', type: 'Tiền nhà', amount: 8000000, status: 'unpaid' },
    { id: 2, date: '2024-09-01', type: 'Tiền điện', amount: 300000, status: 'paid' },
    { id: 3, date: '2024-09-01', type: 'Internet và dịch vụ', amount: 300000, status: 'paid' },
    { id: 4, date: '2024-09-01', type: 'Tiền nhà', amount: 200000, status: 'unpaid' },
  ]), []);

  const formatVnd = (n) => n.toLocaleString('vi-VN') + ' đ';

  const openPay = (bill) => { setSelectedBill(bill); setShowPayModal(true); };
  const closePay = () => { setShowPayModal(false); setSelectedBill(null); };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={{ avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=U' }} createButtonText="Tạo bài viết" />

      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <UserDashboardSidebar />
          <div className="lg:col-span-9">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b">
              <h1 className="text-2xl font-bold">Hóa đơn thanh toán</h1>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">NGÀY</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">LOẠI HÓA ĐƠN</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">SỐ TIỀN</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">TRẠNG THÁI</th>
                    <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">HÀNH ĐỘNG</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.map((b) => (
                    <tr key={b.id} className="border-t">
                      <td className="px-6 py-3 text-sm text-gray-700">{b.date}</td>
                      <td className="px-6 py-3 text-sm text-gray-900 font-medium">{b.type}</td>
                      <td className="px-6 py-3 text-sm">{formatVnd(b.amount)}</td>
                      <td className="px-6 py-3 text-sm">
                        {b.status === 'paid' ? (
                          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">Đã thanh toán</span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-semibold">Chưa thanh toán</span>
                        )}
                      </td>
                      <td className="px-6 py-3 text-sm">
                        {b.status === 'paid' ? (
                          <span className="text-gray-500">Đã xong</span>
                        ) : (
                          <button onClick={() => openPay(b)} className="text-blue-600 hover:underline flex items-center gap-1">
                            <i className="fas fa-receipt"></i>
                            Thanh toán
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        </div>
      </main>

      {/* Pay Modal */}
      {showPayModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold">Thanh toán hóa đơn</h3>
              <button onClick={closePay} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Loại:</span> {selectedBill?.type}</p>
              <p><span className="text-gray-500">Số tiền:</span> {selectedBill && formatVnd(selectedBill.amount)}</p>
              <p><span className="text-gray-500">Ngày:</span> {selectedBill?.date}</p>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button onClick={closePay} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">Hủy</button>
              <button onClick={() => { alert('Thanh toán thành công (demo)'); closePay(); }} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Thanh toán</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBills;
