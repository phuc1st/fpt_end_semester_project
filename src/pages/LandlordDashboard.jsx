import React, { useMemo, useState } from 'react';
import { Header, DashboardSidebar } from '../components/layout';

const LandlordDashboard = () => {
  const landlordData = {
    name: "Anh Minh",
    avatar: "https://placehold.co/40x40/A7F3D0/065F46?text=M"
  };

  const initialPosts = useMemo(() => ([
    { id: 1,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Đã duyệt', date: '1/5/2025' },
    { id: 2,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Chờ duyệt', date: '1/5/2025' },
    { id: 3,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Đã duyệt', date: '1/5/2025' },
    { id: 4,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Đã duyệt', date: '1/5/2025' },
    { id: 5,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Đã duyệt', date: '1/5/2025' },
    { id: 6,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Từ chối',  date: '1/5/2025' },
    { id: 7,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Đã duyệt', date: '1/5/2025' },
    { id: 8,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Đã duyệt', date: '1/5/2025' },
    { id: 9,  title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Chờ duyệt', date: '1/5/2025' },
    { id: 10, title: 'Căn hộ hiện đại trung tâm', type: 'Căn hộ', status: 'Đã duyệt', date: '1/5/2025' },
  ]), []);

  const [query, setQuery] = useState('');
  const [posts] = useState(initialPosts);
  const [page, setPage] = useState(1);
  const perPage = 5;

  const filtered = useMemo(() => {
    if (!query.trim()) return posts;
    const q = query.toLowerCase();
    return posts.filter(p => p.title.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) || p.status.toLowerCase().includes(q));
  }, [posts, query]);

  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage) || 1;
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const counts = useMemo(() => ({
    total: posts.length,
    pending: posts.filter(p => p.status === 'Chờ duyệt').length,
    approved: posts.filter(p => p.status === 'Đã duyệt').length,
    rejected: posts.filter(p => p.status === 'Từ chối').length,
  }), [posts]);

  const statusBadge = (status) => {
    if (status === 'Đã duyệt') return 'text-green-600';
    if (status === 'Chờ duyệt') return 'text-yellow-600';
    return 'text-red-600';
  };

  const handleDelete = (id) => {
    console.log('Delete post', id);
  };

  return (
    <div className="text-neutral">
      <Header 
        activeTab="dashboard" 
        user={landlordData}
        createButtonText="Đăng tin mới"
      />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          <DashboardSidebar />

          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h1 className="text-2xl md:text-3xl font-bold">Quản lí tin đăng</h1>
              <p className="text-gray-500 mt-1">Nơi bạn có thể quản lí các tin đăng của mình</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
                <div className="p-4 rounded-lg bg-blue-100">
                  <p className="font-semibold">Tổng số tin đăng</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl font-bold">{counts.total}</span>
                    <span className="w-6 h-6 bg-blue-200 rounded-md" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-yellow-100">
                  <p className="font-semibold">Chờ duyệt</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl font-bold">{counts.pending}</span>
                    <span className="w-6 h-6 bg-yellow-200 rounded-md" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-green-100">
                  <p className="font-semibold">Đã duyệt</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl font-bold">{counts.approved}</span>
                    <span className="w-6 h-6 bg-green-200 rounded-md" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-red-100">
                  <p className="font-semibold">Từ chối</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl font-bold">{counts.rejected}</span>
                    <span className="w-6 h-6 bg-red-200 rounded-md" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mt-6">
                <h2 className="text-lg font-semibold">Danh sách tin đăng hiện tại</h2>
                <div className="flex gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:flex-none">
                    <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
                    <input
                      type="text"
                      placeholder="Tìm kiếm tin đăng"
                      className="bg-gray-100 rounded-md py-2 pl-9 pr-3 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                      value={query}
                      onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                    />
                  </div>
                  <button className="bg-primary hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-md whitespace-nowrap">
                    Tạo tin đăng mới
                  </button>
                </div>
              </div>

              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loại tin</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày đăng</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {paginated.map((p, idx) => (
                      <tr key={p.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">{(page - 1) * perPage + idx + 1}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">
                          <div>Căn hộ hiện đại<br/><span className="text-gray-500">trung tâm</span></div>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{p.type}</td>
                        <td className={`px-4 py-3 whitespace-nowrap text-sm font-semibold ${statusBadge(p.status)}`}>{p.status}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">{p.date}</td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <button className="text-gray-700 hover:underline mr-3">Xem</button>
                          <button className="text-blue-600 hover:underline mr-3">Sửa</button>
                          <button onClick={() => handleDelete(p.id)} className="text-red-600 hover:underline">Xóa</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                <div>Hiện thị {Math.min((page - 1) * perPage + 1, total)} đến {Math.min(page * perPage, total)} trên tổng số {total} tin</div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setPage(1)} disabled={page === 1} className="w-6 h-6 rounded bg-gray-200 disabled:opacity-50" />
                  {Array.from({ length: totalPages }, (_, i) => i + 1).slice(0, 2).map(p => (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={`w-6 h-6 rounded ${p === page ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandlordDashboard;