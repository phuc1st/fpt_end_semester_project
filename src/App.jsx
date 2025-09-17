import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import DemoAdmin from './trang/t';
import {
  Home,
  SearchResults,
  RoommateFinder,
  DetailedAssessment,
  DetailRoom,
  LandlordDashboard,
  LandlordOverview,
  LandlordRevenue,
  AdminUsers,
  AdminUserDetail,
  AdminReports,
  AdminReportDetail,
  UserAppointmentManagement,
  UserRentalHistory,
  UserBills,
  UserContracts,
  LandlordContracts,
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
  return (
    <Router>
      <div>
        <Routes>
          {/* Home page - default route */}
          <Route path="/" element={<Home />} />
          
          {/* Search and listing routes */}
          <Route path="/search" element={<SearchResults />} />
          <Route path="/room/:id" element={<DetailRoom />} />
          <Route path="/saved-listings" element={<SavedListings />} />
          <Route path="/create-listing" element={<CreateEditListing />} />
          
          {/* Roommate finder */}
          <Route path="/roommate-finder" element={<RoommateFinder />} />
          
          {/* Assessment and reviews */}
          <Route path="/assessment/:id" element={<DetailedAssessment />} />
          
          {/* User profile and auth */}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<AccountProfileManagement />} />
          
          {/* User pages */}
          <Route path="/user/appointments" element={<UserAppointmentManagement />} />
          <Route path="/user/rental-history" element={<UserRentalHistory />} />
          <Route path="/user/bills" element={<UserBills />} />
          <Route path="/user/contracts" element={<UserContracts />} />
          
          {/* Landlord dashboard routes */}
          <Route path="/landlord" element={<LandlordOverview />} />
          <Route path="/landlord/listings" element={<LandlordDashboard />} />
          <Route path="/landlord/appointments" element={<AppointmentManagement />} />
          <Route path="/landlord/revenue" element={<LandlordRevenue />} />
          <Route path="/landlord/contracts" element={<LandlordContracts />} />
          <Route path="/landlord/assessments" element={<AssessmentManagement />} />
          
          {/* Messaging */}
          <Route path="/messages" element={<Messaging />} />
          {/* Admin routes */}
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/users/:id" element={<AdminUserDetail />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/reports/:id" element={<AdminReportDetail />} />
          <Route path="/demo-admin" element={<DemoAdmin />} />
          
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        {/* Bottom Navigation */}
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
