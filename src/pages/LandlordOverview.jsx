import React, { useMemo, useState } from 'react';
import { Header, DashboardSidebar } from '../components/layout';

const StatItem = ({ icon, label, value }) => (
  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center gap-4">
    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-xl">
      <i className={`fa-solid ${icon} text-gray-700`}></i>
    </div>
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const LandlordOverview = () => {
  const user = { name: 'Anh Pi' };

  const chartValues = useMemo(() => [110, 150, 110, 95, 205, 110, 112], []);
  const max = Math.max(...chartValues, 300);
  const yTicks = [300, 250, 200, 150, 100, 50, 0];
  const dayLabels = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const recent = [
    { id: 1, title: 'Phòng trọ gần ĐH Bách Khoa', status: 'Đang hiển thị', views: 1280 },
    { id: 2, title: 'Phòng trọ gần ĐH Bách Khoa', status: 'Đã cho thuê', views: 1280 },
  ];

  return (
    <div className="text-neutral">
      <Header activeTab="dashboard" user={{ name: user.name }} createButtonText="Đăng tin mới" />

      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <DashboardSidebar />

          <div className="lg:col-span-9 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold">Chào mừng trở lại, {user.name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <StatItem icon="fa-eye" label="Tổng lượt xem" value="12,540" />
              <StatItem icon="fa-comment-dots" label="Tin nhắn mới" value="8" />
              <StatItem icon="fa-calendar-check" label="Yêu cầu xem phòng" value="3" />
              <StatItem icon="fa-house" label="Phòng đang cho thuê" value="4/5" />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold mb-3">Thống kê lượt xem 7 ngày qua</h2>
              <div className="h-56 w-full relative">
                {/* Y grid lines (stop above x labels) */}
                <div className="absolute left-10 right-0 top-0 bottom-8 grid grid-rows-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="border-b border-gray-200" />
                  ))}
                  {/* Baseline */}
                  <div className="border-b border-gray-200" />
                </div>
                {/* Y axis labels */}
                <div className="absolute top-0 bottom-8 left-0 w-10 flex flex-col justify-between text-gray-500 text-xs">
                  {yTicks.map((t) => (
                    <div key={t} className="-translate-y-1">{t}</div>
                  ))}
                </div>
                {/* Bars layer - aligned to baseline (bottom-6) */}
                <div className="absolute left-12 right-2 top-0 bottom-8 z-10 flex items-end justify-between">
                  {chartValues.map((v, i) => (
                    <div key={i} className="relative flex items-end justify-center w-16 h-full">
                      {hoveredIndex === i && (
                        <div
                          className="absolute left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow"
                          style={{ bottom: `calc(${(v / max) * 100}% + 8px)` }}
                        >
                          {v}
                        </div>
                      )}
                      <div
                        className="w-10 bg-blue-300 rounded-t"
                        style={{ height: `${(v / max) * 100}%` }}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      />
                    </div>
                  ))}
                </div>
                {/* X labels row under baseline */}
                <div className="absolute left-12 right-2 bottom-0 h-8 flex items-center justify-between text-xs text-gray-600">
                  {dayLabels.map((d) => (
                    <span key={d} className="w-16 text-center whitespace-nowrap">{d}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold mb-4">Tin đăng gần đây</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tin đăng</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lượt xem</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hành động</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recent.map((r) => (
                      <tr key={r.id}>
                        <td className="px-4 py-3 text-sm text-gray-800">{r.title}</td>
                        <td className="px-4 py-3 text-sm">
                          {r.status === 'Đang hiển thị' ? (
                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{r.status}</span>
                          ) : (
                            <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">{r.status}</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-800">{r.views.toLocaleString('vi-VN')}</td>
                        <td className="px-4 py-3 text-sm text-primary cursor-pointer">Quản lý</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandlordOverview;

