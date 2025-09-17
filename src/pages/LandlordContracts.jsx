import React, { useState } from 'react';
import Header from '../components/layout/Header';
import DashboardSidebar from '../components/layout/DashboardSidebar';

const LandlordContracts = () => {
  const [activeTab, setActiveTab] = useState('requests'); // 'requests', 'contracts', 'tenants'
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newContract, setNewContract] = useState({
    tenantName: '',
    assetInfo: '',
    startDate: '',
    endDate: '',
    rent: '',
    deposit: '',
    terms: ''
  });
  const [selectedRequest, setSelectedRequest] = useState(null);

  const rentalRequests = [
    {
      id: 1,
      tenantName: "Nguyễn Văn A",
      propertyId: "Căn hộ số 101",
      email: "nguyenvana@gmail.com",
      phone: "0328366716",
      requestDate: "15/09/2025",
      status: "pending"
    },
    {
      id: 2,
      tenantName: "Trần Thị B",
      propertyId: "Căn hộ số 102",
      email: "tranthib@gmail.com",
      phone: "0987654321",
      requestDate: "14/09/2025",
      status: "pending"
    },
    {
      id: 3,
      tenantName: "Lê Văn C",
      propertyId: "Căn hộ số 103",
      email: "levanc@gmail.com",
      phone: "0123456789",
      requestDate: "13/09/2025",
      status: "pending"
    }
  ];

  const contracts = [
    {
      id: 1,
      contractId: "HD001",
      tenantName: "Nguyễn Thị Tâm",
      startDate: "1/5/2025",
      endDate: "1/9/2025",
      status: "active"
    },
    {
      id: 2,
      contractId: "HD002",
      tenantName: "Nguyễn Thị Tâm",
      startDate: "1/5/2025",
      endDate: "1/9/2025",
      status: "expired"
    },
    {
      id: 3,
      contractId: "HD003",
      tenantName: "Nguyễn Thị Tâm",
      startDate: "1/5/2025",
      endDate: "1/9/2025",
      status: "active"
    },
    {
      id: 4,
      contractId: "HD004",
      tenantName: "Nguyễn Thị Tâm",
      startDate: "1/5/2025",
      endDate: "1/9/2025",
      status: "expired"
    },
    {
      id: 5,
      contractId: "HD005",
      tenantName: "Nguyễn Thị Tâm",
      startDate: "1/5/2025",
      endDate: "1/9/2025",
      status: "active"
    }
  ];

  const tenants = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      propertyId: "Căn hộ số 101",
      email: "nguyenvana@gmail.com",
      phone: "0328366716",
      moveInDate: "01/10/2025",
      status: "active"
    },
    {
      id: 2,
      name: "Trần Thị B",
      propertyId: "Căn hộ số 102",
      email: "tranthib@gmail.com",
      phone: "0987654321",
      moveInDate: "01/09/2025",
      status: "active"
    }
  ];

  const handleApprove = (request) => {
    setSelectedRequest(request);
    setShowApproveModal(true);
  };

  const handleReject = (request) => {
    setSelectedRequest(request);
    setShowRejectModal(true);
  };

  const confirmApprove = () => {
    console.log('Approving request:', selectedRequest);
    alert('Yêu cầu thuê đã được duyệt thành công!');
    setShowApproveModal(false);
    setSelectedRequest(null);
  };

  const confirmReject = () => {
    console.log('Rejecting request:', selectedRequest);
    alert('Yêu cầu thuê đã bị từ chối!');
    setShowRejectModal(false);
    setSelectedRequest(null);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Chờ duyệt</span>;
      case 'active':
        return <span className="text-green-600 font-medium">Đang hoạt động</span>;
      case 'expired':
        return <span className="text-red-600 font-medium">Hết hạn</span>;
      default:
        return null;
    }
  };

  const RentalRequestCard = ({ request }) => (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{request.tenantName}</h3>
        <span className="text-sm text-gray-600">{request.propertyId}</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        Email: {request.email} | SĐT: {request.phone}
      </p>
      <p className="text-xs text-gray-500 mb-4">Ngày yêu cầu: {request.requestDate}</p>
      <div className="flex gap-2">
        <button
          onClick={() => handleApprove(request)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Duyệt
        </button>
        <button
          onClick={() => handleReject(request)}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Từ chối
        </button>
      </div>
    </div>
  );

  const ContractTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              MÃ HỢP ĐỒNG
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              NGƯỜI THUÊ
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              NGÀY BẮT ĐẦU
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              NGÀY KẾT THÚC
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              TRẠNG THÁI
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
              HÀNH ĐỘNG
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {contracts.map((contract) => (
            <tr key={contract.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {contract.contractId}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contract.tenantName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contract.startDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {contract.endDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {getStatusBadge(contract.status)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm space-x-4">
                <button className="text-gray-900 hover:text-gray-700 font-medium">
                  Xem
                </button>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Sửa
                </button>
                <button className="text-red-600 hover:text-red-800 font-medium">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TenantCard = ({ tenant }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{tenant.name}</h3>
        {getStatusBadge(tenant.status)}
      </div>
      <p className="text-sm text-gray-600 mb-2">{tenant.propertyId}</p>
      <p className="text-sm text-gray-600 mb-2">
        Email: {tenant.email} | SĐT: {tenant.phone}
      </p>
      <p className="text-sm text-gray-500 mb-3">
        Ngày vào ở: {tenant.moveInDate}
      </p>
      <div className="flex gap-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Xem hồ sơ
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Liên hệ
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header 
        createButtonText="Tạo tin đăng"
        user={{ avatar: "https://placehold.co/40x40/E2E8F0/4A5568?text=L" }}
      />
      
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Sidebar */}
          <DashboardSidebar />
          
          {/* Main Content */}
          <div className="lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold text-gray-900 flex-shrink-0">Quản lý Hợp đồng</h1>
                <button onClick={() => setShowCreateModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap ml-4">
                  <i className="fas fa-plus"></i>
                  Tạo hợp đồng điện tử
                </button>
              </div>
              
              {/* Tabs */}
              <div className="mb-6">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('requests')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'requests'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Yêu cầu thuê
                  </button>
                  <button
                    onClick={() => setActiveTab('contracts')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'contracts'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Quản lý hợp đồng
                  </button>
                  <button
                    onClick={() => setActiveTab('tenants')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'tenants'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Thông tin người thuê
                  </button>
                </nav>
              </div>

              {/* Content */}
              {activeTab === 'requests' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Duyệt hoặc từ chối yêu cầu thuê</h2>
                  <div className="space-y-4">
                    {rentalRequests.map(request => (
                      <RentalRequestCard key={request.id} request={request} />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contracts' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Duyệt hoặc từ chối yêu cầu thuê</h2>
                  <ContractTable />
                </div>
              )}

              {activeTab === 'tenants' && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Thông tin người thuê</h2>
                  <div className="space-y-4">
                    {tenants.map(tenant => (
                      <TenantCard key={tenant.id} tenant={tenant} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Approve Confirmation Modal */}
      {showApproveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm text-center p-6 transform scale-95 animate-in zoom-in-95">
            <h3 className="text-xl font-bold mb-2">Xác nhận duyệt yêu cầu</h3>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn duyệt yêu cầu thuê của <strong>{selectedRequest?.tenantName}</strong> không?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowApproveModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={confirmApprove}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Duyệt
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Contract Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Tạo Hợp đồng mới</h3>
              <button onClick={() => setShowCreateModal(false)} className="text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Create contract:', newContract);
                alert('Đã tạo hợp đồng điện tử (demo).');
                setShowCreateModal(false);
                setNewContract({ tenantName: '', assetInfo: '', startDate: '', endDate: '', rent: '', deposit: '', terms: '' });
                setActiveTab('contracts');
              }}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Người thuê</label>
                  <select
                    value={newContract.tenantName}
                    onChange={(e) => setNewContract({ ...newContract, tenantName: e.target.value })}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  >
                    <option value="" disabled>Chọn người thuê</option>
                    {tenants.map(t => (
                      <option key={t.id} value={t.name}>{t.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Thông tin tài sản</label>
                  <textarea
                    rows={2}
                    placeholder="Số phòng, địa chỉ, v.v."
                    value={newContract.assetInfo}
                    onChange={(e) => setNewContract({ ...newContract, assetInfo: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Ngày bắt đầu</label>
                    <input
                      type="date"
                      value={newContract.startDate}
                      onChange={(e) => setNewContract({ ...newContract, startDate: e.target.value })}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Ngày kết thúc</label>
                    <input
                      type="date"
                      value={newContract.endDate}
                      onChange={(e) => setNewContract({ ...newContract, endDate: e.target.value })}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Giá thuê (VND/tháng)</label>
                    <input
                      type="text"
                      placeholder="5,000,000"
                      value={newContract.rent}
                      onChange={(e) => setNewContract({ ...newContract, rent: e.target.value })}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tiền cọc (VND)</label>
                    <input
                      type="text"
                      placeholder="5,000,000"
                      value={newContract.deposit}
                      onChange={(e) => setNewContract({ ...newContract, deposit: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Điều khoản hợp đồng</label>
                  <textarea
                    rows={3}
                    placeholder="Các điều khoản khác, ví dụ: quy định về điện nước, sửa chữa..."
                    value={newContract.terms}
                    onChange={(e) => setNewContract({ ...newContract, terms: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <button type="button" onClick={() => setShowCreateModal(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">Hủy</button>
                  <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg">Lưu</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Reject Confirmation Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-sm text-center p-6 transform scale-95 animate-in zoom-in-95">
            <h3 className="text-xl font-bold mb-2">Xác nhận từ chối yêu cầu</h3>
            <p className="text-gray-600 mb-6">
              Bạn có chắc chắn muốn từ chối yêu cầu thuê của <strong>{selectedRequest?.tenantName}</strong> không?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowRejectModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Hủy
              </button>
              <button
                onClick={confirmReject}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Từ chối
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandlordContracts;
