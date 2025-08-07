import React, { useState } from 'react';
import { Header } from '../components/layout';
import { SearchFilter, SearchHeader } from '../components/features';
import { PropertyCard, UserPostCard, LandlordProfileCard, Pagination } from '../components/ui';

const SearchResults = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample data
  const searchQuery = "trọ gần Đại học Bách Khoa";
  
  const propertyResults = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
      title: "Phòng trọ full nội thất gần ĐH Bách Khoa",
      price: "3.500.000đ/tháng",
      location: "Q. Liên Chiểu, Đà Nẵng",
      area: "25 m²",
      rating: 4.5,
      reviewCount: 12
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop",
      title: "Căn hộ studio mới, an ninh, có điều hòa",
      price: "3.200.000đ/tháng",
      location: "Q. Liên Chiểu, Đà Nẵng",
      area: "30 m²",
      rating: 4.8,
      reviewCount: 8
    }
  ];

  const userPosts = [
    {
      id: 1,
      user: {
        name: "Thanh Lan",
        avatar: "https://placehold.co/40x40/FBCFE8/9D27B0?text=L"
      },
      timeAgo: "Hôm qua",
      content: "Mình cũng đang tìm trọ quanh khu Bách Khoa đây ạ. Ưu tiên phòng có ban công, thoáng mát, ngân sách tầm 3 triệu. Có bạn nữ nào muốn tìm người ở ghép chung không ạ? Mình hiền lành, sạch sẽ nhé ^^"
    }
  ];

  const landlords = [
    {
      id: 1,
      landlord: {
        name: "Chủ trọ: Anh Minh",
        avatar: "https://placehold.co/80x80/A7F3D0/065F46?text=M"
      },
      postCount: 5
    }
  ];

  const handlePropertyClick = (propertyId) => {
    console.log('Navigate to property:', propertyId);
  };

  const handleSaveProperty = (propertyId) => {
    console.log('Save property:', propertyId);
  };

  const handleMessageUser = (userId) => {
    console.log('Message user:', userId);
  };

  const handleViewProfile = (landlordId) => {
    console.log('View landlord profile:', landlordId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };

  return (
    <div className="text-neutral">
      <Header searchValue={searchQuery} activeTab="search" />
      
      {/* Main Content */}
      <main className="container mx-auto px-2 md:px-4 pt-4 md:pt-6">
        <div className="grid grid-cols-12 gap-2 md:gap-4 lg:gap-8">
          
          {/* Left Sidebar - Filters */}
          <SearchFilter />

          {/* Main Results Feed */}
          <div className="col-span-12 lg:col-span-9">
            <SearchHeader searchQuery={searchQuery} />

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
              {/* Property Results */}
              {propertyResults.map((property) => (
                <PropertyCard
                  key={`property-${property.id}`}
                  image={property.image}
                  title={property.title}
                  price={property.price}
                  location={property.location}
                  area={property.area}
                  rating={property.rating}
                  reviewCount={property.reviewCount}
                  onSave={() => handleSaveProperty(property.id)}
                  onCardClick={() => handlePropertyClick(property.id)}
                />
              ))}

              {/* User Post Results */}
              {userPosts.map((post) => (
                <UserPostCard
                  key={`post-${post.id}`}
                  user={post.user}
                  timeAgo={post.timeAgo}
                  content={post.content}
                  onMessage={() => handleMessageUser(post.id)}
                />
              ))}
              
              {/* Landlord Profile Results */}
              {landlords.map((landlord) => (
                <LandlordProfileCard
                  key={`landlord-${landlord.id}`}
                  landlord={landlord.landlord}
                  postCount={landlord.postCount}
                  onViewProfile={() => handleViewProfile(landlord.id)}
                />
              ))}

              {/* Additional Property Card */}
              <PropertyCard
                image="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop"
                title="Phòng trọ mới xây, gần trường học"
                price="2.800.000đ/tháng"
                location="Q. Hải Châu, Đà Nẵng"
                area="22 m²"
                rating={4.2}
                reviewCount={5}
                onSave={() => handleSaveProperty('extra')}
                onCardClick={() => handlePropertyClick('extra')}
              />
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={3}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchResults;