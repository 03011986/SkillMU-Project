import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';
import { LandingPage } from '@/app/pages/LandingPage';
import { LoginPage } from '@/app/pages/LoginPage';
import { RegisterPage } from '@/app/pages/RegisterPage';
import { UserDashboard } from '@/app/pages/UserDashboard';
import { AdminDashboard } from '@/app/pages/AdminDashboard';
import { SkillsListPage } from '@/app/pages/SkillsListPage';
import { SkillDetailPage } from '@/app/pages/SkillDetailPage';
import { Check } from 'lucide-react';

export default function App() {
  return (
    // Tambahkan properti basename di sini agar rute menyesuaikan sub-folder GitHub Pages
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/skills" element={<SkillsListPage />} />
            <Route path="/skills/:id" element={<SkillDetailPage />} />
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

// Simple About Page Component
function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50/50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">Tentang SkillMU</h1>
          <p className="text-slate-500 leading-relaxed text-sm">Mengenal platform pembelajaran resmi persyarikatan Muhammadiyah.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-10 space-y-8">
          <div className="space-y-4">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              <strong className="text-blue-600">SkillMU (Skill Muhammadiyah)</strong> adalah platform pengembangan diri terpadu yang 
              dirancang khusus untuk meningkatkan soft skill dan hard skill berbagai kalangan, mulai dari 
              pelajar, mahasiswa, kader persyarikatan, hingga para profesional.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Kami menyediakan ekosistem kelas online berkualitas tinggi bersama instruktur andal dan 
              praktisi berpengalaman yang siap mendampingi Anda melangkah lebih jauh dalam karir dan karya nyata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Visi Kami</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Menjadi platform pembelajaran inklusif terdepan yang mencerahkan dan memberdayakan setiap individu untuk 
                berkembang melalui akses pendidikan berkualitas tinggi secara global.
              </p>
            </div>
            <div className="space-y-3">
              <h2 className="text-lg font-bold text-slate-800 tracking-tight">Misi Kami</h2>
              <ul className="space-y-3 text-slate-600 text-sm">
                {[
                  'Menyediakan materi pembelajaran berkualitas tinggi',
                  'Menghadirkan instruktur yang kompeten dan berpengalaman',
                  'Membangun komunitas pembelajar yang saling mendukung',
                  'Memberikan sertifikat kelulusan yang diakui industri',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mt-0.5 border border-blue-100">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}