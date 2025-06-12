import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const profileRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setShowServicesDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-xl md:text-2xl font-bold text-sky-700">VisionProp ERP</h1>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl text-sky-700 md:hidden focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Links */}
      <div className={`md:flex md:items-center md:gap-6 font-medium text-gray-700 
        ${menuOpen ? "block absolute top-20 left-0 w-full bg-white shadow-lg z-40 p-6 space-y-4" : "hidden md:flex"}`}>

        <Link to="/" className="block px-3 py-2 rounded hover:bg-sky-100 hover:text-sky-700">Home</Link>
        <Link to="/about" className="block px-3 py-2 rounded hover:bg-sky-100 hover:text-sky-700">About Us</Link>
        <Link to="/property" className="block px-3 py-2 rounded hover:bg-sky-100 hover:text-sky-700">Property</Link>

        {/* Services Dropdown */}
        <div className="relative" ref={servicesRef}>
          <button
            onClick={() => setShowServicesDropdown(!showServicesDropdown)}
            className="flex items-center gap-1 px-3 py-2 rounded hover:bg-sky-100 hover:text-sky-700"
          >
            Services <FaChevronDown className="text-xs" />
          </button>

          {showServicesDropdown && (
            <div className="absolute bg-white shadow-lg border rounded-md w-56 mt-2 z-50">
              <Link to="/services/property-management" className="block px-4 py-2 text-sm hover:bg-sky-50">Property Management</Link>
              <Link to="/services/legal-support" className="block px-4 py-2 text-sm hover:bg-sky-50">Legal Support</Link>
              <Link to="/services/interior-design" className="block px-4 py-2 text-sm hover:bg-sky-50">Interior Design</Link>
            </div>
          )}
        </div>

        <Link to="/help-center" className="block px-3 py-2 rounded hover:bg-sky-100 hover:text-sky-700">Help Center</Link>
        <Link to="/login" className="block px-3 py-2 rounded hover:bg-sky-100 hover:text-sky-700">Login</Link>
        <Link to="/register" className="block px-3 py-2 rounded hover:bg-sky-100 hover:text-sky-700">Register</Link>

        {/* Profile Icon */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            className="text-3xl text-sky-700 focus:outline-none"
          >
            <FaUserCircle />
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-50">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">My Profile</Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50">Settings</Link>
              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
