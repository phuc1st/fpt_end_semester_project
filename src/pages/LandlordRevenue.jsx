import React, { useMemo, useState } from 'react';
import Header from '../components/layout/Header';
import DashboardSidebar from '../components/layout/DashboardSidebar';

const Stat = ({ label, value, icon, color }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color.bg}`}>
      <i className={`fa-solid ${icon} ${color.text}`}></i>
    </div>
  </div>
);

const LandlordRevenue = () => {
  const [range, setRange] = useState({ from: '', to: '' });

  // Mock danh sách khoản thanh toán tiền thuê từ người thuê
  const payments = useMemo(() => ([
    { id: 1, tenant: 'Nguyễn Văn A', room: 'Phòng 101 - BK', amount: 3000000, status: 'paid', paidDate: '2025-09-01', period: '09/2025' },
    { id: 2, tenant: 'Trần Thị B', room: 'Căn hộ mini - FPT', amount: 4500000, status: 'paid', paidDate: '2025-09-03', period: '09/2025' },
    { id: 3, tenant: 'Lê Văn C', room: 'Phòng 203 - Q.3', amount: 2500000, status: 'unpaid', paidDate: '', period: '09/2025' },
    { id: 4, tenant: 'Nguyễn Văn A', room: 'Phòng 101 - BK', amount: 3000000, status: 'paid', paidDate: '2025-08-01', period: '08/2025' },
  ]), []);

  const filtered = payments.filter(p => {
    if (!range.from && !range.to) return true;
    const d = p.paidDate ? new Date(p.paidDate).getTime() : new Date(`${p.period.split('/')[1]}-${p.period.split('/')[0]}-01`).getTime();
    const from = range.from ? new Date(range.from).getTime() : -Infinity;
    const to = range.to ? new Date(range.to).getTime() : Infinity;
    return d >= from && d <= to;
  });

  const totalReceived = filtered.filter(p => p.status === 'paid').reduce((s, p) => s + p.amount, 0);
  const totalUnpaid = filtered.filter(p => p.status !== 'paid').reduce((s, p) => s + p.amount, 0);
  const activeTenants = new Set(filtered.map(p => p.tenant)).size;

  const fmt = (n) => n.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={{ avatar: 'https://placehold.co/40x40/A7F3D0/065F46?text=L' }} createButtonText="Đăng tin mới" />

      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <DashboardSidebar />

          <div className="lg:col-span-9 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h1 className="text-2xl font-bold">Quản lý Doanh thu</h1>
                <div className="flex gap-3 items-end">
                  <div>
                    <label className="block text-sm text-gray-600">Từ ngày</label>
                    <input type="date" value={range.from} onChange={(e) => setRange(r => ({ ...r, from: e.target.value }))} className="mt-1 border rounded-md p-2 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600">Đến ngày</label>
                    <input type="date" value={range.to} onChange={(e) => setRange(r => ({ ...r, to: e.target.value }))} className="mt-1 border rounded-md p-2 text-sm" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Stat label="Đã thu (kỳ lọc)" value={fmt(totalReceived)} icon="fa-sack-dollar" color={{ bg: 'bg-emerald-100', text: 'text-emerald-700' }} />
                <Stat label="Còn phải thu" value={fmt(totalUnpaid)} icon="fa-wallet" color={{ bg: 'bg-amber-100', text: 'text-amber-700' }} />
                <Stat label="Số người thuê" value={activeTenants} icon="fa-users" color={{ bg: 'bg-blue-100', text: 'text-blue-700' }} />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Bảng thanh toán tiền thuê</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Người thuê</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tài sản</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số tiền</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kỳ</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày thanh toán</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filtered.map((p, idx) => (
                      <tr key={p.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{idx + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{p.tenant}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{p.room}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fmt(p.amount)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{p.period}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          {p.status === 'paid' ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">Đã thanh toán</span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-rose-100 text-rose-700">Chưa thanh toán</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{p.paidDate || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-sm text-gray-600 mt-4">Tổng khoản: {filtered.length} | Đã thu: <span className="font-semibold text-gray-900">{fmt(totalReceived)}</span> | Còn phải thu: <span className="font-semibold text-gray-900">{fmt(totalUnpaid)}</span></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandlordRevenue;


