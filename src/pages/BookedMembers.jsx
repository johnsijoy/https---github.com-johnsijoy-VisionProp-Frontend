import { useEffect, useState } from "react";

const BookedMembers = () => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("firstName");
  const [selectedDate, setSelectedDate] = useState(""); // ✅ NEW
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("demoBookings")) || [];
    setBookings(stored);
  }, []);

  useEffect(() => {
    let results = [...bookings];

    if (searchQuery.trim() !== "") {
      results = results.filter((entry) =>
        `${entry.firstName} ${entry.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.country.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDate !== "") {
      results = results.filter((entry) => entry.date === selectedDate);
    }

  results.sort((a, b) => {
  const fieldA = a[sortOption]?.toLowerCase() || "";
  const fieldB = b[sortOption]?.toLowerCase() || "";
  return fieldA.localeCompare(fieldB);
});


    setFilteredBookings(results);
  }, [searchQuery, sortOption, bookings, selectedDate]);

  const handleDelete = (index) => {
    const updated = bookings.filter((_, i) => i !== index);
    localStorage.setItem("demoBookings", JSON.stringify(updated));
    setBookings(updated);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditFormData({ ...bookings[index] });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    const updated = bookings.map((entry, idx) =>
      idx === editingIndex ? editFormData : entry
    );
    localStorage.setItem("demoBookings", JSON.stringify(updated));
    setBookings(updated);
    setEditingIndex(null);
    setEditFormData(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditFormData(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-sky-700 text-center mb-6">
        Booked Demo Members
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, email, or country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-3 py-2 rounded-md w-full md:w-1/3"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-3 py-2 rounded-md w-full md:w-1/4"
        >
          <option value="firstName">Sort by First Name</option>
          <option value="lastName">Sort by Last Name</option>
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border px-3 py-2 rounded-md w-full md:w-1/4"
        />
      </div>

      {/* Table */}
      {filteredBookings.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded shadow-sm">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">First Name</th>
                <th className="px-4 py-2 border">Last Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Country</th>
                <th className="px-4 py-2 border">State</th>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Date</th> {/* ✅ NEW */}
                <th className="px-4 py-2 border">Time</th> {/* ✅ NEW */}
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((entry, idx) => (
                <tr key={idx} className="hover:bg-gray-100 text-center">
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">{entry.firstName}</td>
                  <td className="px-4 py-2 border">{entry.lastName}</td>
                  <td className="px-4 py-2 border">{entry.email}</td>
                  <td className="px-4 py-2 border">{entry.phone}</td>
                  <td className="px-4 py-2 border">{entry.country}</td>
                  <td className="px-4 py-2 border">{entry.state}</td>
                  <td className="px-4 py-2 border">{entry.type}</td>
                  <td className="px-4 py-2 border">{entry.date || "-"}</td>
                  <td className="px-4 py-2 border">{entry.time || "-"}</td>
                  <td className="px-4 py-2 border flex justify-center space-x-2">

                    <button
                      onClick={() => handleEdit(bookings.indexOf(entry))}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(bookings.indexOf(entry))}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No members found.</p>
      )}

      {/* Modal */}
      {editFormData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h3 className="text-xl font-bold text-sky-700 mb-4 text-center">
              Edit Member Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["firstName", "lastName", "email", "phone", "country", "state", "type"].map((field) => (
                <div key={field}>
                  <label className="block text-gray-700 capitalize mb-1">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={editFormData[field]}
                    onChange={handleEditChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedMembers;
