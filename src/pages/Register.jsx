import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear error on new input
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      return setError("All fields are required.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find((u) => u.email === email);
    if (userExists) {
      return setError("Email already registered.");
    }

    // Save new user
    const newUser = { name, email, phone, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // simulate login

    alert("Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">

        {/* Left Real Estate Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
            alt="Register"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-sky-800 text-center mb-4">
            Create Your VisionProp Account
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Start managing your properties efficiently.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {["name", "email", "phone", "password", "confirmPassword"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700 font-medium mb-1 capitalize">
                  {field === "confirmPassword" ? "Confirm Password" : field}
                </label>
                <input
                  type={field.includes("password") ? "password" : field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`Enter ${field === "confirmPassword" ? "confirm password" : field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            ))}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 rounded"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-sky-700 hover:underline font-medium">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
