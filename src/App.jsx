import React, { useState } from 'react';
import {
  Home,
  SearchResults,
  RoommateFinder,
  DetailedAssessment,
  DetailRoom,
  LandlordDashboard,
  AppointmentManagement,
  Messaging,
  AssessmentManagement,
  SavedListings,
  AccountProfileManagement,
  CreateEditListing,
  UserProfile,
  Auth
} from './pages';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'search' | 'roommate' | 'assessment' | 'detail' | 'dashboard' | 'appointments' | 'messaging'

  // For demo purposes, you can change this to see different pages
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'search':
        return <SearchResults />;
      case 'roommate':
        return <RoommateFinder />;
      case 'assessment':
        return <DetailedAssessment />;
      case 'assessment-management':
        return <AssessmentManagement />;
      case 'detail':
        return <DetailRoom />;
      case 'dashboard':
        return <LandlordDashboard />;
      case 'appointments':
        return <AppointmentManagement />;
      case 'messaging':
        return <Messaging />;
      case 'saved-listings':
        return <SavedListings />;
      case 'account-profile':
        return <AccountProfileManagement />;
      case 'create-listing':
        return <CreateEditListing />;
      case 'user-profile':
        return <UserProfile />;
      case 'auth':
        return <Auth />;
      case 'home':
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Quick Navigation for Testing - Remove in production */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col md:flex-row gap-2 md:space-x-2">
        <button
          onClick={() => setCurrentPage('home')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'home'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setCurrentPage('search')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'search'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Search
        </button>
        <button
          onClick={() => setCurrentPage('roommate')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'roommate'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Roommate
        </button>
        <button
          onClick={() => setCurrentPage('assessment')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'assessment'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Reviews
        </button>
        <button
          onClick={() => setCurrentPage('assessment-management')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'assessment-management'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Quản lý Đánh giá
        </button>
        <button
          onClick={() => setCurrentPage('detail')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'detail'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Detail
        </button>
        <button
          onClick={() => setCurrentPage('dashboard')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'dashboard'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setCurrentPage('appointments')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'appointments'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Appointments
        </button>
        <button
          onClick={() => setCurrentPage('messaging')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'messaging'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Messages
        </button>
        <button
          onClick={() => setCurrentPage('saved-listings')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'saved-listings'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Tin đã lưu
        </button>
        <button
          onClick={() => setCurrentPage('account-profile')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'account-profile'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Tài khoản
        </button>
        <button
          onClick={() => setCurrentPage('create-listing')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'create-listing'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Tạo tin đăng
        </button>
        <button
          onClick={() => setCurrentPage('user-profile')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'user-profile'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setCurrentPage('auth')}
          className={`px-3 py-2 rounded-lg text-sm font-medium ${
            currentPage === 'auth'
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700 shadow-md hover:bg-gray-50'
          }`}
        >
          Auth
        </button>
      </div>

      {renderCurrentPage()}
    </div>
  );
}

export default App;
