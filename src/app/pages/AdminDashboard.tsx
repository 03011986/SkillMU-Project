import { Users, BookOpen, GraduationCap, TrendingUp, UserPlus, Activity, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { adminStats } from '@/app/data/mockData';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard Admin</h1>
          <p className="text-slate-500 mt-1.5 text-sm leading-relaxed">Kelola platform pembelajaran SkillMU secara efisien dari satu dasbor pusat.</p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Total Users */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-blue-50 text-blue-600 rounded-xl border border-blue-100/50">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">
                  {adminStats.totalUsers.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Total Pengguna</p>
              </div>
            </div>
             <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg font-bold border border-blue-100">+12%</span>
          </div>

          {/* Total Skills */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-amber-50 text-amber-600 rounded-xl border border-amber-100/50">
                <BookOpen className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">
                  {adminStats.totalSkills}
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Total Skill</p>
              </div>
            </div>
             <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg font-bold border border-blue-100">+8%</span>
          </div>

          {/* Total Classes */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-indigo-50 text-indigo-600 rounded-xl border border-indigo-100/50">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">
                  {adminStats.totalClasses}
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Total Kelas</p>
              </div>
            </div>
             <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg font-bold border border-blue-100">+15%</span>
          </div>

          {/* Active Users */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5">
            <div className="p-3.5 bg-purple-50 text-purple-600 rounded-xl border border-purple-100/50">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {adminStats.activeUsers.toLocaleString()}
              </p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Pengguna Aktif</p>
            </div>
          </div>

          {/* Completion Rate */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-5">
            <div className="p-3.5 bg-pink-50 text-pink-600 rounded-xl border border-pink-100/50">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                {adminStats.completionRate}%
              </p>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">Tingkat Penyelesaian</p>
            </div>
          </div>

          {/* New Users This Month */}
          <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="p-3.5 bg-cyan-50 text-cyan-600 rounded-xl border border-cyan-100/50">
                <UserPlus className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">
                  {adminStats.newUsersThisMonth}
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-0.5">User Baru Bulan Ini</p>
              </div>
            </div>
             <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg font-bold border border-blue-100">+20%</span>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 tracking-tight mb-6">Menu Kelola Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kelola Skill */}
            <Link
               to="/skills"
               className="group relative bg-gradient-to-br from-blue-600 to-indigo-800 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
             >
               <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all" />
               <BookOpen className="h-10 w-10 text-blue-200 mb-6" />
               <h3 className="text-xl font-bold mb-2 tracking-tight">Kelola Skill</h3>
               <p className="text-blue-100/80 mb-6 leading-relaxed text-sm">
                 Tambah, edit, atau hapus skill dan materi pembelajaran kurikulum.
               </p>
              <div className="flex items-center text-white font-bold text-sm group-hover:translate-x-1 transition-transform">
                Buka Menu Kelola
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Kelola Kelas */}
            <div className="group relative bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all" />
              <GraduationCap className="h-10 w-10 text-amber-200 mb-6" />
              <h3 className="text-xl font-bold mb-2 tracking-tight">Kelola Kelas</h3>
              <p className="text-amber-100/80 mb-6 leading-relaxed text-sm">
                Atur jadwal pendaftaran, instruktur, dan sesi interaksi kelas online.
              </p>
              <div className="flex items-center text-white font-bold text-sm group-hover:translate-x-1 transition-transform">
                Buka Menu Kelola
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>

            {/* Kelola User */}
            <div className="group relative bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all" />
              <Users className="h-10 w-10 text-purple-200 mb-6" />
              <h3 className="text-xl font-bold mb-2 tracking-tight">Kelola User</h3>
              <p className="text-purple-100/80 mb-6 leading-relaxed text-sm">
                Kelola hak akses pengguna, reset password, dan status keanggotaan.
              </p>
              <div className="flex items-center text-white font-bold text-sm group-hover:translate-x-1 transition-transform">
                Buka Menu Kelola
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activities Table */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">Aktivitas Pengguna Terbaru</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-100 text-sm">
              <thead className="bg-slate-50/80">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Waktu
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Pengguna
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Aktivitas
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-slate-600">
                {[
                  { time: '10 menit lalu', user: 'Ahmad Fauzi', activity: 'Mendaftar kelas baru', status: 'success' },
                  { time: '1 jam lalu', user: 'Siti Nurhaliza', activity: 'Menyelesaikan skill', status: 'success' },
                  { time: '2 jam lalu', user: 'Budi Santoso', activity: 'Mengakses materi', status: 'info' },
                  { time: '3 jam lalu', user: 'Rina Kartika', activity: 'Mendaftar akun baru', status: 'success' },
                ].map((activity, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400 font-medium">
                      {activity.time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-800 font-bold">
                      {activity.user}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-600">
                      {activity.activity}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2.5 py-1 text-xs font-bold rounded-lg border ${
                           activity.status === 'success'
                             ? 'bg-blue-50 text-blue-700 border-blue-100'
                             : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                         }`}
                       >
                         {activity.status === 'success' ? 'Berhasil' : 'Informasi'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                         <button className="p-2 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-xl transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-600 rounded-xl transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
