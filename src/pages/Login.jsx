const Login = () => (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
  
        {/* Left Side Image */}
        <div className="md:w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Real Estate"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right Side Form */}
        <div className="md:w-1/2 w-full p-8">
          <h2 className="text-3xl font-bold text-sky-800 text-center mb-6">Welcome Back</h2>
          <p className="text-center text-gray-600 mb-6">Login to manage your real estate operations.</p>
  
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email or Username</label>
              <input
                type="text"
                placeholder="Enter your email or username"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
  
            <div className="text-right text-sm text-sky-600 hover:underline cursor-pointer">
              Forgot password?
            </div>
  
            <button
              type="submit"
              className="w-full bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 rounded"
            >
              Login
            </button>
          </form>
  
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-sky-700 hover:underline font-medium">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
  
  export default Login;
  