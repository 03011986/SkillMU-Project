import { Lock, Mail, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock authentication - redirect to user dashboard
    if (email === 'admin@skillmu.com') {
      navigate('/dashboard/admin');
    } else {
      navigate('/dashboard/user');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      {/* Left Side - Form */}
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
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Masuk ke SkillMU</h2>
            <p className="mt-2.5 text-slate-500 text-sm">
              Lanjutkan perjalanan belajar pengembangan diri Anda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-5">
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all placeholder:text-slate-400"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer accent-blue-600"
                />
                <span className="ml-2 text-slate-600 font-medium">Ingat saya</span>
              </label>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white py-3.5 px-4 rounded-xl font-bold shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Masuk ke Dashboard
            </button>

            <div className="text-center text-sm text-slate-500">
              Belum punya akun?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-bold transition-colors">
                Daftar sekarang
              </Link>
            </div>

            {/* Demo Credentials */}
            <div className="mt-8 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl space-y-2">
              <p className="text-xs text-blue-800 font-bold tracking-wide uppercase">Kredensial Demo:</p>
              <div className="text-xs text-slate-600 space-y-1">
                <p><span className="font-semibold text-blue-800">User:</span> user@skillmu.com • <span className="font-semibold text-blue-800">Password:</span> password123</p>
                <p><span className="font-semibold text-blue-800">Admin:</span> admin@skillmu.com • <span className="font-semibold text-blue-800">Password:</span> admin123</p>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-slate-950 via-blue-950 to-zinc-950 items-center justify-center p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-md text-white relative z-10 space-y-8">
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-15" />
            <img
              src="https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2ODU0OTY3MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Learning Illustration"
              className="relative rounded-2xl shadow-2xl border border-slate-800 w-full h-auto object-cover max-h-[320px]"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">
              Raih Kesuksesan dengan Skill yang Tepat
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Bergabunglah dengan ribuan pelajar yang telah meningkatkan karir 
              mereka melalui pembelajaran di SkillMU.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
