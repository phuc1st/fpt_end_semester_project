import React from 'react';

const LeftSidebar = () => {
  return (
    <aside className="hidden lg:block lg:col-span-3">
      <div className="sticky top-20 space-y-2">
        <a href="#" className="flex items-center gap-4 p-2 rounded-lg left-sidebar-link">
          <img 
            src="https://placehold.co/40x40/E2E8F0/4A5568?text=V" 
            alt="User Avatar" 
            className="w-9 h-9 rounded-full"
          />
          <span className="font-semibold">Văn Toàn</span>
        </a>
        <a href="#" className="flex items-center gap-4 p-2 rounded-lg left-sidebar-link">
          <i className="fa-solid fa-bookmark text-blue-500 w-9 text-center text-2xl"></i>
          <span className="font-semibold">Tin đã lưu</span>
        </a>
        <a href="#" className="flex items-center gap-4 p-2 rounded-lg left-sidebar-link">
          <i className="fa-solid fa-users text-green-500 w-9 text-center text-2xl"></i>
          <span className="font-semibold">Bạn ở ghép</span>
        </a>
        <a href="#" className="flex items-center gap-4 p-2 rounded-lg left-sidebar-link">
          <i className="fa-solid fa-clock-rotate-left text-purple-500 w-9 text-center text-2xl"></i>
          <span className="font-semibold">Kỷ niệm</span>
        </a>
        <div className="border-t border-gray-300 my-2"></div>
        <h3 className="font-semibold text-gray-500 px-2 pt-2">Lối tắt của bạn</h3>
        <a href="#" className="flex items-center gap-4 p-2 rounded-lg left-sidebar-link">
          <img 
            src="https://placehold.co/36x36/FEF2F2/DC2626?text=CT" 
            alt="Chợ Tốt" 
            className="w-9 h-9 rounded-lg"
          />
          <span className="font-semibold">Chợ Tốt Nhà Đà Nẵng</span>
        </a>
      </div>
    </aside>
  );
};

export default LeftSidebar;