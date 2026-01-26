import { Link } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/images/logo.png"
                alt="AAction Taxi Logo"
                className="h-16 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-gray-300 font-inter text-sm leading-relaxed">
              Reliable taxi and airport transportation services across the Triangle area of North Carolina.
            </p>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4 text-taxi-yellow">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/flat-rates" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  Flat Rates
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  Make a Reservation
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  Corporate Accounts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4 text-taxi-yellow">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
                <a href="tel:9199246908" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  (919) 924-6908
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MessageSquare className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
                <a href="sms:9199246908" className="text-gray-300 hover:text-taxi-yellow transition-colors font-inter">
                  Text (919) 924-6908
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-inter">
                  Serving Raleigh, Durham, Chapel Hill, Cary, Apex, RDU & RTP
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4 text-taxi-yellow">Hours of Service</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-taxi-yellow flex-shrink-0 mt-0.5" />
              <div className="text-gray-300 font-inter">
                <p className="font-semibold">24/7 Service</p>
                <p className="text-sm">Always available for your transportation needs</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/reservation"
                className="inline-block bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-inter font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-inter text-sm">
            &copy; {new Date().getFullYear()} AAction Taxi Cab. All rights reserved. Professional taxi and airport transportation services in the Triangle area of North Carolina.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
