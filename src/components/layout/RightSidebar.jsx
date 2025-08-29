import React from 'react';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20 space-y-4">
        {/* Quick Actions */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold mb-3 text-gray-600 text-base">Thao tác nhanh</h3>
          <div className="space-y-2">
            <Link 
              to="/create-listing" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i className="fa-solid fa-plus text-primary w-6 text-center"></i>
              <span className="font-medium">Đăng tin cho thuê</span>
            </Link>
            <Link 
              to="/search" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i className="fa-solid fa-search text-blue-500 w-6 text-center"></i>
              <span className="font-medium">Tìm phòng trọ</span>
            </Link>
            <Link 
              to="/roommate-finder" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <i className="fa-solid fa-users text-green-500 w-6 text-center"></i>
              <span className="font-medium">Tìm bạn ở ghép</span>
            </Link>
          </div>
        </div>

        {/* Featured Landlords */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold mb-3 text-gray-600 text-base">Người cho thuê nổi bật</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://placehold.co/40x40/A7F3D0/065F46?text=M" 
                alt="Chủ trọ" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Anh Minh</p>
                <p className="text-xs text-gray-500">5 tin đăng</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="https://placehold.co/40x40/FED7AA/9A3412?text=C" 
                alt="Chủ trọ" 
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">Cô Hoa</p>
                <p className="text-xs text-gray-500">3 tin đăng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contacts */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-bold mb-3 text-gray-600 text-base">Liên hệ</h3>
          <div className="space-y-4">
            <Link 
              to="/messages" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img 
                src="https://placehold.co/36x36/93C5FD/1E40AF?text=A" 
                alt="Minh An" 
                className="w-9 h-9 rounded-full"
              />
              <p className="font-semibold">Minh An</p>
            </Link>
            <Link 
              to="/messages" 
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <img 
                src="https://placehold.co/36x36/FBCFE8/9D27B0?text=L" 
                alt="Lan" 
                className="w-9 h-9 rounded-full"
              />
              <p className="font-semibold">Thanh Lan</p>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;