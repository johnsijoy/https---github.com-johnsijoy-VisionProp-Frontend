import { useState } from "react";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    type: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate mock API with timeout
    setTimeout(() => {
      // Save to localStorage
      const previousData = JSON.parse(localStorage.getItem("demoBookings")) || [];
      localStorage.setItem("demoBookings", JSON.stringify([...previousData, formData]));

      // Show success message
      setMessage("🎉 Demo booked successfully!");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        type: "",
      });

      // Hide message after 3 seconds
      setTimeout(() => setMessage(""), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">Book a Free Demo</h2>

        {message && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">You are a</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Select Type</option>
              <option value="Agent">Agent</option>
              <option value="Team">Team</option>
              <option value="Broker">Broker</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 rounded shadow"
          >
            Request a Demo
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDemo;
