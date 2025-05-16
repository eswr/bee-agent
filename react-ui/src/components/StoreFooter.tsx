export const StoreFooter = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">About</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary">Our Story</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Roasting Process</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Coffee</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary">Brewing Guides</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Coffee Quiz</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Subscription FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-primary">Shipping Info</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Returns</a></li>
              <li><a href="#" className="text-gray-500 hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Newsletter</h3>
            <p className="mt-4 text-gray-500">Get updates about new roasts and brewing tips delivered to your inbox.</p>
            <div className="mt-4">
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};