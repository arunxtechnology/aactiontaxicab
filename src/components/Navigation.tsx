import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Flat Rates', path: '/flat-rates' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Corporate Accounts', path: '/corporate' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Desktop Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src="/images/logo.png"
              alt="AAction Taxi Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <span className="font-poppins font-bold text-lg sm:text-xl text-deep-navy hidden md:block">
              AAction Taxi Cab
            </span>
          </Link>

          {/* Desktop Menu Links - Hidden below xl */}
          <div className="hidden xl:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter font-medium text-sm whitespace-nowrap transition-colors ${isActive(link.path)
                    ? 'text-taxi-yellow'
                    : 'text-dark-slate hover:text-taxi-yellow'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Right (Desktop) */}
          <div className="hidden xl:flex items-center space-x-3 flex-shrink-0">
            <a
              href="tel:9199246908"
              className="flex items-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-inter font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call</span>
            </a>
            <a
              href="sms:9199246908"
              className="flex items-center space-x-2 bg-sky-blue hover:bg-blue-500 text-white font-inter font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Text Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-dark-slate" />
            ) : (
              <Menu className="w-6 h-6 text-dark-slate" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-inter font-medium px-4 py-3 rounded-lg transition-colors ${isActive(link.path)
                      ? 'bg-taxi-yellow text-deep-navy'
                      : 'text-dark-slate hover:bg-gray-100'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200">
              <a
                href="tel:9199246908"
                className="flex items-center justify-center space-x-2 bg-taxi-yellow hover:bg-yellow-500 text-deep-navy font-inter font-medium px-4 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(919) 924-6908</span>
              </a>
              <a
                href="sms:9199246908"
                className="flex items-center justify-center space-x-2 bg-sky-blue hover:bg-blue-500 text-white font-inter font-medium px-4 py-3 rounded-lg transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Text Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
