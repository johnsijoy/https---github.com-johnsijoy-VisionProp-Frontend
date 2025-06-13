import { useEffect, useState } from "react";

const BookedMembers = () => {
  const [bookings, setBookings] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editFormData, setEditFormData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("demoBookings")) || [];
    setBookings(stored);
  }, []);

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
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold text-sky-700 mb-6 text-center">
        Booked Demo Members
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No demo bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded">
            <thead className="bg-sky-600 text-white">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">First Name</th>
                <th className="py-2 px-4 border">Last Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Country</th>
                <th className="py-2 px-4 border">State</th>
                <th className="py-2 px-4 border">Type</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((entry, idx) => (
                <tr key={idx} className="text-center hover:bg-gray-100">
                  <td className="py-2 px-4 border">{idx + 1}</td>
                  <td className="py-2 px-4 border">{entry.firstName}</td>
                  <td className="py-2 px-4 border">{entry.lastName}</td>
                  <td className="py-2 px-4 border">{entry.email}</td>
                  <td className="py-2 px-4 border">{entry.phone}</td>
                  <td className="py-2 px-4 border">{entry.country}</td>
                  <td className="py-2 px-4 border">{entry.state}</td>
                  <td className="py-2 px-4 border">{entry.type}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEdit(idx)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(idx)}
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
      )}

      {/* Modal */}
      {editFormData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-xl w-full max-w-lg">
            <h3 className="text-xl font-bold text-sky-700 mb-4 text-center">
              Edit Member Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "firstName",
                "lastName",
                "email",
                "phone",
                "country",
                "state",
                "type",
              ].map((field) => (
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
