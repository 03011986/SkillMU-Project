import { BookOpen, Clock, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { userProgressData, skills } from '@/app/data/mockData';
import { SkillCard } from '@/app/components/SkillCard';

export function UserDashboard() {
  const recommendedSkills = skills.filter(skill => 
    !userProgressData.some(progress => progress.skillId === skill.id)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Greeting */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Selamat Datang Kembali! 👋
          </h1>
          <p className="text-slate-500 mt-1.5 text-sm leading-relaxed">Lanjutkan perjalanan belajar pengembangan diri Anda hari ini.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5">
            <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100/50">
              <BookOpen className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">3</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Kelas Diikuti</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5">
            <div className="p-3.5 bg-amber-50 text-amber-600 rounded-xl border border-amber-100/50">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">1</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Skill Selesai</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5">
            <div className="p-3.5 bg-purple-50 text-purple-600 rounded-xl border border-purple-100/50">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">24.5</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Jam Belajar</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5">
            <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100/50">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">65%</p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Progress Rerata</p>
            </div>
          </div>
        </div>

        {/* Kelas yang Diikuti */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Kelas yang Diikuti</h2>
            <Link
              to="/skills"
              className="text-blue-600 hover:text-blue-700 font-bold text-xs bg-blue-50 px-3.5 py-1.5 rounded-lg border border-blue-100/30 transition-all flex items-center"
            >
              Lihat Semua
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="space-y-4">
            {userProgressData.map((progress) => (
              <div
                key={progress.skillId}
                className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-blue-500/15 hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-base font-bold text-slate-800">
                        {progress.skillTitle}
                      </h3>
                      {progress.completed && (
                        <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xxs font-bold rounded-lg border border-blue-100">
                          Selesai
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">
                      Terakhir diakses: <span className="text-slate-600 font-semibold">{progress.lastAccessed}</span>
                    </p>
                  </div>

                  <div className="flex-shrink-0 w-full md:w-64">
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span className="text-slate-500 font-semibold">Progress Belajar</span>
                      <span className="font-bold text-slate-800">
                        {progress.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${
                          progress.completed
                            ? 'bg-blue-500'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-500 shadow-sm shadow-blue-500/10'
                        }`}
                        style={{ width: `${progress.progress}%` }}
                      />
                    </div>
                  </div>

                  <Link
                    to={`/skills/${progress.skillId}`}
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/5 hover:shadow-blue-500/15 hover:-translate-y-0.5 active:translate-y-0 text-center transition-all duration-300"
                  >
                    {progress.completed ? 'Lihat Ulang' : 'Lanjutkan'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rekomendasi Skill Lanjutan */}
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">Rekomendasi Skill Lanjutan</h2>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">Skill yang relevan untuk memperkuat kapabilitas Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
