import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home'; 
import About from '../pages/About';
import BookedMembers from "../pages/BookedMembers";
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import BookDemo from "../pages/BookDemo";
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard'; 
import PropertyManagement from "../pages/services/PropertyManagement";
import LegalSupport from "../pages/services/LegalSupport";
import InteriorDesign from "../pages/services/InteriorDesign";

// Protect Dashboard
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedInUser');
  return isLoggedIn ? children : <Navigate to="/" replace />;
};



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Home /></ProtectedRoute>} />
       <Route path="/login" element={<Auth />} />
      <Route path="/book-demo" element={<BookDemo />} />
      <Route path="/about" element={<About />} />
     <Route path="/" element={<Home />} />
     

       <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Auth />} />
      <Route path="/members" element={<BookedMembers />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
       <Route path="/services/property-management" element={<PropertyManagement />} />
  <Route path="/services/legal-support" element={<LegalSupport />} />
  <Route path="/services/interior-design" element={<InteriorDesign />} />
    </Routes>
  );
};

export default AppRoutes;
