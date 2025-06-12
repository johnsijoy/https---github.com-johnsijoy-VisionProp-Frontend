const Register = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
  
        {/* Left Real Estate Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80"
            alt="Register background"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-sky-800 text-center mb-4">Create Your VisionProp Account</h2>
          <p className="text-center text-gray-600 mb-6">Start managing your properties more efficiently.</p>
  
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
  
            <div>
              <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
  
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
  
  export default Register;
  