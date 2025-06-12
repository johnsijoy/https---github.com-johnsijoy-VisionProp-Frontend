import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="https://cdn-icons-png.flaticon.com/512/69/69524.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />
        <h1 className="text-2xl font-bold text-sky-700">VisionProp ERP</h1>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/" className="px-3 py-2 rounded-full hover:bg-sky-100 hover:text-sky-700">Home</Link>
        <Link to="/about" className="px-3 py-2 rounded-full hover:bg-sky-100 hover:text-sky-700">About</Link>
        <Link to="/login" className="px-3 py-2 rounded-full hover:bg-sky-100 hover:text-sky-700">Login</Link>
        <Link to="/register" className="px-3 py-2 rounded-full hover:bg-sky-100 hover:text-sky-700">Register</Link>

        {/* Profile Icon & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-3xl text-sky-700 focus:outline-none"
            title="Profile"
          >
            <FaUserCircle />
          </button>

          {showDropdown && (
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
