import React, { useState } from 'react';

const SearchFilter = () => {
  const [priceRange, setPriceRange] = useState('2 - 4 triệu');
  const [propertyTypes, setPropertyTypes] = useState({
    room: true,
    apartment: false,
    house: false
  });
  const [amenities, setAmenities] = useState({
    ac: true,
    hotWater: false,
    security: true
  });

  const handlePropertyTypeChange = (type) => {
    setPropertyTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleAmenityChange = (amenity) => {
    setAmenities(prev => ({
      ...prev,
      [amenity]: !prev[amenity]
    }));
  };

  const clearFilters = () => {
    setPriceRange('Tất cả mức giá');
    setPropertyTypes({ room: false, apartment: false, house: false });
    setAmenities({ ac: false, hotWater: false, security: false });
  };

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Bộ lọc tìm kiếm</h2>
        <div className="space-y-5">
          {/* Price Range */}
          <div>
            <label className="font-semibold text-sm">Mức giá</label>
            <select 
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option>Tất cả mức giá</option>
              <option>Dưới 2 triệu</option>
              <option>2 - 4 triệu</option>
              <option>4 - 6 triệu</option>
              <option>Trên 6 triệu</option>
            </select>
          </div>

          {/* Property Type */}
          <div>
            <label className="font-semibold text-sm">Loại hình</label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={propertyTypes.room}
                  onChange={() => handlePropertyTypeChange('room')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Phòng trọ, nhà trọ</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={propertyTypes.apartment}
                  onChange={() => handlePropertyTypeChange('apartment')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Căn hộ</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={propertyTypes.house}
                  onChange={() => handlePropertyTypeChange('house')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Nhà nguyên căn</span>
              </label>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <label className="font-semibold text-sm">Tiện ích</label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={amenities.ac}
                  onChange={() => handleAmenityChange('ac')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Điều hòa</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={amenities.hotWater}
                  onChange={() => handleAmenityChange('hotWater')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Nóng lạnh</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={amenities.security}
                  onChange={() => handleAmenityChange('security')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">An ninh 24/7</span>
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <button 
              onClick={clearFilters}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-md text-sm transition-colors"
            >
              Xóa bộ lọc
            </button>
            <button className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors">
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SearchFilter;