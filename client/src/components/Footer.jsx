const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-12 w-screen" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-sm">Powered by blockchain technology for secure and transparent case tracking.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>Court Directory</li>
                <li>Legal Aid Services</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <p className="text-sm">Stay updated with the latest judicial news and updates.</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 JusticeHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
export default Footer;
  