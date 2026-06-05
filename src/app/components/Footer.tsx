import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="SkillMU" className="h-8 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Platform pengembangan diri untuk meningkatkan soft skill dan hard skill. 
              Bergabunglah dengan ribuan pelajar dan profesional yang berkembang bersama SkillMU.
            </p>
            <div className="flex space-x-4 text-sm">
              <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
                <Mail className="h-4 w-4 text-blue-500" />
                <span className="font-medium">info@skillmu.ac.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Menu</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-blue-400 transition-colors duration-200">
                  Skill
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors duration-200">
                  Tentang
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-blue-400 transition-colors duration-200">
                  Masuk
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-6 tracking-wide">Kontak</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-500 flex-shrink-0" />
                <span className="leading-relaxed">Jl. Karimata No.49, Jember</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <span className="hover:text-blue-400 transition-colors cursor-pointer">support@skillmu.ac.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 text-xs text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} SkillMU - Skill Muhammadiyah. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
