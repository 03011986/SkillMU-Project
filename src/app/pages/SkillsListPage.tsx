import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { SkillCard } from '@/app/components/SkillCard';
import { skills } from '@/app/data/mockData';
import { useSearchParams } from 'react-router-dom';

export function SkillsListPage() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryFromUrl || 'all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch = skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || skill.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Daftar Kelas & Skill</h1>
          <p className="text-slate-500 max-w-xl leading-relaxed">
            Temukan skill yang tepat untuk mengembangkan kompetensi profesional dan personal Anda.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                Cari Skill
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari berdasarkan nama atau deskripsi..."
                  className="w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                Kategori
              </label>
              <div className="relative">
                <Filter className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all appearance-none cursor-pointer"
                >
                  <option value="all">Semua Kategori</option>
                  <option value="soft-skill">Soft Skill</option>
                  <option value="hard-skill">Hard Skill</option>
                </select>
              </div>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2.5">
                Level Kesulitan
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-slate-50/50 transition-all cursor-pointer"
              >
                <option value="all">Semua Level</option>
                <option value="Pemula">Pemula</option>
                <option value="Menengah">Menengah</option>
                <option value="Lanjutan">Lanjutan</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-slate-500 font-medium">
            Menampilkan <span className="text-slate-800 font-bold bg-slate-100 px-2.5 py-1 rounded-md">{filteredSkills.length}</span> dari{' '}
            <span className="text-slate-800 font-semibold">{skills.length}</span> skill
          </p>
        </div>

        {/* Skills Grid */}
        {filteredSkills.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl mb-4 border border-slate-100">
              <Search className="h-7 w-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">
              Tidak Ada Skill Ditemukan
            </h3>
            <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
              Coba sesuaikan kata kunci pencarian Anda atau ubah filter kategori/level yang dipilih.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
