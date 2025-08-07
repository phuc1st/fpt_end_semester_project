import React, { useState } from 'react';

const RoommateFilter = () => {
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('Tất cả');
  const [gender, setGender] = useState('female');
  const [lifestyle, setLifestyle] = useState({
    quiet: false,
    clean: false,
    noSmoking: false,
    petFriendly: false
  });

  const handleLifestyleChange = (key) => {
    setLifestyle(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSearch = () => {
    console.log('Search with filters:', { location, budget, gender, lifestyle });
  };

  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4">Tìm bạn ở ghép</h2>
        <div className="space-y-5">
          {/* Location */}
          <div>
            <label htmlFor="location" className="font-semibold text-sm block mb-1">
              Khu vực tìm kiếm
            </label>
            <input 
              type="text" 
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary" 
              placeholder="VD: Q. Liên Chiểu"
            />
          </div>

          {/* Budget */}
          <div>
            <label htmlFor="budget" className="font-semibold text-sm block mb-1">
              Ngân sách/người
            </label>
            <select 
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            >
              <option>Tất cả</option>
              <option>Dưới 1.5 triệu</option>
              <option>1.5 - 2.5 triệu</option>
              <option>Trên 2.5 triệu</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="font-semibold text-sm block mb-2">Giới tính</label>
            <div className="flex gap-2">
              <button 
                onClick={() => setGender('male')}
                className={`flex-1 border py-2 rounded-md text-sm transition-colors ${
                  gender === 'male' 
                    ? 'bg-blue-100 text-blue-700 border-blue-200' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Nam
              </button>
              <button 
                onClick={() => setGender('female')}
                className={`flex-1 border py-2 rounded-md text-sm transition-colors ${
                  gender === 'female' 
                    ? 'bg-blue-100 text-blue-700 border-blue-200' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Nữ
              </button>
              <button 
                onClick={() => setGender('all')}
                className={`flex-1 border py-2 rounded-md text-sm transition-colors ${
                  gender === 'all' 
                    ? 'bg-blue-100 text-blue-700 border-blue-200' 
                    : 'hover:bg-gray-100'
                }`}
              >
                Tất cả
              </button>
            </div>
          </div>

          {/* Lifestyle */}
          <div>
            <label className="font-semibold text-sm block mb-2">Lối sống</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={lifestyle.quiet}
                  onChange={() => handleLifestyleChange('quiet')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Thích yên tĩnh</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={lifestyle.clean}
                  onChange={() => handleLifestyleChange('clean')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Gọn gàng, sạch sẽ</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={lifestyle.noSmoking}
                  onChange={() => handleLifestyleChange('noSmoking')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Không hút thuốc</span>
              </label>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={lifestyle.petFriendly}
                  onChange={() => handleLifestyleChange('petFriendly')}
                  className="h-4 w-4 rounded text-primary focus:ring-primary" 
                />
                <span className="ml-2 text-sm">Thân thiện với thú cưng</span>
              </label>
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-2">
            <button 
              onClick={handleSearch}
              className="w-full bg-primary hover:bg-primary-700 text-white font-semibold py-2.5 px-4 rounded-md transition-colors"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RoommateFilter;