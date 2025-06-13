import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home'; // Dashboard
import About from '../pages/About';
import BookedMembers from "../pages/BookedMembers";
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import BookDemo from "../pages/BookDemo";
import Auth from '../pages/Auth';
import Dashboard from '../pages/Dashboard'; 




// Protect Dashboard
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('loggedInUser');
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Home /></ProtectedRoute>} />
       <Route path="/login" element={<Auth />} />
      <Route path="/book-demo" element={<BookDemo />} />
      <Route path="/about" element={<About />} />
       <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Auth />} />
      <Route path="/members" element={<BookedMembers />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
