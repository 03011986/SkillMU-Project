import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = location.pathname.includes('/dashboard');

  const navLinks = isLoggedIn
    ? []
    : [
        { name: 'Home', path: '/' },
        { name: 'Skill', path: '/skills' },
        { name: 'Tentang', path: '/about' },
      ];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100/80 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="SkillMU"
              className="h-10 w-auto object-contain hover:scale-102 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                  location.pathname === link.path ? 'text-blue-600 after:scale-x-100' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            {!isLoggedIn ? (
              <Link
                to="/login"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Masuk
              </Link>
            ) : (
              <Link
                to="/"
                className="text-slate-600 hover:text-blue-600 font-semibold transition-colors duration-200"
              >
                Keluar
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-slate-50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-slate-600 hover:text-blue-600 font-medium transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-50 ${
                    location.pathname === link.path ? 'text-blue-600 bg-blue-50/50 font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {!isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 py-2.5 rounded-xl text-center shadow-md transition-all"
                >
                  Masuk
                </Link>
              ) : (
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-blue-600 font-semibold transition-colors px-2 py-1.5 rounded-lg hover:bg-slate-50"
                >
                  Keluar
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
