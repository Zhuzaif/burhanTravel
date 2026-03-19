import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2 group w-fit">
              <div className="bg-blue-500 p-2 rounded-xl group-hover:bg-blue-400 transition-colors">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight tracking-tight">
                  Burhan Tours
                </span>
                <span className="text-[10px] text-blue-300 tracking-widest uppercase font-semibold">
                  & Travel
                </span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Your trusted partner for premium travel experiences, seamless visa assistance, and unforgettable journeys across the globe.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#packages" className="text-gray-400 hover:text-blue-400 transition-colors">Tour Packages</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Our Services</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Umrah Packages</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Hajj Services</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">International Tours</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Domestic Tours</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Visa Assistance</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Ticket Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest travel updates and offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Burhan Tours & Travel. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Powered by <a href="mailto:info@hudalabs.app" className="text-white font-semibold hover:text-blue-400 transition-colors">HudaLabs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
