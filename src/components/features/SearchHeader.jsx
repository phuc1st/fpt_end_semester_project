import React, { useState } from 'react';

const SearchHeader = ({ searchQuery = "trọ gần Đại học Bách Khoa" }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'Tất cả', count: null },
    { id: 'listings', label: 'Phòng trọ', count: 15 },
    { id: 'posts', label: 'Bài viết', count: 4 },
    { id: 'people', label: 'Mọi người', count: 8 }
  ];

  return (
    <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm mb-4">
      <h1 className="text-xl md:text-2xl font-bold">
        Kết quả cho "{searchQuery}"
      </h1>
      <div className="mt-3 flex flex-wrap gap-2 border-b pb-3">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-3 md:px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeFilter === tab.id
                ? 'bg-blue-50 text-primary font-semibold'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {tab.label}
            {tab.count && ` (${tab.count})`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHeader;