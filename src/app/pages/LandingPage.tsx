import { ArrowRight, BookOpen, Brain, Code, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SkillCard } from '@/app/components/SkillCard';
import { skills } from '@/app/data/mockData';

export function LandingPage() {
  const recommendedSkills = skills.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-zinc-950 text-white overflow-hidden py-24 lg:py-32">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Platform Pengembangan Diri No.1
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Kembangkan Diri dengan{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Soft Skill</span>{' '}
                dan{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">Hard Skill</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
                Platform pembelajaran terpadu untuk pelajar, mahasiswa, dan profesional. 
                Tingkatkan kompetensi Anda bersama instruktur berpengalaman.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/skills"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Jelajahi Skill
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white rounded-xl font-bold transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-15" />
              <img
                src="https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2ODU0OTY3MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students Learning"
                className="relative rounded-2xl shadow-2xl border border-slate-800/80 w-full h-auto object-cover max-h-[440px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '8,450+', label: 'Pelajar Aktif' },
              { icon: BookOpen, value: '124+', label: 'Skill Tersedia' },
              { icon: Target, value: '356+', label: 'Kelas Online' },
              { icon: TrendingUp, value: '78%', label: 'Tingkat Kelulusan' },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-slate-50/40 hover:bg-slate-50 border border-slate-100/80 hover:border-blue-500/10 rounded-2xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl mb-4 border border-blue-100/50">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-800">{stat.value}</div>
                <div className="text-xs text-slate-500 font-semibold tracking-wide uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kategori Skill Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Pilih Kategori Pengembangan Anda
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
              Jelajahi kelas-kelas terstruktur yang didesain khusus untuk mengasah berbagai kompetensi penting Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Soft Skill Card */}
            <Link
              to="/skills?category=soft-skill"
              className="group relative bg-gradient-to-br from-purple-900 to-indigo-950 p-10 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl mb-6">
                <Brain className="h-7 w-7 text-purple-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Soft Skill</h3>
              <p className="text-purple-200/80 mb-6 leading-relaxed text-sm">
                Kembangkan kemampuan interpersonal, komunikasi, kepemimpinan, 
                dan keterampilan personal lainnya yang penting untuk kesuksesan karir.
              </p>
              <div className="flex items-center font-bold text-white text-sm group-hover:translate-x-1 transition-transform">
                Lihat Kelas Soft Skill
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Hard Skill Card */}
            <Link
              to="/skills?category=hard-skill"
              className="group relative bg-gradient-to-br from-blue-900 to-indigo-950 p-10 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
              <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl mb-6">
                <Code className="h-7 w-7 text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Hard Skill</h3>
              <p className="text-blue-200/80 mb-6 leading-relaxed text-sm">
                Kuasai keterampilan teknis seperti programming, design, data analysis, 
                dan kemampuan praktis lainnya yang terukur dan spesifik.
              </p>
              <div className="flex items-center font-bold text-white text-sm group-hover:translate-x-1 transition-transform">
                Lihat Kelas Hard Skill
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Rekomendasi Kelas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Rekomendasi Kelas Terpopuler
              </h2>
              <p className="text-slate-500">
                Pilihan kurikulum terfavorit yang telah meluluskan ribuan siswa.
              </p>
            </div>
            <Link
              to="/skills"
              className="mt-4 md:mt-0 inline-flex items-center text-blue-600 hover:text-blue-700 font-bold text-sm bg-blue-50 px-4 py-2 rounded-xl border border-blue-100/50 hover:bg-blue-100/30 transition-colors"
            >
              Lihat Semua Kelas
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Siap Meningkatkan Skill & Karir Anda?
          </h2>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Bergabunglah dengan ribuan pembelajar aktif yang sudah berkembang bersama platform SkillMU.
          </p>
          <div className="pt-2">
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-0.5"
            >
              Mulai Belajar Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
