const Footer = () => (
    <footer className="bg-sky-800 text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-start gap-2 mb-3">
            <span>📍</span>
            <p>No.12, Residency Road, Chennai - 600001</p>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>
          <div className="flex items-start gap-2">
            <span>✉️</span>
            <p>support@visionprop.com</p>
          </div>
        </div>
  
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Property Management</a></li>
            <li><a href="/contact" className="hover:underline">Contact Support</a></li>
          </ul>
        </div>
  
        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4 items-center">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl">
              🔗 LinkedIn
            </a>
          </div>
        </div>
      </div>
  
      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white border-opacity-30 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} VisionProp ERP. All rights reserved.
      </div>
    </footer>
  );
  
  export default Footer;
  