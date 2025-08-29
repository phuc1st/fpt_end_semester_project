import React from 'react';

const ListingTable = ({ listings = [], onManage }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      'active': {
        bg: 'bg-green-100',
        text: 'text-green-800',
        label: 'Đang hiển thị'
      },
      'rented': {
        bg: 'bg-red-100',
        text: 'text-red-800',
        label: 'Đã cho thuê'
      },
      'pending': {
        bg: 'bg-yellow-100',
        text: 'text-yellow-800',
        label: 'Chờ duyệt'
      },
      'inactive': {
        bg: 'bg-gray-100',
        text: 'text-gray-800',
        label: 'Đã ẩn'
      }
    };

    const config = statusConfig[status] || statusConfig['inactive'];
    
    return (
      <span className={`${config.bg} ${config.text} text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
        {config.label}
      </span>
    );
  };

  return (
    <div className="bg-white p-4 md:p-5 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Tin đăng gần đây</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-3 md:px-6 py-3">Tin đăng</th>
              <th scope="col" className="px-3 md:px-6 py-3">Trạng thái</th>
              <th scope="col" className="px-3 md:px-6 py-3">Lượt xem</th>
              <th scope="col" className="px-3 md:px-6 py-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing, index) => (
              <tr key={listing.id || index} className="bg-white border-b last:border-b-0">
                <th scope="row" className="px-3 md:px-6 py-4 font-medium text-gray-900">
                  <div className="max-w-xs truncate">
                    {listing.title}
                  </div>
                </th>
                <td className="px-3 md:px-6 py-4">
                  {getStatusBadge(listing.status)}
                </td>
                <td className="px-3 md:px-6 py-4 font-semibold">
                  {listing.views?.toLocaleString() || '0'}
                </td>
                <td className="px-3 md:px-6 py-4">
                  <button
                    onClick={() => onManage && onManage(listing.id)}
                    className="font-medium text-primary hover:underline"
                  >
                    Quản lý
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {listings.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <i className="fa-solid fa-house-circle-xmark text-4xl mb-2"></i>
            <p>Chưa có tin đăng nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingTable;