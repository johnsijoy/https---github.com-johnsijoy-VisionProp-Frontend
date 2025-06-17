import { useState } from "react";
import { useNavigate } from "react-router-dom";

const countryStateData = {
  India: ["Tamil Nadu", "Karnataka", "Maharashtra"],
  USA: ["California", "Texas", "New York"],
  Australia: ["New South Wales", "Victoria", "Queensland"],
};

const BookDemo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    type: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "country") {
      setFormData((prev) => ({
        ...prev,
        country: value,
        state: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const now = new Date();
  const newEntry = {
    ...formData,
    date : now.toLocaleDateString('en-CA'), // YYYY-MM-DD format (safe for input type="date")
time : now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // HH:MM format
  };

  const previousData = JSON.parse(localStorage.getItem("demoBookings")) || [];
  localStorage.setItem("demoBookings", JSON.stringify([...previousData, newEntry]));

  setMessage("🎉 Demo booked successfully!");

  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    type: "",
  });

  setTimeout(() => {
    setMessage("");
    navigate("/members");
  }, 2000);
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-sky-700 mb-6">Book a Free Demo</h2>
  {/* ✅ Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-sm text-sky-600 hover:underline font-medium"
        >
          ← Back
        </button>
        {message && (
          <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Country */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Select Country</option>
              {Object.keys(countryStateData).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              disabled={!formData.country}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Select State</option>
              {formData.country &&
                countryStateData[formData.country].map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
            </select>
          </div>

          {/* Type */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">You are a</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-sky-500"
            >
              <option value="">Select Type</option>
              <option value="Agent">Agent</option>
              <option value="Team">Team</option>
              <option value="Broker">Broker</option>
            </select>
          </div>

          {/* Submit */}
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
