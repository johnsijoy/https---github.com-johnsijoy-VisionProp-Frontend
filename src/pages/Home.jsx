const Home = () => (
    <div className="bg-gray-50 min-h-screen">
    {/* Hero Section */}
<section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-16 px-6">
  {/* Left Content */}
  <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
    <h1 className="text-4xl md:text-5xl font-bold text-sky-700 mb-6">
      Simplify Real Estate Management
    </h1>
    <p className="text-gray-700 text-lg mb-6">
      VisionProp ERP helps manage your listings, clients, and sales from a unified dashboard. Boost efficiency and close deals faster!
    </p>
    <a
  href="/register"
  className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-md shadow block w-fit mx-auto md:mx-0"
>
  Get Started Free
</a>

{/* Oval Book Demo Button below with spacing */}
<a
  href="/book-demo"
  className="mt-4 inline-block border-2 border-sky-600 text-sky-600 font-semibold px-6 py-2 rounded-full hover:bg-sky-600 hover:text-white transition duration-200 block w-fit mx-auto md:mx-0"
>
  Book a Demo
</a>

  </div>

  {/* Right Image */}
  <div className="md:w-1/2 flex justify-center">
    <img
      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
      alt="Modern Real Estate"
      className="rounded-xl shadow-xl w-full max-w-md object-cover"
    />
  </div>
</section>

  
      {/* Feature Section */}
      <section className="py-16 bg-white px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-12">Explore Property Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=600&q=80"
              alt="Luxury Villas"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Luxury Villas</h3>
          </div>
  
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80"
              alt="Apartments"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Apartments</h3>
          </div>
  
          <div className="bg-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition">
            <img
              src="https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?auto=format&fit=crop&w=600&q=80"
              alt="Commercial Buildings"
              className="rounded-lg mb-4 h-48 w-full object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 text-center">Commercial Buildings</h3>
          </div>
        </div>
      </section>
    </div>
    
  );
  
  export default Home;