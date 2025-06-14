// src/pages/Auth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users"); // or "http://localhost:3001/users" if proxy not used

      if (!response.ok) throw new Error("Failed to fetch");

      const users = await response.json();

      const matchedUser = users.find(
        (u) =>
          (u.email.toLowerCase() === emailOrUsername.toLowerCase() ||
            u.name.toLowerCase() === emailOrUsername.toLowerCase()) &&
          u.password === password
      );

      if (matchedUser) {
        // ✅ Save user to localStorage
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

        alert("Login Successful");

        // ✅ Navigate to home or dashboard
        navigate("/book-demo");
      } else {
        alert("Invalid email/username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Server error: Unable to connect");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <label className="block mb-1">Email or Username</label>
        <input
          type="text"
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
          required
        />

        <label className="block mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
