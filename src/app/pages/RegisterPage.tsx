import { ArrowLeft, Check, Lock, Mail, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock registration - redirect to user dashboard
    navigate('/dashboard/user');
  };

  const benefits = [
    'Akses ke 124+ skill berkualitas',
    'Belajar dengan instruktur berpengalaman',
    'Sertifikat setelah menyelesaikan kelas',
    'Komunitas pelajar yang aktif',
    'Materi pembelajaran yang selalu diperbarui',
    'Belajar kapan saja, di mana saja',
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      {/* Left Side - Benefits */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-slate-950 via-blue-950 to-zinc-950 items-center justify-center p-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-md text-white relative z-10 space-y-8">
          <h3 className="text-3xl font-extrabold tracking-tight">
            Manfaat Bergabung di SkillMU
          </h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500/10 text-blue-400 border border-blue-500/25 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
            <p className="text-lg font-bold mb-2">
              Bergabung dengan 8,450+ pelajar
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              yang sudah mengembangkan skill mereka bersama platform SkillMU.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-8 lg:px-12">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link
              to="/"
              className="inline-flex items-center text-slate-500 hover:text-blue-600 text-sm font-semibold transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Home
            </Link>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Daftar Akun Baru</h2>
            <p className="mt-2.5 text-slate-500 text-sm">
              Mulai perjalanan belajar pengembangan diri Anda hari ini.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all placeholder:text-slate-400"
                    placeholder="nama@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    id="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all placeholder:text-slate-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-slate-700 mb-2">
                  Konfirmasi Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all placeholder:text-slate-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-start text-sm pt-1.5">
              <input
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded mt-0.5 cursor-pointer accent-blue-600"
              />
              <span className="ml-2 text-slate-500 leading-normal font-medium">
                Saya setuju dengan{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Syarat & Ketentuan
                </a>{' '}
                dan{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                  Kebijakan Privasi
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white py-3.5 px-4 rounded-xl font-bold shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Daftar Sekarang
            </button>

            <div className="text-center text-sm text-slate-500">
              Sudah punya akun?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">
                Masuk di sini
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
