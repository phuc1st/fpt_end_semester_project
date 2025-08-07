import React, { useState } from 'react';
import { Header } from '../components/layout';
import { SavedListingCard } from '../components/ui';

const sampleListings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
    title: 'Phòng trọ full nội thất gần ĐH Bách Khoa',
    price: '3.500.000đ/tháng',
    location: 'Q. Liên Chiểu, Đà Nẵng',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop',
    title: 'Căn hộ studio mới, an ninh, có điều hòa',
    price: '3.200.000đ/tháng',
    location: 'Q. Sơn Trà, Đà Nẵng',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1615875605825-5eb9bb5c6890?q=80&w=1974&auto=format&fit=crop',
    title: 'Trọ yên tĩnh, có gác, giờ giấc tự do',
    price: '2.800.000đ/tháng',
    location: 'Q. Hải Châu, Đà Nẵng',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop',
    title: 'Phòng trọ giá sinh viên gần Làng Đại học',
    price: '1.800.000đ/tháng',
    location: 'Q. Ngũ Hành Sơn, Đà Nẵng',
  },
];

const SavedListings = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('newest');
  const [listings, setListings] = useState(sampleListings);

  const handleUnsave = (id) => {
    setListings(listings.filter(l => l.id !== id));
  };

  const handleMessage = (id) => {
    alert('Gửi tin nhắn cho chủ phòng ID: ' + id);
  };

  const filteredListings = listings.filter(l =>
    l.title.toLowerCase().includes(search.toLowerCase()) ||
    l.location.toLowerCase().includes(search.toLowerCase())
  );

  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sort === 'price-asc') {
      return parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, ''));
    } else if (sort === 'price-desc') {
      return parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, ''));
    }
    return 0; // newest default
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={{ avatar: 'https://placehold.co/40x40/E2E8F0/4A5568?text=V' }} />
      <main className="container mx-auto max-w-7xl px-4 pt-8 pb-12">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <h1 className="text-3xl font-bold">Tin đã lưu ({listings.length})</h1>
            <div className="mt-4 sm:mt-0 flex items-center gap-4">
              <div className="relative">
                <i className="fa-solid fa-magnifying-glass absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Tìm trong tin đã lưu..."
                  className="bg-gray-100 rounded-full py-2 pl-9 pr-4 w-full sm:w-64 focus:outline-none"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
              <select
                className="border-gray-300 rounded-md shadow-sm text-sm"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value="newest">Sắp xếp: Mới nhất</option>
                <option value="price-asc">Giá: Thấp đến cao</option>
                <option value="price-desc">Giá: Cao đến thấp</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedListings.map(listing => (
            <SavedListingCard
              key={listing.id}
              image={listing.image}
              title={listing.title}
              price={listing.price}
              location={listing.location}
              onUnsave={() => handleUnsave(listing.id)}
              onMessage={() => handleMessage(listing.id)}
            />
          ))}
          {sortedListings.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">
              <i className="fa-regular fa-bookmark text-4xl mb-2"></i>
              <p>Không có tin nào phù hợp.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SavedListings;
